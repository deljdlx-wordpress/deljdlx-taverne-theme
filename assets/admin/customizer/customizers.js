console.log('%c' + 'customzers.js loaded', 'color: #0bf; font-size: 1rem; background-color:#fff');



registerCssColorVariableCustomizer('background-color', '');

registerCssOkclhColorVariableCustomizer('primary-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('secondary-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('accent-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('neutral-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('info-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('success-color', '.taverne[data-theme=autumn]');
registerCssOkclhColorVariableCustomizer('error-color', '.taverne[data-theme=autumn]');


registerCssVariableInPxCustomizer('button-radius', '.taverne');


registerCssVariableInPxCustomizer('card-border-radius', '.taverne');
registerCssVariableInPxCustomizer('card-border-width', '.taverne');
registerCssVariableCustomizer('card-border-color', '.taverne');
registerCssVariableCustomizer('card-background-color', '.taverne');




registerBackgroundColorCustomizer('background-color', 'body')
registerBackgroundImageCustomizer('background-image', 'body')
registerColorCustomizer('text-color', 'body')
registerColorCustomizer('link-color', 'a[href]')


registerCustomizer('header-image', function(value) {
  const container =  document.querySelector('#header-image');
  container.style.display = 'none';
  if(value) {
    container.style.display = 'block';
    container.style.backgroundImage = `url(${value})`;
    container.style.backgroundSize = 'cover';
  }

  // const image = document.createElement('img');
  // image.src = value;
})





registerCustomizer('main-font', function(value) {
  let fontFamily = value['font-family'];
  let fontSize = value['font-size'];
  let color = value['color'];
  let weight = value['font-weight'];

  setCssVariable('main-font-family', fontFamily, '.taverne');
  setCssVariable('main-font-size', fontSize, '.taverne');
  setCssVariable('h1-font-color', color, '.taverne');
  setCssVariable('h1-font-weight', weight, '.taverne');
})

// =========================== H1 ===========================
registerCustomizer('site-title-typography', function(value) {
  console.log('%ccustomizers.js :: 36 =============================', 'color: #f00; font-size: 1rem');
  console.log(value);
  let fontFamily = value['font-family'];
  let fontSize = value['font-size'];
  let color = value['color']
  let weight = value['font-weight']

  setCssVariable('site-title-font-family', fontFamily, '.taverne');
  setCssVariable('site-title-font-size', fontSize, '.taverne');
  setCssVariable('site-title-font-color', color, '.taverne');
  setCssVariable('site-title-font-weight', weight, '.taverne');
});



// titles ======================================================
for(let i = 1; i <=6; i++) {

  registerCustomizer('h' +i + '-typography', function(value) {
    console.log('%ccustomizers.js :: 36 =============================', 'color: #f00; font-size: 1rem');
    console.log(value);
    let fontFamily = value['font-family'];
    let fontSize = value['font-size'];
    let color = value['color'];
    let weight = value['font-weight'];
    let textAlign = value['text-align'];

    setCssVariable('h' +i + '-font-family', fontFamily, '.taverne');
    setCssVariable('h' +i + '-font-size', fontSize, '.taverne');
    setCssVariable('h' +i + '-font-color', color, '.taverne');
    setCssVariable('h' +i + '-font-weight', weight, '.taverne');
    setCssVariable('h' +i + '-text-align', textAlign, '.taverne');
  });

  registerCssVariableInPxCustomizer('h' +i + '-margin-bottom', '.taverne');
  registerCssVariableInPxCustomizer('h' +i + '-margin-top', '.taverne');

}








registerBackgroundColorCustomizer('header-background-color', '#header-menu')


registerImageCustomizer('logo', '.header__logo img');


registerInnerHTMLCustomizer('footer-text', '.theme-footer-text');




