<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePedidoProdutoTable extends Migration
{
    public function up()
    {
        Schema::create('pedido_produto', function (Blueprint $table) {
            $table->id(); // Chave primária
            $table->unsignedBigInteger('pedido_id'); // Relacionamento com a tabela pedidos
            $table->unsignedBigInteger('produto_id'); // Relacionamento com a tabela produtos
            $table->integer('quantidade'); // Quantidade do produto no pedido
            $table->decimal('preco_unitario', 8, 2); // Preço unitário do produto
            $table->timestamps(); // Timestamps (created_at, updated_at)

            // Chaves estrangeiras
            $table->foreign('pedido_id')->references('id')->on('pedidos')->onDelete('cascade');
            $table->foreign('produto_id')->references('id')->on('produtos')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('pedido_produto');
    }
}
