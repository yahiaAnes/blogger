import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Editor from "./Components/Editor";
export default function AddBlogs({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Add Blog</h2>}
        >
            <Head title="Add Blogs" />
            
            <div className=" w-full items-start px-5 md:px-10 w-7xl  sm:px-6 lg:px-8">
                <Editor />
            </div>
        </AuthenticatedLayout>
    );
}
