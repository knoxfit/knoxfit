<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register(): void
    {
        // Registre seus serviços ou bindings aqui
        // Exemplo: $this->app->bind(...);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot(): void
    {
        // Realize qualquer inicialização aqui
        // Exemplo: configuração de algum serviço ou manipulação de eventos.
    }
}
