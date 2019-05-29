<template>
  <div class="post-component">
    <div class="container">
      <h1>Lastes Posts</h1>
      <router-link to="/post-form" role="button" class="btn btn-primary mb-3">Create</router-link>      
      <template v-if="!error">
        <table class="table">
          <thead>
            <tr>
              <th>Text</th>
              <th>Datetime</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(post, index) in posts" :key="index">
              <td>{{ post.text }}</td>
              <td>{{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}</td>
              <td>
                <router-link :to="`/post-form/${post._id}`" role="button" class="btn btn-sm btn-warning mr-2">Edit</router-link>
                <button type="button" class="btn btn-sm btn-danger" @click="onDelete(post._id, index)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </template>
      <template v-else>
        <div class="alert alert-danger" role="alert">{{ error }}</div>
      </template>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";
export default {
  name: "PostComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    onDelete: function(id, index) {
      this.posts.splice(index, 1);
      try {
        PostService.deletePost(id);
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
