<?php

use App\Http\Controllers\ProdutoController;
use Illuminate\Support\Facades\Route;

// Para o ProdutoController (Rotas da API)
Route::get('produtos', [ProdutoController::class, 'index'])->name('produtos.index');  // Listar todos os produtos
Route::get('produtos/{id}', [ProdutoController::class, 'show'])->name('produtos.show');  // Mostrar um produto específico
Route::post('produtos', [ProdutoController::class, 'store'])->name('produtos.store');  // Criar um novo produto
Route::put('produtos/{id}', [ProdutoController::class, 'update'])->name('produtos.update');  // Atualizar um produto
Route::delete('produtos/{id}', [ProdutoController::class, 'destroy'])->name('produtos.destroy');  // Excluir um produto
