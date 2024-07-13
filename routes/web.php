<?php

use Illuminate\Support\Facades\Route;
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

Route::get('/{path}', function () {
    return view('app');
})->where('path', '.*');



