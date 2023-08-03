import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('@/views/Home.vue');
const Menu = () => import('@/views/Menu.vue');
const Contact = () => import('@/views/Contact.vue');
const Blog = () => import('@/views/Blog.vue');
const Post = () => import('@/views/Post.vue');
const Error = () => import('@/views/Error.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/menu/:id',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/blog/:id',
      component: Post,
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        resolve(savedPosition);
      } else if (to.hash || (to.path.includes('menu') && from.path.includes('menu'))) {
        setTimeout(() => {
          resolve({
            el: to.hash || '#itemList',
            behavior: 'smooth',
            top: 140,
          });
        }, 500);
      } else {
        resolve({ left: 0, top: 0 });
      }
    });
  },
});

export default router;
