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
        $denuncia = new Denuncia;

        $denuncia->titulo_denuncias = request('titulo_denuncias');
        $denuncia->status = request('status');

        $denuncia->save();
    }

    public function update($id)
    {
        $denuncia = Denuncia::findOrFail($id);

        $denuncia->titulo_denuncias = request('titulo_denuncias');
        $denuncia->status = request('status');

        $denuncia->save();
    }

    public function delete($id)
    {
        Denuncia::findOrFail($id)->delete();
    }
}
