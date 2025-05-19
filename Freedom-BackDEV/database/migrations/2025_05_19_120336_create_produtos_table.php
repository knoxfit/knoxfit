<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdutosTable extends Migration
{
    public function up()
    {
        Schema::create('produtos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->text('descricao');
            $table->decimal('preco', 8, 2); // Preço do produto com 2 casas decimais
            $table->integer('quantidade_em_estoque');
            $table->unsignedBigInteger('categoria_id'); // Relacionamento com categorias
            $table->timestamps();

            // Relacionamento com a tabela 'categorias'
            $table->foreign('categoria_id')->references('id')->on('categorias')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('produtos');
    }
}

