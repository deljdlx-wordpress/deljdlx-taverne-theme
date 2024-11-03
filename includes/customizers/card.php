<?php

$theme->customizer->addSection('card', 'Cards');


$theme->customizer->addSetting('card', 'card-border-color', 'Border color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('card-border-color', '.main-title');


new \Kirki\Field\Color(
	[
		'settings'    => 'card-background-color',
		'label'       => esc_html__( 'Card background color', 'taverne' ),
		'section'     => 'card',
		'default'     => 'transparent',
		'transport'   => 'postMessage',
		'choices'     => [
			'alpha' => true,
		],
	]
);
$theme->customizer->addPreview('card-background-color', '.main-title');



new \Kirki\Field\Slider(
    [
        'settings'    => 'card-border-width',
        'label'       => esc_html__( 'Card border width', 'taverne' ),
        'section'     => 'card',
        'default'     => 8,
        'choices'     => [
            'min'  => 0,
            'max'  => 32,
            'step' => 1,
        ],
        'transport'   => 'postMessage',
    ]
);
$theme->customizer->addPreview('card-border-width', '.main-title');


new \Kirki\Field\Slider(
    [
        'settings'    => 'card-border-radius',
        'label'       => esc_html__( 'Card border radius', 'taverne' ),
        'section'     => 'card',
        'default'     => 8,
        'choices'     => [
            'min'  => 0,
            'max'  => 32,
            'step' => 1,
        ],
        'transport'   => 'postMessage',
    ]
);
$theme->customizer->addPreview('card-border-width', '.main-title');
