import Post from './components/PostComponent';
import PostForm from './components/PostFormComponent';

export const routes = [
    {
        path: '/',
        component: Post
    },
    {
        path: '/post-form',
        component: PostForm
    },
    {
        path: '/post-form/:id',
        component: PostForm
    }
];