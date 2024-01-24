<?php

use App\Http\Controllers\ArticleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\NotificationController;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
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

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');


Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('articles', [ArticleController::class, 'index'])->name('articles.list');
    Route::post('articles/store', [ArticleController::class, 'store'])->name('articles.store');
    Route::post('articles/update/{id}', [ArticleController::class, 'update'])->name('articles.update');
    Route::get('articles/delete/{id}', [ArticleController::class, 'destroy'])->name('articles.delete'); 
    Route::get('articles/{id}', [ArticleController::class, 'show'])->name('articles.show');
    Route::get('user/articles', [ArticleController::class, 'get_all_articles_by_user'])->name('user.articles');
});