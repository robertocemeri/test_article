<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Services\ArticleService;
use App\Http\Requests\StoreArticleRequest;
use Illuminate\Http\JsonResponse;
use App\Traits\APITrait;
use Illuminate\Support\Facades\Log;

class ArticleController extends Controller
{
    use APITrait;

    private ArticleService $articleService;

    public function __construct(
        ArticleService $articleService,
    ) {

        $this->articleService = $articleService;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        //
        try {
            return $this->articleService->get_all_articles();
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function get_all_articles_by_user(): JsonResponse
    {
        //
        try {
            return $this->articleService->get_all_articles_by_user();
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request): JsonResponse
    {
        //
        try {
            return $this->articleService->store_article($request);
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }
 

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        //
        try {
            return $this->articleService->get_article($id);
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update( $id, Request $request)
    {
        try {
            $article = Article::find($id);
            Log::error($article);
            $article->update($request->all());
            return $this->apiResponse($article);
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        try{
            $article = Article::find($id);
            $article->delete();

            return $this->apiResponse($article);
        } catch (\Exception $e) {
            return $this->apiResponse([], 500, $e->getMessage());
        }
    }
}
