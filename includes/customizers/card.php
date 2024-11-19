<?php

$theme->customizer->addSection('card', 'Cards');


$theme->customizer->addSetting('card', 'card-border-color', 'Border color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('card-border-color', '.main-title');


$theme->customizer->addColorSetting(
    'card',
    'card-text-color',
    'Card text color',
);
$theme->customizer->addPreview('card-text-color', '.main-title');



$theme->customizer->addColorSetting(
    'card',
    'card-background-color',
    'Card background color',
);
$theme->customizer->addPreview('card-background-color', '.main-title');



$theme->customizer->addSliderSetting(
    'card',
    'card-border-width',
    'Card border width',
    0,
    64
);
$theme->customizer->addPreview('card-border-width', '.main-title');


$theme->customizer->addSliderSetting(
    'card',
    'card-border-radius',
    'Card border radius',
    0,
    64
);
$theme->customizer->addPreview('card-border-radius', '.main-title');
