<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Api')->name('api.')->group(function(){
    Route::get('/denuncias', 'DenunciasController@index')->name('denuncias');
    Route::get('/denuncias/{categoria}', 'DenunciasController@show_categoria')->name('denuncias_categoria');
    Route::post('/denuncias', 'DenunciasController@store')->name('criar_denuncias');
    Route::put('/denuncias/id', 'DenunciasController@update')->name('atualizar_denuncia');
    Route::delete('/denuncias/id', 'DenunciasController@delete')->name('deleta_denuncia');

    Route::get('/cadastros', 'CadastrosController@index')->name('cadastros');
    Route::post('/cadastros', 'CadastrosController@store')->name('criar_cadastro');
    
    Route::get('/categorias', 'CategoriasController@index')->name('categorias');
    Route::post('/categorias', 'CategoriasController@store')->name('criar_categoria');

    Route::get('/enderecos', 'EnderecosController@index')->name('enderecos');
    Route::post('/enderecos', 'EnderecosController@store')->name('criar_enderecos');

    Route::get('/atuacaos', 'AtuacaosController@index')->name('atuacaos');
    Route::post('/atuacaos', 'AtuacaosController@store')->name('criar_atuacao');
});