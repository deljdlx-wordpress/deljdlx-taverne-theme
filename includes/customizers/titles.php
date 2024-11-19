<?php

$theme->customizer->addPanel('titles', 'Titles');


$theme->customizer->addSection('site-title', 'Global titles settings', 'titles');

$theme->customizer->addTypographySetting(
    'site-title',
    'site-title-typography',
    'Site title typography',
    $googleFonts,
);
$theme->customizer->addPreview('site-title-typography', '.main-title');

$theme->customizer->addSliderSetting('site-title', 'site-title-margin-top', 'Margin top', -500, 500);
$theme->customizer->addPreview('site-title-margin-top', '.main-title');

$theme->customizer->addSliderSetting('site-title', 'site-title-margin-bottom', 'Margin bottom', -500, 500);
$theme->customizer->addPreview('site-title-margin-bottom', '.main-title');

// ===========================================================
$theme->customizer->addSection('site-main-title', 'Main title', 'titles');

$theme->customizer->addTypographySetting(
    'site-main-title',
    'site-main-title-typography',
    'Typography',
    $googleFonts,
);
$theme->customizer->addPreview('site-main-title-typography', '.main-title');

$theme->customizer->addSliderSetting('site-main-title', 'site-main-title-margin-top', 'Margin top', -500, 500);
$theme->customizer->addPreview('site-title-main-margin-top', '.main-title');

$theme->customizer->addSliderSetting('site-main-title', 'site-main-title-margin-bottom', 'Margin bottom', -500, 500);
$theme->customizer->addPreview('site-main-title-margin-bottom', '.main-title');


// ===========================================================


for($i = 1 ; $i <= 6 ; $i++) {

    $theme->customizer->addSection(
        'h' . $i,
        'H' . $i . ' titles',
        'titles',
    );

    $theme->customizer->addTypographySetting(
        'h' . $i,
        'h' . $i . '-typography',
        'Site title typography',
        $googleFonts,
    );

    $theme->customizer->addPreview('h' . $i, '.main-title');


    $theme->customizer->addSliderSetting(
        'h' . $i,
        'h' . $i . '-margin-top',
        'Margin top',
        0,
        64
    );
    $theme->customizer->addPreview('h' . $i .'-margin-top', '.main-title');

    $theme->customizer->addSliderSetting(
        'h' . $i,
        'h' . $i . '-margin-bottom',
        'Margin bottom',
        0,
        64
    );
    $theme->customizer->addPreview('h' . $i . '-margin-bottom', '.main-title');

}
