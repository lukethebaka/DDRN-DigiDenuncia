<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Denuncia;
use App\Categoria;
use App\Endereco;

class DenunciasController extends Controller
{
    public function index()
    {
        return Denuncia::all();
    }

    public function show(Denuncia $id)
    {
        return Denuncia::all($id);
    }

    public function getCategoria(Denuncia $categoria_id)
    {
        return Categoria::all($categoria_id);
    }

    public function getEndereco(Denuncia $endereco_id)
    {
        return Endereco::all($endereco_id);
    }


    public function store()
    {
        $denuncia = new Denuncia;

        $denuncia->titulo_denuncias = request('titulo_denuncias');
        $denuncia->status = request('status');
        $denuncia->categoria_id = request('categoria_id');
        $denuncia->endereco_id = request('endereco_id');
        $denuncia->imagem = request('imagem');

        $denuncia->save();
    }

    public function update($id)
    {
        $denuncia = Denuncia::findOrFail($id);

        $denuncia->titulo_denuncias = request('titulo_denuncias');
        $denuncia->status = request('status');
        $denuncia->categoria_id = request('categoria_id');
        $denuncia->endereco_id = request('endereco_id');
        $denuncia->imagem = request('imagem');

        $denuncia->save();
    }

    public function delete($id)
    {
        Denuncia::findOrFail($id)->delete();
    }
}
