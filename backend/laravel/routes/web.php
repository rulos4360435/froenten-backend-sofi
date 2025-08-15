<?php


use Illuminate\Support\Facades\Route;

use App\Http\Controllers\HolaController;
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('welcome');
});




// routes/web.php
/**
 *
 *
 */
Route::get("/prueba",function(){
    return view("prueba");
});

 Route::get("/git",function(){
    return "hola estamos en el git";
 })
Route::get("/controladores",[HolaController::class,"saludo"]);


Route::get('/pacientes',[TestController::class,'test']);
