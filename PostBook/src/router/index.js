import Vue from 'vue';
import Router from 'vue-router';
import Tweets from '../components/tweets';
import AddTweet from '../components/addtweet'

Vue.use(Router);

const routes = [
    {
        path:'/',
        name:'posts',
        components:{
            default: Tweets
        },
    },
    {
        path:'/addpost',
        name:'addpost',
        components:{
            default: AddPost
        }
    },
];

export default new Router({routes});