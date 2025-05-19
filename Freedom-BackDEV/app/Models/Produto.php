<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produto extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'descricao', 'preco', 'quantidade_em_estoque', 'categoria_id'];

    // Relacionamento: Produto pertence a uma Categoria
    public function categoria()
    {
        return $this->belongsTo(Categoria::class);
    }

    // Relacionamento: Produto pertence a muitos Pedidos
    public function pedidos()
    {
        return $this->belongsToMany(Pedido::class)->withPivot('quantidade', 'preco_unitario');
    }
}

