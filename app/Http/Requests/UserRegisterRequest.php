<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name"=>"required",
            "email"=>"required|email|unique:users",
            "password"=>"required|min:6|confirmed"
        ];
    }

    public function messages()
    {
        return [
            "name.required"=>"Please enter your name",
            "email.required"=>"Please enter your email",
            "email.email"=>"Please enter a valid email address",
            "email.unique:users"=>"This email address already exists in our database",
            "password.required"=>"Please enter a password",
            "password.min:6"=>"Password must not be less than 6 chanracters",
            "password.confirmed"=>"Password Confirmation mismatch"
        ];
    }

    
}
