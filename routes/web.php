<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        
    ]);
});

Route::post('/blogs', [BlogController::class, 'store'])->name('blogs.store');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/AddBlogs', function () {
    return Inertia::render('Dashboard/AddBlogs');
})->middleware(['auth', 'verified'])->name('AddBlogs');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/AddBlogs', function () {
        return Inertia::render('Dashboard/AddBlogs');
    })->name('AddBlogs');

    Route::get('/MyBlogs', [BlogController::class, 'myblogs'])->name('MyBlogs');
    Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('blogs.show');
    

   
});

require __DIR__.'/auth.php';

