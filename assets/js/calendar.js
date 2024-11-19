class Calendar {
  year = 1924;
  months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  events = {};
  
  form = document.getElementById('form-event');
  modal = document.getElementById('modal_form');
  eventsList = document.querySelector('.events-list');

  canEdit = false;

  constructor(year = 1924) {
    this.year = year;
    this.canEdit = document.querySelector('#can-edit').value;
    console.log('%ccalendar.js :: 15 =============================', 'color: #f00; font-size: 1rem');
    console.log(this.canEdit);
  }


  display() {
    let calendar = document.getElementById('calendar');
    let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
      'Novembre', 'Décembre'
    ];
    let year = this.year;

    let html = '';
    for (let i = 0; i < months.length; i++) {
      html += '<table class="calendar" border="1">';
      html += '<thead>';
      html += '<tr>';
      html += '<th colspan="7" class="month">' + months[i] + ' ' + year + '</th>';
      html += '</tr>';
      html += '</thead>';
      html += '<tr>';
      html += '<th class="day-of-week">Lun</th>';
      html += '<th class="day-of-week">Mar</th>';
      html += '<th class="day-of-week">Mer</th>';
      html += '<th class="day-of-week">Jeu</th>';
      html += '<th class="day-of-week">Ven</th>';
      html += '<th class="day-of-week">Sam</th>';
      html += '<th class="day-of-week">Dim</th>';
      html += '</tr>';

      let date = new Date(year, i, 0);
      let day = date.getDay();
      let daysInMonth = new Date(year, i + 1, 0).getDate();
      // const year = date.getFullYear();
      let monthString = i + 1;
      monthString = monthString < 10 ? '0' + monthString : monthString;

      let css = 0;
      html += '<tr>';
      for (let j = 0; j < day; j++) {
        css++;
        css = css % 7;
        html += '<td class="day day--' + css + '"></td>';
      }

      for (let j = 1; j <= daysInMonth; j++) {
        css++;
        css = css % 7;

        let dayString = j;
        dayString = dayString < 10 ? '0' + dayString : dayString;


        html += '<td data-date="' + year + '-' + monthString + '-' + dayString + '" class="day day--' + css +
          '"><span>' + j + '</span></td>';
        if ((j + day) % 7 == 0) {
          html += '</tr><tr>';
        }
      }

      for (let j = css; j <= 6; j++) {
        css++;
        css = css % 7;
        html += '<td class="day day--' + css + '"></td>';
      }

      html += '</tr>';
      html += '</table>';
    }
    calendar.innerHTML = html;
  }

  async loadEvents() {
    const response = await fetch('/wp-json/taverne/v1/events')
    const data = await response.json();
    this.events = data.events;

    return this.events;
  }

  async refresh() {
    const events = await this.loadEvents();
    const days = document.querySelectorAll('table.calendar .day');

    days.forEach(day => {
      const date = day.getAttribute('data-date');
      if (events[date]) {
        if (!day.classList.contains('has-event')) {
          day.classList.add('has-event');

          let tooltip = '';
          events[date].forEach(event => {
            tooltip += '<div class="tooltip-event">' + event.title + '</div>';
          });

          tippy(day, {
            content: tooltip,
            allowHTML: true,
          });

        }
      }
    });
    return this.events;
  }

  async saveEvent() {
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const content = document.getElementById('event-content').value;
    const scenario = document.getElementById('event-scenario').value;
    const evenId = document.getElementById('event-id').value;

    const data = {
      title: title,
      date: date,
      content: content,
      scenario: scenario,
      id: evenId,
      action: 'add_event'
    };

    fetch('/wp-json/taverne/v1/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      document.getElementById('modal_form').close();
      toast('Événement ajouté');
      this.refresh();
    })
  }

  initForm() {

    if(this.canEdit == 0) {
      return;
    }


    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      this.saveEvent();
    });
  }

  async saveEventsOrder(eventIds) {
    const data = {
      eventIds: eventIds,
      action: 'save_events_order'
    };

    fetch('/wp-json/taverne/v1/events/set-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      toast('Ordre des événements sauvegardé');
    })
  }

  editEvent(event) {
    const inputEventId = document.querySelector('#event-id');
    inputEventId.value = event.id;

    const titleInput = document.getElementById('event-title');
    titleInput.value = event.title;

    const dateInput = document.getElementById('event-date');
    dateInput.value = event.date;

    const contentElement = tinymce.get('event-content');
    contentElement.setContent(event.content);

    const scenarioInput = document.getElementById('event-scenario');
    console.log('%ccalendar.js :: 181 =============================', 'color: #f00; font-size: 1rem');
    console.log(event);
    if(event.scenario) {
      scenarioInput.value = event.scenario.ID;
    }
    else {
      scenarioInput.selectedIndex = 0;
    }

    this.selectTab(1);
  }

  selectTab(index) {
    const tabs = document.querySelectorAll('input.tab');
    tabs.forEach(tab => {
      tab.checked = false;
    });
    tabs[index].checked = true;
  }

  showModal() {
    this.resetForm();
    this.modal.showModal();
    this.selectTab(0);
  }

  resetForm() {

    if(this.canEdit == 0) {
      return;
    }

    const eventIdInput = document.getElementById('event-id');
    eventIdInput.value = '';
    
    const titleInput = document.getElementById('event-title');
    titleInput.value = '';

    const dateInput = document.getElementById('event-date');
    dateInput.value = '';

    const scenarioInput = document.getElementById('event-scenario');
    // select first option
    scenarioInput.selectedIndex = 0;

    const contentElement = tinymce.get('event-content');
    contentElement.setContent('');
  }




  displayEvents(date) {
    this.eventsList.innerHTML = '';
    if (this.events[date]) {
      this.events[date].forEach(event => {
        const eventElement = document.createElement('li');


        const title = document.createElement('h3');
        title.innerHTML = '<span>' + event.title + '</span>';

        const content = document.createElement('div');
        content.innerHTML = event.content;


        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        editButton.addEventListener('click', () => {
          this.editEvent(event);
        });

        if(event.scenario) {
          const scenario = document.createElement('div');
          scenario.classList.add('scenario');
          scenario.innerHTML = event.scenario.post_title;
          eventElement.appendChild(scenario);
        }

        if(this.canEdit == 1) {
          title.appendChild(editButton);
        }

        eventElement.appendChild(title);
        eventElement.appendChild(content);


        eventElement.setAttribute('data-id', event.id);
        this.eventsList.appendChild(eventElement);
      });
    }

  }

  makeInteractive() {

    this.initForm();

        // make sortable with jQueryUI
        $(this.eventsList).sortable({
          update: (event, ui) => {
            const items = $(this.eventsList).children();
            const newOrder = [];
            items.each(function (index, item) {
              newOrder.push(item.getAttribute('data-id'));
            });

            this.saveEventsOrder(newOrder);
          }
        });


    const days = document.querySelectorAll('table.calendar .day');
    days.forEach(day => {
      day.addEventListener('click', (event) => {
        const currentTarget = event.currentTarget;
        const date = currentTarget.getAttribute('data-date');

        this.displayEvents(date);

        const titleElement = document.querySelector('#modal_main__content h1');
        const dateObject = new Date(date);
        titleElement.innerHTML = dateObject.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });

        this.showModal();
        
        if(this.canEdit == 1) {
          const dateInput = document.getElementById('event-date');
          dateInput.value = date;
        }

      });
    });
  }
}





