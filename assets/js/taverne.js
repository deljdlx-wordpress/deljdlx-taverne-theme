
// get all elements with "data-modal" attribute
const modal_triggers = document.querySelectorAll('[data-modal]');

// for each element, add a click event listener
modal_triggers.forEach(trigger => {
    trigger.addEventListener('click', () => {

      console.log('%ctaverne.js :: 9 =============================', 'color: #f00; font-size: 1rem');
      console.log(modal_main);

      const modalContentElement = document.querySelector('#modal_main__content');
      // if trigger element is image, set modal content to image
      if (trigger.tagName === 'IMG') {
        modalContentElement.innerHTML = `<img src="${trigger.src}" alt="${trigger.alt}" />`;
      }

      modal_main.showModal()
    });
});


function toast(message, duration = 10000) {
  // show toast
  Toastify({
    text: message,
    duration: duration,
    // destination: "https://github.com/apvarun/toastify-js",
    // newWindow: true,
    close: true,
    className: "taverne-toast",
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        // background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function() {} // Callback after click
  }).showToast();
}


function moonPhases() {
  const elements = document.querySelectorAll('.moon-phase');
  elements.forEach(element => {
    const date = new Date(element.dataset.date);
    const lunarCalendar = new LunarCalendar();
    const phase = lunarCalendar.getPhase(date);
    const emoji = lunarCalendar.getEmoji(date);
    element.innerHTML = `${emoji}`;
  });
}


// ===========================

document.addEventListener('DOMContentLoaded', () => {
  moonPhases();
});





