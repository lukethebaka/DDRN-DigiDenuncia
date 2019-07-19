<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Cadastro;

class CadastrosController extends Controller
{
    public function index()
    {
        return Cadastro::all();
    }
}
