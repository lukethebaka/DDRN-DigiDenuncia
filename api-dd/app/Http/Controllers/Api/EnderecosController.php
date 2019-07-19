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

    public function show(Endereco $id)
    {
        return $id;
    }

    public function store()
    {
        dd($request->all());
    }

    public function update(Endereco $id)
    {
        dd($request->all(id));
    }

    public function destroy(Endereco $id)
    {
        $id->delete();
    }
}
