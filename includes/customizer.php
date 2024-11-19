<?php
// ===========================================================

$googleFonts  = [
	'Noticia Text',
	'Carter One',
	'Great Vibes',
	'Satisfy',
	'Rubik Mono One',
];



$subCustomizers = glob(__DIR__ . '/customizers/*.php');
foreach($subCustomizers as $subCustomizer) {
    require $subCustomizer;
}


