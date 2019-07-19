<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Atuacao;

class AtuacaosController extends Controller
{
    public function index()
    {
        return Atuacao::all();
    }
}
