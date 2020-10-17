<?php

namespace Database\Factories;

use App\Models\Favourite;
use Illuminate\Database\Eloquent\Factories\Factory;

class FavouriteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Favourite::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => random_int(1, 20),
            'title' => $this->faker->text(50),
            'author_name' => $this->faker->name,
            'image_url' => $this->faker->imageUrl(),
            'source_name' => $this->faker->company,
            'source_url' => $this->faker->url,
            'published_at' => $this->faker->date("Y-m-d H:i:s"),
            'content' => $this->faker->text(300)
        ];
    }
}
