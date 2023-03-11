import { ref } from "vue";

const getUserRepos = () => {
  const repos = ref([]);
  const error = ref(null);

  const loadRepos = async () => {
    try {
      let data = await fetch("https://api.github.com/users/greatdaveo/repos");
      // console.log(data)
      if (!data.ok) {
        throw Error("Unable to load user repo!");
      }
      repos.value = await data.json()
    //   console.log(repos)
    } catch (err) {
      error.value = err.message;
    //   console.log(err.value)
    }
  };

  return { repos, error, loadRepos };
};

export default getUserRepos;
