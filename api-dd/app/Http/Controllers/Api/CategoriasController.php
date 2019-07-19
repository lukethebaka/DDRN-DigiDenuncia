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

    public function show(Categoria $id)
    {
        return $id;
    }

    public function store()
    {
        dd($request->all());
    }

    public function update(Categoria $id)
    {
        dd($request->all(id));
    }

    public function destroy(Categoria $id)
    {
        $id->delete();
    }
}
