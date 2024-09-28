<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PartnerController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TasksController;
use App\Http\Controllers\Api\TestResultController;
use App\Http\Controllers\Api\TaskResultController;
use App\Http\Controllers\Api\ChatController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/partners', [PartnerController::class, 'index']);

Route::get('/login', [AuthController::class, 'signin']);

Route::get('/tasks', [TasksController::class, 'index']);

Route::post('/testresults',  [TestResultController::class, 'index']);
Route::post('/taskresults',  [TaskResultController::class, 'index']);

Route::get('/chat',  [ChatController::class, 'index']);
Route::post('/chat/newmessage',  [ChatController::class, 'create']);