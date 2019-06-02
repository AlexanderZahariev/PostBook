import networkClient from './network-client';

export default{
    getNews(params, success, failure){
        networkClient.get('news', success, failure, params);
    },
};