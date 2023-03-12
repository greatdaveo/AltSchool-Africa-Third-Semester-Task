import { ref } from "vue";

const getData = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await fetch("https://api.github.com/users/greatdaveo/repos");
      // console.log(res)
      if (!res.ok) {
        throw new Error("Unable to load user repo!");
      }
      posts.value = await res.json();
      //   console.log(posts)
    } catch (err) {
      error.value = err.message;
      //   console.log(err.value)
    }
  };

  return { posts, error, load };
};

export default getData;
