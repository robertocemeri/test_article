<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
     
        \App\Models\User::create([
            'name' => 'Roberto Cemeri',
            'email' => 'robertocemeri29@gmail.com',
            'role' => 'admin',
            'password' => Hash::make('roberto1'),
        ]);

        \App\Models\Article::create([
            'title' => 'Roberto Cemeri',
            'description' => 'robertocemeri@gmail.com',
            'picture' => 'https://play-lh.googleusercontent.com/HGfb2ClmDEA6xydDMJRQtQ5JfQcHiOJT2PKCBlNTkgJZv6igmrHHFmz4010OCq2Q8cY',
            'user_id' => 1,
        ]);
    }
}
