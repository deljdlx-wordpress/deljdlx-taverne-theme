<?php

// use Deljdlx\WPForge\Logger;
// Logger::log([
//     'uri' => $_SERVER['REQUEST_URI'],
// ], 'init');

use Deljdlx\WPTaverne\Models\Relation;
use Deljdlx\WPTaverne\Plugins\Taverne;

try {
    $return =  Taverne::run();
    echo $return;
}
catch(\Exception $e) {
    dump($e);
    ob_end_flush();
}

// return $return;


// echo __FILE__.':'.__LINE__; exit();


/*
$router = wp_forge()->router;

require __DIR__ . '/@routes/__default.php';
require __DIR__ . '/@routes/my-desktop.php';

// $test = Relation::getAll();
// dd($test);


try {
    $result = $router->route();

    if($result) {
        http_response_code(200);
        echo $result;
        return true;
    }
    else {
        echo wp_forge()->view->render('layouts.home');
    }
}
catch(\Exception $e) {
    dump($e);
}
    */


