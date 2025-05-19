<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    protected $fillable = ['usuario_id', 'total', 'status'];

    
    public function produtos()
    {
        return $this->belongsToMany(Produto::class)->withPivot('quantidade', 'preco_unitario');
    }
    public function usuario()
    {
        return $this->belongsTo(User::class);
    }
}
