import Vue from 'vue';
import Home from './views/Home.vue';
import RegisterContact from './views/RegisterContact.vue';
import RegisterApplication from './views/RegisterApplication.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'registerContact',
            component: RegisterContact
        } ,
        {
            path: '/application',
            name: 'registerApplication',
            component: RegisterApplication
        }
    ]
});