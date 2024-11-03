<?php
// ===========================================================

$subCustomizers = glob(__DIR__ . '/customizers/*.php');
foreach($subCustomizers as $subCustomizer) {
    require $subCustomizer;
}


