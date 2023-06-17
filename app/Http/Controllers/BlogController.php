<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlogCollection;
use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->search;
        $blog = new BlogCollection(Blog::OrderByDesc('id')
        ->where('title', 'LIKE', '%'.$search.'%')
        ->orWhere('description', 'LIKE', '%'.$search.'%')
        ->orWhere('category', 'LIKE', '%'.$search.'%')
        ->orWhere('author', 'LIKE', '%'.$search.'%')
        ->paginate(9));
        return Inertia::render('homepage', [
            'title' => "MBlog Home",
            'description' => "Welcome, Selamat Datang di MBlog!",
            'blog' => $blog
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{   
    //dd($request->file('image'));
    $newName = '';

    if($request->file('image')){
    $extension = $request->file('image')->getClientOriginalExtension();
    $newName = $request->title . '-' . now()->timestamp . '.' . $extension;
    $request->file('image')->storeAs('image', $newName);
    }

    $blog = new Blog();
    $blog['image'] = $newName;
    $blog->title = $request->title;
    $blog->description = $request->description;
    $blog->category = $request->category;
    $blog->author = auth()->user()->name;
    $blog->save();

    
    return redirect()->back()->with('message', 'Blog berhasil dibuat');
}


    /**
     * Display the specified resource.
     */
    
    public function showDashboard(Blog $blog)
    {

        $myBlog = $blog::OrderByDesc('id')->where('author' , auth()->user()->name)->get();
        return Inertia::render('Dashboard', [
            'myBlog' => $myBlog,
        ]);
    }

    public function showDetail(Blog $blog, $title)
    {
    $blogs = $blog::select('title', 'description', 'author', 'image', 'created_at')
                  ->where('title', $title)
                  ->get();

        return Inertia::render('BlogDetail', [
        'blogs' => $blogs,
         ]);
        }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog, Request $request)
    {
        return Inertia::render('EditBlog', [
            'myBlog' => $blog->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
{
    $data = [];

    if ($request->filled('title')) {
        $data['title'] = $request->title;
    }

    if ($request->filled('description')) {
        $data['description'] = $request->description;
    }

    if ($request->filled('category')) {
        $data['category'] = $request->category;
    }

    if (!empty($data)) {
        Blog::where('id', $request->id)->update($data);
        return redirect()->route('dashboard')->with('message', 'Blog kamu berhasil diperbarui');
    } else {
        return redirect()->back()->with('message', 'Belum ada yang diubah');
    }
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $blog = Blog::find($request->id);
        $blog->delete();
        return redirect()->back()->with('message', 'Blog berhasil dihapus');
    }
}
