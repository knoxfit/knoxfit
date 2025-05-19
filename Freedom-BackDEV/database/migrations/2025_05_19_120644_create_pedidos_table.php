<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidosTable extends Migration
{
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('usuario_id'); // ID do usuário (cliente) que fez o pedido
            $table->decimal('total', 8, 2); // Total do pedido
            $table->string('status'); // Status do pedido: 'em andamento', 'finalizado', etc.
            $table->timestamps();

            // Chave estrangeira para a tabela 'users' (usuários que fizeram o pedido)
            $table->foreign('usuario_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}

