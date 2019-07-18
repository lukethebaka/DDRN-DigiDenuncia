<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Cadastro extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cadastro', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_agente');
            $table->string('senha');

            $table->unsignedBigInteger('atuacao_id')->unsigned();
            $table->foreign('atuacao_id')->references('id')->on('atuacao');
            
            $table->unsignedBigInteger('denuncia_id')->unsigned();
            $table->foreign('denuncia_id')->references('id')->on('denuncia');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('cadastro');
    }
}
