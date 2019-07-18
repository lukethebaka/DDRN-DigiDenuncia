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

<<<<<<< HEAD
            //$table->unsignedBigInteger('categoria_id')->unsigned();
            //$table->foreign('categoria_id')->references('id')->on('categoria');

            //$table->unsignedBigInteger('endereco_id')->unsigned();
            //$table->foreign('endereco_id')->references('id')->on('endereco');
=======
            // $table->unsignedBigInteger('categoria_id')->unsigned();
            // $table->foreign('categoria_id')->references('id')->on('categoria');

            // $table->unsignedBigInteger('endereco_id')->unsigned();
            // $table->foreign('endereco_id')->references('id')->on('endereco');
>>>>>>> d35fd2fc1b10508a43ce50840ee9b5e5ac799d5b
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
