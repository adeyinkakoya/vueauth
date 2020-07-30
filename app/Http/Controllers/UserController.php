<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function register(UserRegisterRequest $request){

        User::create([
        'name'=>$request->name,
        'email'=>$request->email,
        'password'=>Hash::make($request->password)
        ]);

    }

   public function login(UserLoginRequest $request){

    if(Auth::attempt($request->only('email','password'))) {
    return 
    response()->json(Auth::user(),200); 
        } else {
            throw ValidationException::withMessages([
                'email'=>'Credentials Invalid'
            ]);
        }
            
            
        }
}
