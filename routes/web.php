<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CommentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BlogController::class, 'index'] );
Route::get('/detail/{title}', [BlogController::class, 'showDetail'] );
Route::post('/blog', [BlogController::class, 'store'] )->middleware(['auth', 'verified'])->name('create.blog');
Route::get('/blog', [BlogController::class, 'showDashboard'] )->middleware(['auth', 'verified'])->name('my.blog');
Route::get('/blog/edit', [BlogController::class, 'edit'] )->middleware(['auth', 'verified'])->name('edit.blog');
Route::post('/blog/update', [BlogController::class, 'update'] )->middleware(['auth', 'verified'])->name('update.blog');
Route::post('/blog/delete', [BlogController::class, 'destroy'] )->middleware(['auth', 'verified'])->name('delete.blog');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
