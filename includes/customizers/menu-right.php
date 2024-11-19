<?php
$theme->customizer->addPanel('right-menu-panel', 'Right panel');

$theme->customizer->addSection('right-menu', 'Right menu', 'right-menu-panel');



$theme->customizer->addColorSetting(
    'right-menu',
    'right-menu-background-color',
    'Background color',
);

$theme->customizer->addSliderSetting(
    'right-menu',
    'right-menu-padding',
    'Padding',
    0,
    64
);



$theme->customizer->addSliderSetting(
    'right-menu',
    'right-menu-border-radius',
    'Border radius',
    0,
    64
);


$theme->customizer->addSliderSetting(
    'right-menu',
    'right-menu-border-width',
    'Border width',
    0,
    64
);

// setting border-color
$theme->customizer->addColorSetting(
    'right-menu',
    'right-menu-border-color',
    'Border color',
);

// ===========================================================
$theme->customizer->addSection('right-menu-blocks', 'Blocks', 'right-menu-panel');


$theme->customizer->addColorSetting(
    'right-menu-blocks',
    'right-menu-block-background-color',
    'Background color',
);

$theme->customizer->addSliderSetting(
    'right-menu-blocks',
    'right-menu-block-padding',
    'Padding',
    0,
    64
);


$theme->customizer->addSliderSetting(
    'right-menu-blocks',
    'right-menu-block-border-radius',
    'Border radius',
    0,
    64
);


$theme->customizer->addSliderSetting(
    'right-menu-blocks',
    'right-menu-block-border-width',
    'Border width',
    0,
    64
);

// setting border-color
$theme->customizer->addColorSetting(
    'right-menu-blocks',
    'right-menu-block-border-color',
    'Border color',
);

