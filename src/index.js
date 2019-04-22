import Vue from 'vue';

import App from './components/App.vue';
import store from './stores/MainStore.js';

new Vue({
    el: '#app', // アプリをマウントする要素(セレクタで指定)
    store,
    components: { App }, // Appというコンポーネントを使うよ、という宣言
    template: '<app/>', // el(今回は#app)の中に表示する内容
  })