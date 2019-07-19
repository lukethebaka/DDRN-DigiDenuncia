<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Denuncia;

class DenunciasController extends Controller
{
    public function index()
    {
        return Denuncia::all();
    }

    public function show(Denuncia $id)
    {
        return $id;
    }

    public function show_categoria(Denuncia $categoria)
    {
        return $categoria;
    }

    public function store()
    {
        dd($request->all());
    }

    public function update(Denuncia $id)
    {
        dd($request->all(id));
    }

    public function destroy(Denuncia $id)
    {
        $id->delete();
    }
}
