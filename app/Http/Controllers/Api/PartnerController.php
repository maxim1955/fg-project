<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Partner;
use App\Http\Resources\PartnerResource;

class PartnerController extends RestController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $partners = Partner::all();        
        //return $this->sendResponse($partners);
        return $this->sendResponse(PartnerResource::collection($partners));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
