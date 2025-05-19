<?php

namespace App\Http\Controllers;

use App\Models\Produto;
use Illuminate\Http\Request;

class ProdutoController extends Controller
{
    // Listar todos os produtos
    public function index()
    {
        return Produto::all();  // Retorna todos os produtos
    }

    // Exibir um produto específico
    public function show($id)
    {
        return Produto::find($id);  // Retorna o produto com o id fornecido
    }

    // Criar um novo produto
    public function store(Request $request)
    {
        // Validando os dados recebidos na requisição
        $validated = $request->validate([
            'nome' => 'required|string|max:255',  // Nome do produto é obrigatório e não pode ter mais de 255 caracteres
            'descricao' => 'required|string',  // Descrição do produto é obrigatória
            'preco' => 'required|numeric',  // Preço do produto deve ser numérico
            'quantidade_em_estoque' => 'required|integer',  // Quantidade em estoque deve ser um número inteiro
            'categoria_id' => 'required|integer|exists:categorias,id',  // Categoria deve ser um ID existente na tabela categorias
        ]);

        // Criando o produto no banco de dados com os dados validados
        $produto = Produto::create($validated);

        // Retornando o produto criado com status 201 (Created)
        return response()->json($produto, 201);  // Retorna o produto criado com o status de sucesso
    }

    // Atualizar um produto existente
    public function update(Request $request, $id)
    {
        // Encontrando o produto pelo ID
        $produto = Produto::find($id);

        // Caso o produto não seja encontrado
        if (!$produto) {
            return response()->json(['error' => 'Produto não encontrado'], 404);  // Retorna um erro se o produto não existir
        }

        // Atualizando o produto com os dados fornecidos na requisição
        $produto->update($request->all());

        // Retornando o produto atualizado
        return response()->json($produto);  // Retorna o produto atualizado
    }

    // Deletar um produto
    public function destroy($id)
    {
        // Verificando se o produto existe
        $produto = Produto::find($id);

        // Caso o produto não seja encontrado
        if (!$produto) {
            return response()->json(['error' => 'Produto não encontrado'], 404);  // Retorna um erro se o produto não existir
        }

        // Excluindo o produto
        Produto::destroy($id);

        // Retorna uma resposta sem conteúdo, indicando sucesso na exclusão
        return response()->noContent();  // Retorna o status 204 (sem conteúdo)
    }
}
