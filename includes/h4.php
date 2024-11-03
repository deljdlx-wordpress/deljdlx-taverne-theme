<?php

$theme->customizer->addSection('h4', 'H4 titles');

new \Kirki\Field\Typography(
	[
		'settings'    => 'h4-typography',
		'label'       => esc_html__( 'Typography', 'kirki' ),
		// 'description' => esc_html__( 'The full set of options.', 'kirki' ),
		'section'     => 'h4',
		'priority'    => 10,
		'transport'   => 'auto',
		'default'     => [
			'font-family'     => 'Noticia Text',
			'variant'         => '700',
			'font-style'      => 'normal',
			'color'           => '#000000',
			'font-size'       => '24px',
			'line-height'     => '1.5',
			'letter-spacing'  => '0',
			'text-transform'  => 'none',
			'text-decoration' => 'none',
			'text-align'      => 'left',
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
            'variant'        => true,  // Masque l'option de variant
            'font-size'      => true,   // Affiche l'option de font-size
            'line-height'    => false,   // Affiche l'option de line-height
            'letter-spacing' => false,  // Masque l'option de letter-spacing
            'color'          => true,   // Affiche l'option de couleur
            'text-transform' => false,  // Masque l'option de text-transform
            'text-align'     => false,  // Masque l'option d'alignement du texte
        ],
        'transport'   => 'postMessage',
    ]
);

$theme->customizer->addPreview('h4', '.main-title');



new \Kirki\Field\Slider(
    [
        'settings'    => 'h4-margin-bottom',
        'label'       => esc_html__( 'Margin bottom', 'taverne' ),
        'section'     => 'h4',
        'default'     => 8,
        'choices'     => [
            'min'  => 0,
            'max'  => 64,
            'step' => 1,
        ],
        'transport'   => 'postMessage',
    ]
);


$theme->customizer->addPreview('h4-margin-bottom', '.main-title');