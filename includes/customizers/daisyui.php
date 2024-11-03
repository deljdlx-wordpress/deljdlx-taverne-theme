<?php
$theme->customizer->addSection('daisy-ui', 'Daisy ui variables');
$theme->customizer->addSetting('daisy-ui', 'primary-color', 'Primary color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('primary-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'secondary-color', 'Secondary color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('secondary-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'accent-color', 'Accent color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('accent-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'neutral-color', 'Neutral color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('neutral-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'info-color', 'Info color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('info-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'success-color', 'Success color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('success-color', '.main-title');

$theme->customizer->addSetting('daisy-ui', 'error-color', 'Error color', WP_Customize_Color_Control::class);
$theme->customizer->addPreview('error-color', '.main-title');


new \Kirki\Field\Slider(
    [
        'settings'    => 'button-radius',
        'label'       => esc_html__( 'Button radius', 'taverne' ),
        'section'     => 'daisy-ui',
        'default'     => 8,
        'choices'     => [
            'min'  => 0,
            'max'  => 32,
            'step' => 1,
        ],
        'transport'   => 'postMessage',
    ]
);


$theme->customizer->addPreview('button-radius', '.main-title');
