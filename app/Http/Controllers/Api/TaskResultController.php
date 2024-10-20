<?php

namespace App\Http\Controllers\Api;

// use Illuminate\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\PointspupilRequest;
use App\Pointspupil as Pointspupils;
use Illuminate\Support\Facades\DB;

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
        if(DB::table('pointspupils')->where('user_id', $user_id)
        ->where('task_id', $task_id)
        ->where('question_id', $question_id)
        ->where('level_id', $level_id)
        ->exists()) {
            $oldpoints = DB::table('pointspupils')->where('user_id', $user_id)
                ->where('task_id', $task_id)
                ->where('question_id', $question_id)
                ->where('level_id', $level_id)
                ->select('points')->get();
            $sumpoint = DB::table('pupils')->where('user_id', $user_id)
                ->select('sumpoint')->get();
            $newpoint = $sumpoint[0]->sumpoint - $oldpoints[0]->points;
            $newpoint = $newpoint + $points;
            DB::table('pupils')->where('user_id', $user_id)->update([
                // 'user_id' => $user_id,
                // 'task_id' =>$task_id,
                // 'question_id' => $question_id,
                // 'level_id' => $level_id,
                'sumpoint' => $newpoint,
            ]);
            DB::table('pointspupils')->where('user_id', $user_id)
                ->where('task_id', $task_id)
                ->where('question_id', $question_id)
                ->where('level_id', $level_id)
                ->update([
                // 'user_id' => $user_id,
                // 'task_id' =>$task_id,
                // 'question_id' => $question_id,
                // 'level_id' => $level_id,
                'points' => $points,
            ]);
            return $this->sendResponse(200, "update");    
        }
        else {
            DB::table('pointspupils')->insert([
                'user_id' => $user_id,
                'task_id' =>$task_id,
                'question_id' => $question_id,
                'level_id' => $level_id,
                'points' => $points,
            ]); 
            return $this->sendResponse(200, "insert");
            
        }
    }
}