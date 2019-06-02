import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tweets: []
    },
    mutations: {
        add(state, tweet){
            state.tweets.push(tweet);
        }
    },
    getters: {
        tweets: state => state.tweets
    }
});