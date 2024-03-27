<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('events')->insert([
            ['title' => 'District Race Kuala Lumpur', 'address' => 'KLCC, Kuala Lumpur', 'contact' => '01121998066'],
            ['title' => 'TiTi Ultra Ride 2024', 'address' => 'Parking Padang, Jalan 1, Taman Titiwangsa, Hulu Langat, Selangor, Malaysia', 'contact' => '01121998066'],
            ['title' => 'LEBARUN 2024', 'address' => 'Dataran DBKL, Kuala Lumpur', 'contact' => '01121998066'],
            ['title' => 'Fun Run Hero Pengguna', 'address' => 'Dataran Centrio Seremban 2, Negeri Sembilan', 'contact' => '01121998066'],
            ['title' => 'Larian Rakan Muda Sempena Shah Alam Hari Tanpa Kenderaan', 'address' => 'Dataran Kemerdekaan Shah Alam', 'contact' => '01121998066'],
        ]);
    }
}
