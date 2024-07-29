import React, { useState, useEffect, useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'highlight.js/styles/atom-one-dark.css'; // Import Highlight.js styles
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import './Components/quill-custom.css'; // Import custom styles

export default function MyBlogs({ auth, blogs }) {
    const [convertedBlogs, setConvertedBlogs] = useState([]);
    const quillRefs = useRef([]);

    useEffect(() => {
        const convertBlogs = () => {
            const converted = blogs.map(blog => ({
                ...blog,
                convertedContent: blog.content // Assuming content is already HTML
            }));
            setConvertedBlogs(converted);
        };

        convertBlogs();
    }, [blogs]);

    useEffect(() => {
        convertedBlogs.forEach((blog, index) => {
            const quillInstance = quillRefs.current[index];
            if (quillInstance && quillInstance.getEditor) {
                const editor = quillInstance.getEditor();
                editor.clipboard.dangerouslyPasteHTML(blog.convertedContent);
                editor.disable();
            }
        });
    }, [convertedBlogs]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Blog</h2>}
        >
            <Head title="My Blogs" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">My blogs</div>
                        <ul>
                            {convertedBlogs.map((blog, index) => (
                                <div key={blog.id}>
                                    <h2 className='text-center text-white font-extrabold text-2xl py-4'>{blog.title}</h2>
                                    <Link href={`/blogs/${blog.id}`}>
                                        <ReactQuill
                                            ref={(el) => (quillRefs.current[index] = el)}
                                            value={blog.convertedContent}
                                            readOnly={true}
                                            theme="snow"
                                            modules={{ toolbar: false }}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
