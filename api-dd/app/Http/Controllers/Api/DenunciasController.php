<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DenunciasController extends Controller
{
    public function index()
    {
        return ['status' => true];
    }
}
