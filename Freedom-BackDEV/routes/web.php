<?php

use Illuminate\Support\Facades\Route;
require base_path('routes/api.php');

Route::get('/', function () {
    return view('welcome'); // Página inicial
});

Route::get('/', function () {
    return view('home');  // Exibe a view home.blade.php
});
