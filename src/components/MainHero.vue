<template>
  <div class="bio-container">
    <!-- This is the user Bio -->
    <img
      class="robot-img"
      src="../assets/avartar-with-pc.svg"
      alt="Robot Illustration"
    />

    <div class="hero-links-container">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/repositories">Repositories</router-link>
        </li>
        <li>
          <router-link to="/:catchAll(.*)">Test Error</router-link>
        </li>
      </ul>
    </div>

    <div class="bio">
      <h1 v-if="error" class="error">{{ error }}</h1>
      <img class="user-avatar" :src="userDetail.avatar_url" alt="User Image" />
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
</template>

<script>
import getBioDetails from "@/composables/getBioDetails";

export default {
  name: "MainView",

  setup() {
    const { userDetail, error, loadBioDetails } = getBioDetails();

    loadBioDetails();
    return { userDetail, error };
  },
};
</script>

<style>
.bio-container {
  display: flex;
  margin: -30rem auto;
}

.hero-links-container {
  display: none;
  justify-content: space-between;
  margin: 1rem;
}

.hero-links-container ul {
  display: flex;
  list-style: none;
}

.hero-links-container a {
  margin: 0.5rem;
  border: 1px solid gold;
  padding: 0.7rem;
  text-decoration: none;
  color: gold;
}

.hero-links-container a:hover {
  color: inherit;
  border: 1px solid blue;
  background: white;
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
  border-radius: 30px;
}

/* THE MEDIA QUERY */
@media (min-width: 1279px) {
}

@media (max-width: 1279px) {
}

@media (max-width: 900px) {
  .bio-container {
    margin-left: -5rem;
  }
}

@media (max-width: 782px) {
  .bio-container {
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
  }

  .robot-img {
    display: none;
  }

  .bio {
    text-align: center;
    margin-left: 13rem;
  }
}

@media (max-width: 485px) {
  .bio-container {
    display: flex;
    position: absolute;
    margin: 4rem auto;
  }

  .hero-links-container {
    display: flex;
  }

  .bio {
    margin: 3rem auto;
    width: 70%;
  }
}
</style>