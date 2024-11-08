<?php

use Deljdlx\WPForge\Theme\Theme;
use Deljdlx\WPTaverne\Plugins\Taverne;
use matthieumastadenis\couleur\ColorFactory;
use matthieumastadenis\couleur\ColorSpace;

// hide admin bar if not admin
if(!current_user_can('administrator')) {
    add_filter('show_admin_bar', '__return_false');
}

if(!function_exists('rgbaToOklch')) {
    // convert a rgba color to oklch
    function rgbaToOklch(string $hex)
    {
        // #rgb
        if(strlen($hex) === 4) {
            $hex = '#' . $hex[1] . $hex[1] . $hex[2] . $hex[2] . $hex[3] . $hex[3] . 'ff';
        }
        // #rgba
        if(strlen($hex) === 5) {
            $hex = '#' . $hex[1] . $hex[1] . $hex[2] . $hex[2] . $hex[3] . $hex[3] . $hex[4] . $hex[4];
        }

        #rrggbb
        else if(strlen($hex) === 7) {
            $hex = $hex . 'ff';
        }


        $css1 = ColorFactory::newHexRgb($hex);
        $oklch = $css1->toOkLch();
        $declaration =  $oklch->stringify();

        $declaration = str_replace('oklch(', '', $declaration);
        $declaration = str_replace(')', '', $declaration);

        return $declaration;
    }

}




if(!function_exists('wp_forge')) {
    function wp_forge(): Theme
    {
        static $theme;
        if($theme) {
            return $theme;
        }

        // $theme = new Theme('Taverne');

        $plugin = Taverne::getInstance();
        $theme = $plugin->getTheme();

        $theme->router->setBaseUri(home_url());

        $theme->addCss([
            'https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css',
            'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css',

            'https://unpkg.com/leaflet@1.9.3/dist/leaflet.css',

            // fontawesome
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',

            // select2
            'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css',

            'vendor/jquery-ui/jquery-ui.css',

            // dynamic css
            '/css/custom.css',

            'assets/css/overrides/daisyui.css',


            'assets/css/taverne.css',
            'assets/css/customizer.css',


            'assets/css/cards.css',
            'assets/css/singular.css',
            'assets/css/home.css',
            'assets/css/desktop.css',
            'assets/css/character.css',
            'assets/css/character-sheet.css',
            'assets/css/character-form.css',
            'assets/css/archive-character.css',
            'assets/css/calendar.css',
            'assets/css/timeline.css',

            'assets/css/form.css',

        ]);

        $theme->addJs([
            // openstreetmap
            'https://unpkg.com/leaflet@1.9.3/dist/leaflet.js',
            'https://cdn.tailwindcss.com',
            'https://cdn.jsdelivr.net/npm/toastify-js',
            // fontawesome
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js',

            // tippysjs
            'https://unpkg.com/@popperjs/core@2',
            'https://unpkg.com/tippy.js@6',


            // defer not handled right now, is added in template
            // 'https://cdn.jsdelivr.net/npm/alpinejs@2.8.2/dist/alpine.min.js',

            // jquery
            'vendor/jquery-ui/external/jquery/jquery.js',
            'vendor/jquery-ui/jquery-ui.js',

            // select2
            'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js',


            'assets/js/colors.js',
            'assets/js/taverne.js',
            'assets/js/calendar.js',
            'assets/js/lunarCalendar.js',
            'assets/js/form.js',


            'assets/js/character-page.js',
            'assets/js/my-desktop/character-edit.js',
        ]);

        $theme->addSupports([
            'post-thumbnails',
            'menus',
        ]);

        $theme->menu->addLocation('location_header', 'Header menu');
        $theme->menu->add('Header menu', 'location_header');


        $theme->sidebar->register('home-top', 'Home : top');
        $theme->sidebar->register('menu-right-top', 'Right menu : top');
        $theme->sidebar->register('menu-right-bottom', 'Right menu : bottom');

        // ===========================================================

        require __DIR__ . '/includes/customizer.php';







        return $theme;
    }
}

wp_forge();


// configure customizer displayed page (/customizer-preview)
add_action('customize_preview_init', function() {
    if ( is_customize_preview() ) {
        if(!preg_match('`customizer-preview`', $_SERVER['REQUEST_URI'])) {
            wp_safe_redirect(home_url() . '/customizer-preview');
            dump($_SERVER);
            exit();
        }
    }
});
