<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\Blogs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Blog::factory(40)->create();
    }
}
