<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <router-link role="button" to="/" class="btn btn-danger mb-3 mr-2">Back</router-link>
    <button type="button" class="btn btn-primary mb-3" @click="save()">Save</button>
    <form>
      <div class="form-group">
        <label>Text</label>
        <input type="text" v-model="text" class="form-control">
      </div>
    </form>
  </div>
</template>
<script>
import PostService from "../PostService";
export default {
  name: "PostFormComponent",
  data() {
    return {
      id: this.$route.params.id ? this.$route.params.id : "",
      title: this.$route.params.id ? "Edit Post" : "Create Post",
      text: ""
    };
  },
  async created() {
    try {
      let post = await PostService.getPostById(this.id);
      this.text = post.text;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    save: function() {
      if (this.text == "") {
        alert("Empty!");
        return false;
      }

      try {
        if(this.id) {
            PostService.updatePost(this.id, this.text);
        } else {
            PostService.insertPost(this.text);
        }
        this.$router.push("/");
      } catch (err) {
        alert(err.message);
      }
    }
  }
};
</script>
