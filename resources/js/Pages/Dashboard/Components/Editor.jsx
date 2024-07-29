import React, { useState, useEffect, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import 'highlight.js/styles/atom-one-dark.css'; // Import Highlight.js styles
import 'katex/dist/katex.min.css'; // Import KaTeX styles
import './quill-custom.css'; // Import custom styles
// Import dependencies globally
import hljs from 'highlight.js';
import katex from 'katex';
import CustomToolbar from './CustomToolbar ';

window.hljs = hljs;
window.katex = katex;

const Editor = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('Untitled');
  const quillRef = useRef(null);

  useEffect(() => {

    const loadQuill = async () => {
      try {
        const Quill = (await import('quill')).default;

        // Custom fonts
        const Font = Quill.import('formats/font');
        Font.whitelist = ['arial', 'comic-sans', 'courier-new', 'georgia', 'helvetica', 'lucida'];
        Quill.register(Font, true);

        if (quillRef.current) {
          // Initialize Quill editor
          const quill = new Quill(quillRef.current, {
            modules: {
              syntax: true,
              toolbar: '#toolbar-container',
            },
            placeholder: 'Compose an epic...',
            theme: 'snow',
          });

          // Debugging: Log Quill editor instance
          //console.log('Quill editor initialized:', quill);

          quill.on('text-change', () => {
            const content = quill.root.innerHTML;
            //console.log('Quill content:', content); // Debugging
            setValue(content);
          });
        } else {
          console.error('Quill reference is null');
        }
      } catch (error) {
        console.error('Error loading Quill or dependencies:', error);
      }
    };

    loadQuill();
  }, []);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Content to be submitted:', value); // Debugging
    Inertia.post(route('blogs.store'), { content: value, title });
  };
  

  return (
    <>
    <div className='w-full flex justify-center items-center text-white  font-extrabold'>
      <input type="text" className='bg-transparent border-0 text-4xl text-white text-center'onChange={handleChange} value={title} />
    </div>
    <div className="mt-5 max-w-2xl">
     <CustomToolbar />
      <div id="editor" ref={quillRef}></div>
      <div className='flex justify-end'>
        <button
          className="bg-[#4779FB] py-2 px-4 rounded-lg text-white my-5"
          onClick={handleSubmit}
        >
          Add blog
        </button>
      </div>
    </div>
    </>
  );
};

export default Editor;
