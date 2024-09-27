<?php

namespace App\Http\Controllers\Api;

use Illuminate\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\PointspupilRequest;
use App\Pupil;

class TestResultController extends RestController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req) 
    {
        $user_id = $req->user_id;
        $scoretest = $req->scoretest;  
        $pupil = Pupil::find($user_id);
        $pupil->scoretest = $scoretest;   
        $pupil->save();
        // Pupil::insert([
        //     'user_id' => $user_id,
        //     'scoretest' =>$scoretest,
        // ]);
        return $this->sendResponse(200);
    }
}
