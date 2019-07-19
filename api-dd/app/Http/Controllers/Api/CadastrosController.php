<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Cadastro;
use App\Atuacao;
use App\Denuncia;


class CadastrosController extends Controller
{
    public function index()
    {
        return Cadastro::all();
    }

    public function show(Cadastro $id)
    {
        return Cadastro::all($id);
    }

    public function getAtuacao(Denuncia $atuacao_id)
    {
        return Atuacao::all($atuacao_id);
    }

    public function getDenuncia(Denuncia $denuncia_id)
    {
        return Denuncia::all($denuncia_id);
    }

    public function store()
    {
        $cadastro = new Cadastro;

        $cadastro->id_agente = request('id_agente');
        $cadastro->senha = request('senha');
        $cadastro->atuacao_id = request('atuacao_id');
        $cadastro->denuncia_id = request('denuncia_id');

        $cadastro->save();
    }

    public function update($id)
    {
        $cadastro = Cadastro::findOrFail($id);

        $cadastro->id_agente = request('id_agente');
        $cadastro->senha = request('senha');
        $cadastro->atuacao_id = request('atuacao_id');
        $cadastro->denuncia_id = request('denuncia_id');

        $cadastro->save();
    }

    public function delete($id)
    {
        Cadastro::findOrFail($id)->delete();
    }
}
