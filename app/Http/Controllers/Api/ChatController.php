<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
// use App\Http\Requests\PointspupilRequest;
use App\Chat as Chat;

class ChatController extends RestController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        $messages = DB::table('chats')
                    ->where('sendor', $req->user_id)
                    ->orWhere('recepient', $req->user_id)
                    ->take(10)
                    ->get();

        return $this->sendResponse($messages, 'success');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function create(Request $req)
    {
        $sendor = $req->sendor;
        $recepient = $req->recepient;
        $message = $req->message;
        $datetime = $req->datetime;  
        $tipe = $req->tipe;      
        Chat::insert([
            'sendor' => $sendor,
            'recepient' =>$recepient,
            'message' => $message,
            'datetime' => $datetime,
            'tipe' => $tipe,
        ]);
        return $this->sendResponse(200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
