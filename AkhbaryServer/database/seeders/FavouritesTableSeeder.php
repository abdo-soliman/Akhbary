<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Favourite;

class FavouritesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Favourite::factory(100)->create();
    }
}
