<template>
  <div>
    <h1>Vue App</h1>
    <h1 v-if="isLoaded">Welcome! {{ user.email }}</h1>
    <h6 v-if="!isLoaded">Loading...</h6>
  </div>
</template>

<script>
import fb from "../firebase/firebaseConfig";

export default {
  name: "Home",
  data() {
    return {
      user: {},
      isLoaded: false,
    };
  },
  created() {
    fb.auth().onAuthStateChanged((user) => {
      this.user = user;
      this.isLoaded = true;
    });
  },
};
</script>

<style scoped></style>
