<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define as rotas da aplicação.
     *
     * @return void
     */
    public function map()
    {
        $this->mapWebRoutes();  // Carrega as rotas do arquivo web.php
        $this->mapApiRoutes();  // Carrega as rotas do arquivo api.php
    }

    /**
     * Define as rotas para a aplicação web.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')  // Define o middleware da aplicação web
             ->namespace($this->namespace)  // Namespace das rotas
             ->group(base_path('routes/web.php'));  // Carrega o arquivo web.php
    }

    /**
     * Define as rotas para a API.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api') // Prefixo para as rotas da API (ex: /api/produtos)
             ->middleware('api'), // Middleware da API
             ->namespace($this->namespace), // Namespace das rotas
             ->group(base_path('routes/api.php'));  // Carrega o arquivo api.php
    }
}
