<?php

namespace App\Services;

use App\Models\Article;
use App\Traits\APITrait;

class ArticleService
{
    use APITrait;

    public function get_all_articles()
    {
        $articles = Article::with('user:id,name')->get();
        return $this->apiResponse($articles);
    }
    public function get_all_articles_by_user()
    {
        $articles = Article::where('user_id',auth()->user()->id)->with('user:id,name')->get();
        return $this->apiResponse($articles);
    }


    public function store_article(object $data)
    {
        // Store article
        $article = Article::create([
            'title' => $data->title,
            'user_id' => auth()->user()->id,
            'description' => $data->description,
            'picture' => $data->picture,
        ]);

        return $this->apiResponse($article);
    }

    public function get_article(int $id)
    {
        // get article by id
        $article = Article::where('id',$id)->with('user:id,name')->first();

        return $this->apiResponse($article);
    }
}
