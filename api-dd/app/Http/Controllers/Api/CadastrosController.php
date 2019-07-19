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

    public function show($id)
    {
        return Cadastro::all(1);
    }

    public function store()
    {
        dd($request->all());
    }

    public function update(Request $request)
    {
        $titulo_cadastro = $request->titulo_cadastro;
    }

    public function destroy(Cadastro $id)
    {
        $id->delete();
    }
}