document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('calendar')) {
    const calendar = new Calendar(1924);
    calendar.display();
    calendar.refresh().then(() => {
      calendar.makeInteractive();
    });
  }
});

















async function getEvents() {
  const response = await fetch('/wp-json/taverne/v1/events')
  const data = await response.json();
  return data;
}

async function initCalendar(year) {
  displayCalendar(year);
  const response = await refreshCalendar()
  console.log('%ccalendar.js :: 20 =============================', 'color: #f00; font-size: 1rem');
  console.log(response);

  days = document.querySelectorAll('table.calendar .day');

  days.forEach(day => {
    day.addEventListener('click', function () {
      const date = this.getAttribute('data-date');
      const titleElement = document.querySelector('#modal_main__content h1');

      const dateObject = new Date(date);
      titleElement.innerHTML = dateObject.toLocaleDateString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const modal = document.getElementById('modal_form');

      const eventsList = document.querySelector('.events-list');
      eventsList.innerHTML = '';
      if (response.events[date]) {
        response.events[date].forEach(event => {
          const eventElement = document.createElement('li');
          eventElement.innerHTML = event.title;
          eventsList.appendChild(eventElement);
        });
      }


      modal.showModal();

      const dateInput = document.getElementById('event-date');
      dateInput.value = date;
    });
  });

  async function refreshCalendar() {
    const response = await getEvents();
    const days = document.querySelectorAll('table.calendar .day');

    days.forEach(day => {
      const date = day.getAttribute('data-date');
      if (response.events[date]) {
        if (!day.classList.contains('has-event')) {
          day.classList.add('has-event');
        }
      }
    });

    return response;
  }




  const formEvent = document.getElementById('form-event');
  console.log('%ccalendar.blade.php :: 140 =============================', 'color: #f00; font-size: 1rem');
  console.log(formEvent);
  formEvent.addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const content = document.getElementById('event-content').value;

    console.log('%ccalendar.blade.php :: 148 =============================',
      'color: #f00; font-size: 1rem');
    console.log(title);
    console.log(date);
    console.log(content);

    const data = {
      title: title,
      date: date,
      content: content,
      action: 'add_event'
    };

    console.log('%ccalendar.blade.php :: 158 =============================',
      'color: #f00; font-size: 1rem');
    console.log(data);

    // send post data to /wp-json/taverne/v1/event
    fetch('/wp-json/taverne/v1/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        document.getElementById('modal_form').close();
        toast('Événement ajouté');
        refreshCalendar();
      })

  });
}

