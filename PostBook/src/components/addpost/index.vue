<template>
  <div>
    <b-container>
    <b-row>
      <b-col cols="12" class="alignTitle">
        <h3>New Post</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="8">
        <input type="text" class="form-control" v-model="title" placeholder="Title">
      </b-col>      
    </b-row>
    <b-row class="spaceTop">
      <b-col cols="8">
        <input type="text" class="form-control" v-model="tag" placeholder="Tags">
      </b-col>      
    </b-row>
    <b-row class="spaceTop">
      <b-col cols="8">
        <textarea class="form-control" rows="4" v-model="content" placeholder="Content"></textarea>      
      </b-col>      
    </b-row>
    <b-row class="spaceTop">
      <b-col cols="8">
        <input type="text" class="form-control" v-model="place" placeholder="Place">
      </b-col>      
    </b-row>
    <b-row class="spaceTop">
      <b-col cols="2" offset="6">
        <button @click="addPost" class="btn btn-primary buttonWidth">Post</button>
      </b-col>  
    </b-row>    
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default {
  name: 'AddPost',
  data(){
    return{      
      title: '',
      content: '',
      tag: '',
      place: '',
    }
  },  
  methods:{
    async addPost(){
      const res = await axios.post('http://localhost:4000/graphql', {
        query: `
          mutation AddPost($title: String!, $content: String!, $tag: String!, $place: String!){
            addPost(title: $title, content: $content, tag: $tag, place: $place){
              title
              content
              tag
              place
            }
          }
        `,
        variables: {
          title: this.title,
          content: this.content,
          tag: this.tag,
          place: this.place,
        }
      })
      this.$store.commit('add', res.data.data.addPost)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonWidth{
  width: 100%;
}

.spaceTop {
  margin-top: 5px;
  margin-bottom: 3px;
}
</style>
