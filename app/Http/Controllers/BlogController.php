<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


class BlogController extends Controller
{
    use AuthorizesRequests;
    
    //_______________S T O R E   T H E   B L O G S_______________________________

    
    public function store(Request $request){
        //dd($request);
        $request->validate([
            
            'content' => 'required',
        ]);

        $userId = Auth::user()->id;
        $blog = new Blog();
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->userId= $userId;
        $blog->save();


        return redirect()->back()->with('message', 'Blog saved successfully');
  
    }

    //_______________D I S P L A Y   T H E   B L O G S_______________________________


    public function myblogs(){

    $userId = Auth::user()->id;
    $blogs = Blog::where('userId', $userId)->get();
 
    return Inertia::render('Dashboard/MyBlogs', [
        'blogs' => $blogs
    ]);

    }

    //_______________S H O W   T H E   B L O G_______________________________


    public function show($id){

        $blog = Blog::findOrFail($id);

        // Authorize the user
        $this->authorize('view', $blog);

        return Inertia::render('Dashboard/Components/Blog', [
            'blog' => $blog
        ]);
    }

}
