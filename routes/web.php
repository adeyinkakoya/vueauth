<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
})->name('home');


Route::get('users/{id}', function($id) {
    return $id;
});


Route::get('register/{register}','RegisterController@index');
Route::resource('photo', 'photosController');
//Route::get('user/{user}','UserController@show');
//Route::get('user','UserController@index');

//Route::get('check','UserController@check')->middleware('checkparam');

Route::get('fruit',function(){
    $fruits= ['Orange','Grape','Banana'];
    return get_random_value( $fruits); // Using a custom helper
});

Route::get('trans',function(){
  return trans('messages.welcome'); // Looks into the resources/lang/en/messages.php for key welcome and gets the value
    //return Str::random(30);
});

Route::get('pass',function(){
    $fruits= ['Orange','Grape','Banana'];
    //return view('welcome')->with('fruits',$fruits);
    return view('welcome',compact('fruits'));
    //return view('welcome',['fruits'=>$fruits]);
});

Route::get('testabort',function(){
    if(!auth()->user()){
   abort(403, "Unauthorized access to page");
    } 
});
