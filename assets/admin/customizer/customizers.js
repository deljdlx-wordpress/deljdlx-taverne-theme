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
registerCssVariableCustomizer('card-text-color', '.taverne');


registerCssVariableCustomizer('main-container-background-color', '.taverne');



registerBackgroundColorCustomizer('background-color', 'body')
registerBackgroundImageCustomizer('background-image', 'body')
registerColorCustomizer('text-color', 'body')
registerColorCustomizer('link-color', 'a[href]')

registerCustomizer('background-repeat', function(value) {
  if(value) {
    setCssVariable('background-repeat', 'repeat', '.taverne');
    setCssVariable('background-size', 'auto', '.taverne');
  }
  else {
    setCssVariable('background-repeat', 'no-repeat', '.taverne');
    setCssVariable('background-size', 'cover', '.taverne');
  }
});



registerCustomizer('header-image', function(value) {
  const container =  document.querySelector('#header-image');
  container.style.display = 'none';
  if(value) {
    container.style.display = 'block';
    container.style.backgroundImage = `url(${value})`;
    container.style.backgroundSize = 'cover';
  }
});

// RIGHT MENU =============================================================
registerCssVariableCustomizer('right-menu-background-color', '.taverne');
registerCssVariableInPxCustomizer('right-menu-border-radius', '.taverne');
registerCssVariableInPxCustomizer('right-menu-border-width', '.taverne');
registerCssVariableCustomizer('right-menu-border-color', '.taverne');
registerCssVariableInPxCustomizer('right-menu-padding', '.taverne');

registerCssVariableCustomizer('right-menu-block-background-color', '.taverne');
registerCssVariableInPxCustomizer('right-menu-block-border-radius', '.taverne');
registerCssVariableInPxCustomizer('right-menu-block-border-width', '.taverne');
registerCssVariableCustomizer('right-menu-block-border-color', '.taverne');
registerCssVariableInPxCustomizer('right-menu-block-padding', '.taverne');



// =========================================================================

registerCssVariableCustomizer('form-components-background-color', '.taverne');
registerCssVariableCustomizer('form-components-border-color', '.taverne');
registerCssVariableInPxCustomizer('form-components-border-width', '.taverne');

// =========================================================================


registerTypographyCustomizerCustomizer('theme-links-typography', 'links-typography')

registerTypographyCustomizerCustomizer('theme-typography', 'theme-typography');
registerTypographyCustomizerCustomizer('site-title-typography', 'site-title');

registerTypographyCustomizerCustomizer('form-components-label-typography', 'form-components-label');
registerTypographyCustomizerCustomizer('form-components-typography', 'form-components');


for(let i = 1; i <=6; i++) {
  registerTypographyCustomizerCustomizer('h' +i + '-typography', 'h' +i);
  registerCssVariableInPxCustomizer('h' +i + '-margin-top', '.taverne');
  registerCssVariableInPxCustomizer('h' +i + '-margin-bottom', '.taverne');
}


// =========================================================================

registerTypographyCustomizerCustomizer('site-title-typography', '.taverne')
registerCssVariableInPxCustomizer('site-title-margin-bottom', '.taverne');
registerCssVariableInPxCustomizer('site-title-margin-top', '.taverne');

// =========================================================================

registerTypographyCustomizerCustomizer('site-main-title-typography', '.taverne')
registerCssVariableInPxCustomizer('site-main-title-margin-bottom', '.taverne');
registerCssVariableInPxCustomizer('site-main-title-margin-top', '.taverne');


// =========================================================================








registerBackgroundColorCustomizer('header-background-color', '#header-menu')


registerImageCustomizer('logo', '.header__logo img');


registerInnerHTMLCustomizer('footer-text', '.theme-footer-text');




