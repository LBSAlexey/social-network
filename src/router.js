import { createRouter, createWebHistory } from 'vue-router';
import UserPage from './views/UserPage.vue';
import FriendsPage from './views/FriendsPage.vue';
import FeedPage from './views/FeedPage.vue';

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            name: 'profile',
            path: '/',
            component: UserPage
        },
        {
            name: 'friends',
            path: '/friends',
            component: FriendsPage,
        },
        {
            name: 'user',
            path: '/user/:username',
            component: UserPage
        },
        {
            name: 'feed',
            path: '/feed',
            component: FeedPage,
        },
        {
            name: 'main',
            path: '/main',
            component: FeedPage,
        }
    ]
})