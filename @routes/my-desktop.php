<?php

$router->addRoute(['GET', 'POST'], '/my-dektop/scenario-edit', function () {
    mustBeLogged();

    $buffer = wp_forge()->view->render('layouts.my-desktop.scenario-edit', [
        'authorId' => get_current_user_id(),
    ]);

    return $buffer;
});


$router->get('/my-dektop/calendar?$', function () {
    mustBeLogged();

    $buffer = wp_forge()->view->render('layouts.my-desktop.calendar', [
        'authorId' => get_current_user_id(),
    ]);

    return $buffer;
});

$router->get('/my-dektop/?$', function () {
    mustBeLogged();

    $buffer = wp_forge()->view->render('layouts.my-desktop.index', [
        'authorId' => get_current_user_id(),
    ]);

    return $buffer;
});



$router->addRoute(['GET', 'POST'], '/my-desktop/character-edit', function () {
    mustBeLogged();

    $buffer = wp_forge()->view->render('layouts.my-desktop.character-edit', [
        'authorId' => get_current_user_id(),
    ]);

    return $buffer;
});


$router->addRoute(['GET', 'POST'], '/my-desktop/place-edit', function () {
    mustBeLogged();

    $buffer = wp_forge()->view->render('layouts.my-desktop.place-edit', [
        'authorId' => get_current_user_id(),
    ]);

    return $buffer;
});