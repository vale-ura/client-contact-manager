import capitalize from './GlobalFilter';

export default {
    install(Vue) {
        Vue.filter('capitalize',capitalize);
    }
}