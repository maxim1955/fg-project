<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\Models\User;
use App\Pupil;
use App\Pointspupil;

class AuthController extends RestController
{
    public function signin(Request $request)
    {
        if (Auth::attempt(['login' => $request->login, 'password' => $request->password])) {
            $authUser = Auth::user();
            $success['token'] =  $authUser->createToken('MyAuthApp')->plainTextToken;
            $success['id'] =  $authUser->id;
            $success['surname'] =  $authUser->surname;
            $success['name'] =  $authUser->name;
            $success['middlename'] =  $authUser->middlename;
            $success['gende'] = $authUser->gende;
            $success['avatar'] = $authUser->avatar;
            $success['role_id'] = $authUser->role_id;
            
            if($authUser->role_id=='4'){
                $authPupil = DB::table('pupils')->where('user_id', $authUser->id)->first();
                if ($authPupil) 
                {
                    $success['scoretest'] = $authPupil->scoretest;
                    $success['sumpoint'] = $authPupil->sumpoint;
                    $success['spendpoints'] = $authPupil->spendpoints;
                    $success['starttime'] = $authPupil->starttime;
                    
                    $pupils = Pupil::where('klass_id', $authPupil->klass_id)->orderBy('sumpoint', 'DESC')->get();
                    $results = json_decode($pupils,true);
                    $c=count($results);
                    for($i = 0; $i<$c; $i++)
                    {
                        if ($results[$i]['user_id']==$authPupil->user_id)
                        {
                            $rating = $i+1;
                        }
                    }
                    $success['rating'] =  $rating;
                    $pointspupils = Pointspupil::where('user_id', $authUser->id)->orderBy('id')->get();
                    $success['pointspupils'] =  $pointspupils;
                }
                else {
                    return $this->sendError('No such pupil.', ['error' => 'Unauthorised']);
                }
            }           
            return $this->sendResponse($success, 'User signed in');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if ($validator->fails()) {
            return $this->sendError('Error validation', $validator->errors());
        }

        $input = $request->all();

        $input['password'] = bcrypt($input['password']);
        if (User::select('email')->where('email', $request['email'])->get() != null) {
            return $this->sendError('User already exists', null, 409);
        }

        $user = User::create($input);
        $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
        $success['name'] =  $user->name;

        return $this->sendResponse($success, 'User created successfully.');
    }

    public function avatarchange(Request $request)
    {
        $id = $request->id;
        $avatar = $request->avatar;
        // if($id && $avatar) {
            DB::table('users')->where('id', $id)->update(array('avatar' => $avatar));
            return $this->sendResponse(200);
        // }
        // else return $this->sendResponse(404);
    }
}