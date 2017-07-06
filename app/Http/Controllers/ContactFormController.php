<?php

namespace App\Http\Controllers;

use Validator;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function sendForm(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
        ]);
        if($validator->fails()){
            return response()->json(['success' => false, 'errors' => $validator->errors()]);
        }
        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'message' => $request->message
        );
        $email = 'emils.gulbis@gmail.com';
        Mail::to($email)->send(new ContactForm($data));

        return response()->json(['success' => true]);
    }

    //
}
