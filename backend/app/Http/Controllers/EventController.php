<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    public function index() {
        $event = Event::all();

        if(!$event) {
            return response()->json([
                'message' => 'event not found',
            ], 404);
        }

        $event->transform(function($event) {
            if ($event->profile_picture) {
                $event->profile_picture = asset("storage/{$event->profile_picture}");
            }

            return $event;
        });

        return response()->json([
            'event' => $event,
        ], 200);
    }
}
