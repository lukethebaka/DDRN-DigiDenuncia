<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Categoria;

class CategoriasController extends Controller
{
    public function index()
    {
        return Categoria::all();
    }
}
