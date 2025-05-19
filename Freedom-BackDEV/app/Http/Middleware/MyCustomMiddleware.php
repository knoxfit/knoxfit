<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class MyCustomMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        if ($request->user()->role != 'admin') {
            return redirect('home');  
        }

        return $next($request);  
    }
}
