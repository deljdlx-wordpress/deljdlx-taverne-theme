<?php
for($i = 1 ; $i <= 6 ; $i++) {

    $theme->customizer->addSection('h' . $i, 'H' . $i . ' titles');

    new \Kirki\Field\Typography(
        [
            'settings'    => 'h' . $i . '-typography',
            'label'       => esc_html__( 'Typography', 'kirki' ),
            // 'description' => esc_html__( 'The full set of options.', 'kirki' ),
            'section'     => 'h' . $i,
            'priority'    => 10,
            'default'     => [
                'font-family'     => 'Noticia Text',
                'font-size'       => '14px',
                'text-align'      => 'left',
                'color'           => get_theme_mod('text-color', '#000'),
                'font-style'      => 'normal',
                'variant'         => 'regular',

                // 'line-height'     => '1.5',
                // 'letter-spacing'  => '0',
                // 'text-transform'  => 'none',
                // 'text-decoration' => 'none',

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
                'text-align'     => true,  // Masque l'option d'alignement du texte
                'color'          => true,   // Affiche l'option de couleur
                'font-style'     => true,   // Affiche l'option de font-style
                'variant'        => true,  // Masque l'option de variant

                'line-height'    => false,   // Affiche l'option de line-height
                'letter-spacing' => false,  // Masque l'option de letter-spacing
                'text-transform' => false,  // Masque l'option de text-transform
            ],
            'transport'   => 'postMessage',
        ]
    );

    $theme->customizer->addPreview('h' . $i, '.main-title');


    new \Kirki\Field\Slider(
        [
            'settings'    => 'h' . $i . '-margin-bottom',
            'label'       => esc_html__( 'Margin bottom', 'taverne' ),
            'section'     => 'h' . $i,
            'default'     => 8,
            'choices'     => [
                'min'  => 0,
                'max'  => 64,
                'step' => 1,
            ],
            'transport'   => 'postMessage',
        ]
    );
    $theme->customizer->addPreview('h' . $i . '-margin-bottom', '.main-title');


    new \Kirki\Field\Slider(
        [
            'settings'    => 'h' . $i . '-margin-top',
            'label'       => esc_html__( 'Margin top', 'taverne' ),
            'section'     => 'h' . $i,
            'default'     => 8,
            'choices'     => [
                'min'  => 0,
                'max'  => 64,
                'step' => 1,
            ],
            'transport'   => 'postMessage',
        ]
    );
    $theme->customizer->addPreview('h' . $i .'-margin-top', '.main-title');
}
