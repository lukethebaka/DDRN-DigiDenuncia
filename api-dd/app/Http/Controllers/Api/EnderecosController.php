<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Endereco;

class EnderecosController extends Controller
{
    public function index()
    {
        return Endereco::all();
    }
}
