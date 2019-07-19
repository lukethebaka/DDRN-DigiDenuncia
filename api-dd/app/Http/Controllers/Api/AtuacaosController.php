<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use APp\Atuacao;

class AtuacaosController extends Controller
{
    public function index()
    {
        return Atuacao::all();
    }

    public function show(Atuacao $id)
    {
        return $id;
    }

    public function store()
    {
        dd($request->all());
    }

    public function update(Atuacao $id)
    {
        dd($request->all(id));
    }

    public function destroy(Atuacao $id)
    {
        $id->delete();
    }
}
