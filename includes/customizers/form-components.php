<?php
$theme->customizer->addSection('form-components', 'Form components');


$theme->customizer->addColorSetting(
	'form-components',
	'form-components-background-color',
	'Form components background color',
);

$theme->customizer->addPreview('form-components-background-color', '.main-title');



$theme->customizer->addColorSetting(
	'form-components',
	'form-components-border-color',
	'Form components border color',
);
$theme->customizer->addPreview('form-components-border-color', '.main-title');



$theme->customizer->addSliderSetting(
	'form-components',
	'form-components-border-width',
	'Form components border width',
	0,
	32
);
$theme->customizer->addPreview('form-components-border-width', '.main-title');



$theme->customizer->addHr('form-components');




$theme->customizer->addTypographySetting(
	'form-components',
	'form-components-typography',
	'Values typography',
	$googleFonts,
);
$theme->customizer->addPreview('form-components-typography', '.main-title');


$theme->customizer->addHr('form-components');




$theme->customizer->addTypographySetting(
	'form-components',
	'form-components-label-typography',
	'Labels typography',
	$googleFonts,
);

$theme->customizer->addPreview('form-components-label-typography', '.main-title');