<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TestController
{
    //
    public function test()
    {

        $local = DB::table('system_global_parameters')->get();
        $remote = DB::connection('mysql')->table('system_global_parameters')->get();

        return response()->json([
            'infoConection' => $local,
            'remote' => $remote
        ]);
    }
}
