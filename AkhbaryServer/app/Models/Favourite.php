<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    use HasFactory;


    /**
     * Get the user that owns the favourite.
     */
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
