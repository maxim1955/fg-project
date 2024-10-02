<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Validator;
use App\Level;
use App\Task;

class TasksController extends RestController
{
    public function index()
    {
        $levels = DB::table('levels')->get();
        $tasks = DB::table('tasks')->get();
        $questions = DB::table('questions')->get();
        $promts = DB::table('promts')->get();
        $answers = DB::table('answers')->get();
        $points = DB::table('points')->get();
        $result = [];
        $response = [];
        foreach ($levels as $level) {
            $result['level_id'] = $level->id;
            $result['name'] = $level->name;
            $result['min'] = $level->min;
            $result['minpoints'] = $level->minpoints;
            $result['tasks'] = [];
            foreach ($tasks as $task) {
                if ($level->id == $task->level_id) {
                    // array_push($result['tasks'], $task);
                    $task->questions = [];
                    // $result['tasks']['questions'] = [];
                    foreach ($questions as $question) {
                        if ($task->id == $question->task_id) {
                            array_push($task->questions, $question);
                            $question->promts = []; 
                            foreach ($promts as $promt) {
                                if ($question->id == $promt->question_id) {
                                    array_push($question->promts, $promt);
                                    // $question->promts = []; 
                                    // $result['tasks']['questions'] = $question;
                                }
                            }
                            $question->answers = [];
                            foreach ($answers as $answer) {
                                if ($question->id == $answer->question_id) {
                                    array_push($question->answers, $answer);
                                    // $question->promts = []; 
                                    // $result['tasks']['questions'] = $question;
                                }
                            }
                            $question->points = [];
                            foreach ($points as $point) {
                                if ($question->id == $point->question_id) {
                                    array_push($question->points, $point);
                                    // $question->promts = []; 
                                    // $result['tasks']['questions'] = $question;
                                }
                            }
                        }
                    }
                    array_push($result['tasks'], $task);
                }
         
            }
            array_push($response, $result);   
        }
        return $this->sendResponse($response, 'success');
    }

}