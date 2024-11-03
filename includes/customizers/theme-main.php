<?php

$theme->customizer->addSection('theme', 'Theme main variables');

$theme->customizer->addSetting('theme', 'header-image', 'Header Image', WP_Customize_Image_Control::class, '');
$theme->customizer->addPreview('header-image', '.main-title');



$theme->customizer->addSetting('theme', 'text-color', 'Text color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('text-color', '.main-title');

$theme->customizer->addSetting('theme', 'link-color', 'Link color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('link-color', '.main-title');

$theme->customizer->addSetting('theme', 'background-color', 'Background color', WP_Customize_Color_Control::class, '#aaaaaa');
$theme->customizer->addPreview('background-color', '.main-title');

$theme->customizer->addSetting('theme', 'background-image', 'Background image', WP_Customize_Image_Control::class);
$theme->customizer->addPreview('background-image', '.main-title');


// ===========================================================

new \Kirki\Field\Typography(
	[
		'settings'    => 'main-font',
		'label'       => esc_html__( 'Main typography', 'kirki' ),
		// 'description' => esc_html__( 'The full set of options.', 'kirki' ),
		'section'     => 'theme',
		'priority'    => 10,
		'transport'   => 'auto',
		'default'     => [
			'font-family'     => 'Roboto',
			'font-size'       => '14px',
			// 'color'           => '#333333',
			// 'font-style'      => 'normal',
			// 'variant'         => 'regular',
			// 'line-height'     => '1.5',
			// 'letter-spacing'  => '0',
			// 'text-transform'  => 'none',
			// 'text-decoration' => 'none',
			// 'text-align'      => 'left',
		],
		'output'      => [
			[
				'element' => 'body',
			],
		],
        'choices' => [
            'fonts' => [
                // 'google' => [ 'popularity', 30 ],
                'google' => [ 'Noticia Text'],
            ],
            'font-family'    => true,   // Affiche l'option font-family
            'font-size'      => true,   // Affiche l'option de font-size
			'color'          => false,   // Affiche l'option de couleur
			'variant'        => false,  // Masque l'option de variant
            'line-height'    => false,   // Affiche l'option de line-height
            'letter-spacing' => false,  // Masque l'option de letter-spacing
            'text-transform' => false,  // Masque l'option de text-transform
            'text-align'     => false,  // Masque l'option d'alignement du texte
        ],
        'transport'   => 'postMessage',
    ]
);

$theme->customizer->addPreview('main-font', '.main-title');


// ===========================================================

new \Kirki\Field\Typography(
	[
		'settings'    => 'site-title-typography',
		'label'       => esc_html__( 'Title title', 'kirki' ),
		// 'description' => esc_html__( 'The full set of options.', 'kirki' ),
		'section'     => 'theme',
		'priority'    => 10,
		'transport'   => 'auto',
		'default'     => [
			'font-family'     => 'Noticia Text',
			'font-size'       => '14px',
			'color'           => '#333333',
			'font-style'      => 'normal',
			'variant'         => 'regular',
			'letter-spacing'  => '0',
			// 'line-height'     => '1.5',
			// 'text-transform'  => 'none',
			// 'text-decoration' => 'none',
			// 'text-align'      => 'left',
		],
		'output'      => [
			[
				'element' => 'body',
			],
		],
        'choices' => [
            'fonts' => [
                // 'google' => [ 'popularity', 30 ],
                'google' => [ 'Noticia Text', 'Carter One'],
            ],
            'font-family'    => true,   // Affiche l'option font-family
            'font-size'      => true,   // Affiche l'option de font-size
			'color'          => false,   // Affiche l'option de couleur
			'variant'        => true,  // Masque l'option de variant
			// 'letter-spacing' => true,  // Masque l'option de letter-spacing

            'line-height'    => false,   // Affiche l'option de line-height
            'text-transform' => false,  // Masque l'option de text-transform
            'text-align'     => false,  // Masque l'option d'alignement du texte
        ],
        'transport'   => 'postMessage',
    ]
);

$theme->customizer->addPreview('site-title-typography', '.main-title');
