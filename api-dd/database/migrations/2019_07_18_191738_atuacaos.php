<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Atuacaos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('atuacaos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('id_agente');
            $table->string('senha');

            // $table->unsignedBigInteger('atuacaos_id')->unsigned();
            // $table->foreign('atuacaos_id')->references('id')->on('atuacaos');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('atuacaos');
    }
}
