<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Favourite extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'author' => $this->author_name,
            'url' => $this->source_url,
            'source' => array("name" => $this->source_name),
            'publishedAt' => $this->published_at,
            'urlToImage' => $this->image_url,
            'content' => $this->content
        ];
    }
}
