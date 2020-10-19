<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', 'App\Http\Controllers\UserController@register');
Route::post('login', 'App\Http\Controllers\UserController@login');

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::get('user', 'App\Http\Controllers\UserController@getAuthenticatedUser');

    Route::get('favourites', 'App\Http\Controllers\FavouriteController@index');
    Route::post('favourite', 'App\Http\Controllers\FavouriteController@store');
    Route::delete('favourite/{id}', 'App\Http\Controllers\FavouriteController@destroy');
});
