<template>
  <div class="home-container">
    <!-- The Top Nav Bar -->
    <!-- <NavBar /> -->

    <!-- The Side Bar -->
    <SideBar />

    <div class="bio-container">
      <!-- This is the user Bio -->
      <img
        class="robot-img"
        src="../assets/avartar-with-pc.svg"
        alt="Robot Illustration"
      />

      <div class="bio">
        <h1 v-if="error" class="error">{{ error }}</h1>
        <img
          class="user-avatar"
          :src="userDetail.avatar_url"
          alt="User Image"
        />
        <h1>
          {{ userDetail.name }}
          <!-- (<span>{{ userDetail.login }}</span
          >) -->
        </h1>
        <p class="bio-text">{{ userDetail.bio }}</p>
        <p>
          <span>Followers: {{ userDetail.followers }} </span>
          <span> Followers: {{ userDetail.following }}</span>
        </p>
        <p>Public repos: {{ userDetail.public_repos }}</p>
      </div>
    </div>
    <!-- <div v-else class="loading">
      <img src="https://tenor.com/bpeK1.gif" alt="" />
    </div> -->
  </div>
</template>

<script>
import ReposList from "@/components/ReposList.vue";
import getBioDetails from "@/composables/getBioDetails";
import SideBar from "@/components/SideBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "HomeView",
  components: { ReposList, SideBar, NavBar },
  setup() {
    const { userDetail, error, loadBioDetails } = getBioDetails();

    loadBioDetails();
    return { userDetail, error };
  },
};
</script>

<style>
.home-container {
  background-image: linear-gradient(rgba(0, 0, 0.5), hsla(0, 0%, 0%, 0.5)),
    url("../assets/galaxy-1.jpg");
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-position-x: 67%;
}

.bio-container {
  display: flex;
  margin: -30rem auto;
}

img {
  border-radius: 50%;
  width: 20%;
  margin-top: 1rem;
  background: inherit;
}

img.user-avatar {
  border: 1px solid gold;
}

.robot-img {
  float: left;
  margin-left: 15rem;
  width: 30%;
}

.bio {
  text-align: left;
  float: right;
  margin: 0rem auto;
  box-shadow: 0px 2px 15px 2px #91929b;
  padding: 1rem;
  width: 40%;
  line-height: 2rem;
  color: rgb(190, 177, 177);
}

.bio p {
  /* width: 50%; */
}
</style>