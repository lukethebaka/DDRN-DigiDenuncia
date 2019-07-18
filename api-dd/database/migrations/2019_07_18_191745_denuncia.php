<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Denuncia extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('denuncia', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('titulo_denuncia');
            $table->boolean('status');
            $table->binary('imagem');

            // $table->unsignedBigInteger('categoria_id')->unsigned();
            // $table->foreign('categoria_id')->references('id')->on('categoria');

            // $table->unsignedBigInteger('endereco_id')->unsigned();
            // $table->foreign('endereco_id')->references('id')->on('endereco');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('denuncia');
    }
}
