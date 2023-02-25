<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;


class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 0; $i < 100; $i++) {
            $price = rand(100, 200);
            $cat = rand(1, 5);
            DB::table('products')->insert([
                'category_id' => $cat,
                'product_name' => Str::random(15),
                'price' => $price,
                'image' => 'assets/images/no_photo.jpg',
                'product_stock' => rand(2, 15),
                'created_at' => date('Y-m-d h:i:s'),
                'updated_at' => date('Y-m-d h:i:s')

            ]);
        }
    }
}