// ===========================


function displayCalendar(year) {

  let calendar = document.getElementById('calendar');
  let months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre',
    'Novembre', 'Décembre'
  ];

  let html = '';
  for (let i = 0; i < months.length; i++) {
    html += '<table class="calendar" border="1">';
    html += '<thead>';
    html += '<tr>';
    html += '<th colspan="7">' + months[i] + ' ' + year + '</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tr>';
    html += '<th class="day-of-week">Lun</th>';
    html += '<th class="day-of-week">Mar</th>';
    html += '<th class="day-of-week">Mer</th>';
    html += '<th class="day-of-week">Jeu</th>';
    html += '<th class="day-of-week">Ven</th>';
    html += '<th class="day-of-week">Sam</th>';
    html += '<th class="day-of-week">Dim</th>';
    html += '</tr>';

    let date = new Date(year, i, 0);
    let day = date.getDay();
    let daysInMonth = new Date(year, i + 1, 0).getDate();
    // const year = date.getFullYear();
    let monthString = i + 1;
    monthString = monthString < 10 ? '0' + monthString : monthString;

    let css = 0;
    html += '<tr>';
    for (let j = 0; j < day; j++) {
      css++;
      css = css % 7;
      html += '<td class="day day--' + css + '"></td>';
    }

    for (let j = 1; j <= daysInMonth; j++) {
      css++;
      css = css % 7;

      let dayString = j;
      dayString = dayString < 10 ? '0' + dayString : dayString;


      html += '<td data-date="' + year + '-' + monthString + '-' + dayString + '" class="day day--' + css +
        '"><span>' + j + '</span></td>';
      if ((j + day) % 7 == 0) {
        html += '</tr><tr>';
      }
    }

    for (let j = css; j <= 6; j++) {
      css++;
      css = css % 7;
      html += '<td class="day day--' + css + '"></td>';
    }

    html += '</tr>';
    html += '</table>';
  }
  calendar.innerHTML = html;
}
