<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Blog;
use App\Http\Resources\CommentCollection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function getComments($blogId)
{
    $comments = Comment::select('username', 'comment', 'created_at')->where('blogs_id', $blogId)->get();
    
    if ($comments->isEmpty()) {
        return response()->json(['message' => 'Tidak ada komentar'], 200);
    }
    
    return response()->json($comments);
}


    public function index($id, Blog $blog)
    {
        $comments = $blog->comments; // Mengambil komentar berdasarkan relasi
        $comment = new CommentCollection($comments->find($id));

        return Inertia::render('BlogDetail', [
            'username' => "MBlog Home",
            '' => "Welcome, Selamat Datang di MBlog!",
            'comment' => $comment
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function showComment(Comment $comment)
    {
        $myComment = $comment::OrderByDesc('id')->where('author' , auth()->user()->name)->get();
        return Inertia::render('BlogDetail', [
            'myComment' => $myComment,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comment $comment)
    {
        //
    }
}
