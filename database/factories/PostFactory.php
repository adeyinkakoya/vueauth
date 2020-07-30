<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Post;
use Faker\Generator as Faker;

$factory->define(Post::class, function (Faker $faker) {
    return [
        'user_id'=>$faker->randomDigit,
        'title'=>$faker->text(50),
        'content'=>$faker->text(200),
    ];
});
