import { ref } from "vue";

const getPost = (name) => {
  const repo = ref(null);

  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("https://api.github.com/repos/greatdaveo/" + name);

      if (!data.ok) {
        throw Error("No data is available");
      }

      repo.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { repo, error, load };
};

export default getPost;
