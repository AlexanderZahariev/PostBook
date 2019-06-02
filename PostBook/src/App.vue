<template>
  <div id="app">
    <b-container>
      <navigation></navigation>
      <div class="min-height">
      <router-view></router-view>
      </div>
      <Footer></Footer>
    </b-container>

  </div>
</template>

<script>
import Navigation from './components/navigation';
import Footer from './components/footer';
import axios from 'axios';
export default {
  name: 'app',
  components:{
    Navigation,
    Footer
  },
  methods:{    
        async getPosts() {
          const res = await axios.post(            
            'http://localhost:4000/graphql', {
              query: `{
                getPosts {
                  title
                  content
                  tag
                  place
                }
              }`
            }
          );

          this.$store.commit('add', res.data.data.getPosts[0])
        }
  },
  created(){
    this.getPosts();
  },
}
</script>

<style>
  @import 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

  .btn-warning
  {
    background-color:darkorange !important;
    color: white !important;;
  }
</style>
