import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'highlight.js/styles/atom-one-dark.css'; // Import Highlight.js styles
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import './quill-custom.css'; // Import custom styles

export default function Blog({ blog, auth }) {
    const [content, setContent] = useState('');
    const [buttonVisible, setButtonVisible] = useState(false);
    const [readOnly, setReadOnly] = useState(true);

    useEffect(() => {
        setContent(blog.content);
    }, [blog.content]);

    useEffect(() => {
        if (content !== blog.content) {
            setButtonVisible(true);
        } else {
            setButtonVisible(false);
        }
        console.log(content)
        console.log(blog.content)
    }, [content, blog.content]);

    const edit = () =>{
        setReadOnly(!readOnly)
    }
    console.log(readOnly)
    const save = () => {
        console.log('save changes ...')
        setButtonVisible(!buttonVisible)
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">My blog</div>
                        <button
                            className='bg-[#4779FB] py-2 px-4 rounded-lg text-white my-5'
                            onClick={edit}
                        >
                            {readOnly ? 'Enable Editing' : 'Disable Editing'}
                        </button>
                        {buttonVisible && (
                            
                            <button
                                className='bg-[#28a745] py-2 px-4 rounded-lg text-white m-5'
                                onClick={save}
                            >
                                Save Changes
                            </button>
                            
                        )}
                        <h2 className='text-center text-white font-extrabold text-2xl py-4'>{blog.title}</h2>
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            theme="snow"
                            readOnly= {readOnly}
                        />
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
