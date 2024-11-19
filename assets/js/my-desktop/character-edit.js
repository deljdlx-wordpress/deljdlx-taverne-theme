console.log('%ccharacter-edit.js :: 1 =============================', 'color: #f00; font-size: 1rem');

class CharacterEdit
{

  magicTriggers = [];
  magicPrompts = [];

  constructor() {

    this.magicPrompts = document.querySelectorAll('.magic-prompt');
    this.magicPrompts.forEach(prompt => {
      // add event listener to detect enter key
      prompt.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
          event.preventDefault();
          const variable = prompt.dataset.variable;
          this.magic(variable);
        }
      });
    });


    this.magicTriggers = document.querySelectorAll('.magic-trigger');
    this.magicTriggers.forEach(trigger => {

      console.log('%ccharacter-edit.js :: 12 =============================', 'color: #f00; font-size: 1rem');
      console.log("INIT magicTriggers " + trigger.dataset.variable);


      trigger.addEventListener('click', (event) => {
        event.preventDefault();
        this.magic(trigger.dataset.variable);
      });
    });


    const modal = document.querySelector('#magic-modal');
    const modalContent = modal.querySelector('.magic-content');
    const acceptButton = modal.querySelector('.magic-accept');
    acceptButton.addEventListener('click', (event) => {

      const newContent = modal.querySelector('#magic-new-content').innerHTML;
      const variable = event.target.dataset.variable;

      if(variable==='address') {
        document.querySelector('.acf-field-address input[type=text]').value = newContent;
      }
      else if(document.querySelector(`input[name="${variable}"]`)) {
        document.querySelector(`input[name="${variable}"]`).value = newContent;
      }
      else {
        console.log(tinymce.get(variable));
        tinymce.get(variable).setContent(newContent);
      }
    });
  }


  getCharacterInfo() {

    const data = {
        key: document.querySelector('input[name="ai_chat_id"]').value,
        job: document.querySelector('input[name="job"]').value,
        name: document.querySelector('input[name="name"]').value,
        description: tinymce.get('description').getContent(),
        communication: tinymce.get('communication').getContent(),
        description: tinymce.get('description').getContent(),
        astral_sign: document.querySelector('input[name="astral_sign"]').value,
        mbti: document.querySelector('input[name="mbti"]').value,
        birth: document.querySelector('input[name="birth"]').value,
    }

    return data;

  }



  magic(variable) {
    const characterInfo = this.getCharacterInfo();
    characterInfo.variable = variable;

    if(document.querySelector('#' + variable + '-prompt')) {
      characterInfo.custom_prompt = document.querySelector('#' + variable + '-prompt').value;
    }



    fetch('/wp-json/taverne/v1/character/generate-variable', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(characterInfo)
    })
    .then(response => response.json())
    .then(data => {

      console.log(data);

      const currentContent = characterInfo[variable];



      const modal = document.querySelector('#magic-modal');
      const modalContent = modal.querySelector('.magic-content');
      const acceptButton = modal.querySelector('.magic-accept');
      acceptButton.dataset.variable = variable;
      const rejectButton = modal.querySelector('.magic-refuse');
      rejectButton.dataset.variable = variable;


      modalContent.innerHTML = `
        <div style="display: flex; gap: 1rem">
          <div style="flex:1">
            <h3>Proposition actuelle</h3>
            <div>
              ${currentContent}
            </div>
          </div>
          <div style="flex:1">
            <h3>Nouvelle proposition</h3>
            <div id="magic-new-content">
              ${data[variable]};
            </div>
          </div>
        </div>
      `;

      modal.showModal();

      return;

      //check if input with name variable exists
      if(document.querySelector(`input[name="${variable}"]`)) {
        document.querySelector(`input[name="${variable}"]`).value = data[variable];
      }
      else {
        console.log(tinymce.get(variable));
        tinymce.get(variable).setContent(data[variable]);
      }
    });
  }


}


if(document.querySelector('#character-edit-form')) {
  console.log('ICI');
    const characterEdit = new CharacterEdit();
}