<?php

namespace App\Http\Controllers\Api\Timeline;

use App\Http\Controllers\Controller;
use App\Http\Resources\GraouCollection;
use Illuminate\Http\Request;

class TimelineController extends Controller
{

    public function index(Request $request): GraouCollection
    {
        $graous = $request->user()
            ->graousFromFollowing
            ->paginate(5);

        return new GraouCollection($graous);
    }
}
