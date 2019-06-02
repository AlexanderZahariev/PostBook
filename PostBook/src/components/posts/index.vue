<template>
  <div>
    <h1 class="alignTitle">Posts:</h1>        
    <b-row v-for="i in Math.ceil(posts.length / 2)" v-bind:key="i" class="spaceTop">
      <b-col cols="6" v-for="post in posts.slice((i - 1) * 2, i *2)" v-bind:key="post.title">
        <div class="card maxWidth">
          <div class="card-body">
            <h4 class="card-title">{{ post.title }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ post.content }}</h5>
            <p class="card-text">{{ post.tag }}</p>
            <h6 class="card-subtitle mb-2 text-muted">{{ post.place }}</h6>
          </div>
        </div>
      </b-col>
    </b-row>
    
  </div>    
</template>

<script>
/* eslint-disable */
import axios from 'axios';
export default {  
  name: 'Posts',
  data() {
    return {
      allposts: []
    }
  },
  computed:{
    posts () {
      return this.$store.state.posts
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.maxWidth{
  width: 100%;
}

.spaceTop {
  margin-top: 5px;
  margin-bottom: 3px;
}
</style>
