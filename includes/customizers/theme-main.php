<?php


$theme->customizer->addPanel('theme', 'Theme global settings');

// ===========================================================

$theme->customizer->addSection('theme-background', 'Background', 'theme');

$theme->customizer->addSetting('theme-background', 'background-color', 'Background color', WP_Customize_Color_Control::class, '#aaaaaa');
$theme->customizer->addPreview('background-color', '.main-title');

$theme->customizer->addSetting('theme-background', 'background-image', 'Background image', WP_Customize_Image_Control::class);
$theme->customizer->addPreview('background-image', '.main-title');


$theme->customizer->addSwitchSetting(
	'theme-background',
	'background-repeat',
	'Background repeat',
);

$theme->customizer->addPreview('background-image', '.main-title');
// ===========================================================

$theme->customizer->addSection('theme-main-container', 'Main container', 'theme');

$theme->customizer->addColorSetting(
    'theme-main-container',
    'main-container-background-color',
    'Main container background color',
);

$theme->customizer->addPreview('main-container-background-color', '.main-title');

// ===========================================================

$theme->customizer->addSection('theme-header', 'Header', 'theme');
$theme->customizer->addSetting('theme-header', 'header-image', 'Header Image', WP_Customize_Image_Control::class, '');
$theme->customizer->addPreview('header-image', '.main-title');

// ===========================================================

$theme->customizer->addSection('theme-typography', 'Default typography', 'theme');
$theme->customizer->addTypographySetting('theme-typography', 'theme-typography', 'Default typography', $googleFonts);
$theme->customizer->addPreview('theme-typography', '.main-title');

// ===========================================================

$theme->customizer->addSection('theme-links', 'Links', 'theme');
$theme->customizer->addTypographySetting('theme-links', 'theme-links-typography', 'Links typography', $googleFonts);
$theme->customizer->addPreview('theme-links-typography', '.main-title');


// ===========================================================



$theme->customizer->addSection('theme-colors', 'Global colors', 'theme');

$theme->customizer->addSetting('theme-colors', 'titles-color', 'Titles color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('titles-color', '.main-title');





// ===========================================================

