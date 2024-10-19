<?php

namespace App\Http\Controllers\Api;

use Illuminate\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\PointspupilRequest;
use App\Pointspupil as Pointspupils;

class TaskResultController extends RestController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req) 
    {
        $user_id = $req->user_id;
        $task_id = $req->task_id;
        $question_id = $req->question_id;
        $level_id = $req->level_id;
        $points = $req->points; 
        Pointspupils::insert([
            'user_id' => $user_id,
            'task_id' =>$task_id,
            'question_id' => $question_id,
            'level_id' => $level_id,
            'points' => $points,
        ]);
        return $this->sendResponse(200);
    }
}
