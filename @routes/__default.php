<?php
$router->get('/css/custom.css', function () {
    $buffer = wp_forge()->view->render('layouts.custom-css', [

    ]);
    return $buffer;
});


$router->get('/customizer-preview', function () {
    $buffer = wp_forge()->view->render('layouts.customizer-preview', [

    ]);
    return $buffer;
});




// ===========================================================



$router->get('/board', function () {
    $buffer = wp_forge()->view->render('layouts.investigation-board', [

    ]);
    return $buffer;
});

$router->get('/image/squarify', function () {
    
    $baseImage = $_GET['image'];
    $squareSize = $_GET['size'] ?? 150;


    $squarifiedBaseFolder = WP_CONTENT_DIR . '/uploads/deljdlx-taverne/squarified-images/' . $squareSize;
    if(!is_dir($squarifiedBaseFolder)) {
        mkdir($squarifiedBaseFolder, 0755, true);
    }

    $squarifiedImageFilepath = $squarifiedBaseFolder . '/' . basename($baseImage);


    // convert image url into filepath
    $imageSourceFilePath = parse_url($baseImage, PHP_URL_PATH);
    $imageSourceFilePath = str_replace('/wp-content/uploads/', WP_CONTENT_DIR . '/uploads/', $imageSourceFilePath);

    // dump($imageSourceFilePath);
    // dump($squarifiedImageFilepath);


    if(!file_exists($squarifiedImageFilepath)) {

        // check image extension
        $imageExtension = pathinfo($imageSourceFilePath, PATHINFO_EXTENSION);

        if($imageExtension == 'webp') {
            $sourceImage = imagecreatefromwebp($baseImage);
        }
        elseif($imageExtension == 'png') {
            $sourceImage = imagecreatefrompng($baseImage);
        } else {
            $sourceImage = imagecreatefromjpeg($baseImage);
        }

        // Obtenir les dimensions de l'image source
        $width = imagesx($sourceImage);
        $height = imagesy($sourceImage);

        // Calculer la taille du carré
        $minSize = min($width, $height);

        // Calculer les coordonnées du crop centré
        $x = ($width - $minSize) / 2;
        $y = ($height - $minSize) / 2;

        // Créer une nouvelle image carrée temporaire
        $croppedImage = imagecreatetruecolor($squareSize, $squareSize);

        // Redimensionner et copier l'image pour le crop
        imagecopyresampled(
            $croppedImage,
            $sourceImage,
            0, 0,            // Destination (x, y)
            $x, $y,          // Source (x, y)
            $squareSize, $squareSize,  // Taille destination (largeur, hauteur)
            $minSize, $minSize // Taille source (largeur, hauteur)
        );

        imagejpeg($croppedImage, $squarifiedImageFilepath);
        // Libérer la mémoire
        imagedestroy($sourceImage);
        imagedestroy($croppedImage);
    }

    // redirect to squarified image
    // dd(str_replace(WP_CONTENT_DIR, WP_CONTENT_URL, $squarifiedImageFilepath));
    header('Location: ' . str_replace(WP_CONTENT_DIR, WP_CONTENT_URL, $squarifiedImageFilepath));
    // exit();
});


// ===========================================================


$router->get('/timeline', function () {
    $buffer = wp_forge()->view->render('layouts.timeline', [
        'authorId' => get_current_user_id(),
    ]);
    return $buffer;
});




$router->addRoute(['GET', 'POST'], '/sign-in', function () {
    $buffer = wp_forge()->view->render('layouts.sign-in', [
    ]);

    return $buffer;
});


$router->addRoute(['GET', 'POST'], '/sign-up', function () {
    $buffer = wp_forge()->view->render('layouts.sign-up', [
    ]);

    return $buffer;
});


$router->addRoute(['GET', 'POST'], '/sign-out', function () {
    $buffer = wp_forge()->view->render('layouts.sign-out', [
    ]);

    return $buffer;
});
