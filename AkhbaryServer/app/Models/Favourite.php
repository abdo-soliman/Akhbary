<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
        'title',
        'author_name',
        'image_url',
        'source_name',
        'source_url',
        'published_at',
        'content'
    ];

    /**
     * Get the user that owns the favourite.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
