<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('events')->name('.event')->controller(EventController::class)->group(
    function() {
        Route::get('/', 'index');
    }
);


// Route::prefix('roles')->name('role.')->controller(RoleController::class)->group(function () {
//     Route::get('/', 'index');
//     Route::post('/', 'store')->name('store');
//     Route::get('{id}', 'show');
//     Route::put('{id}', 'update')->name('update');
//     Route::delete('{id}', 'destroy');
// });
