import { ref } from "vue";

const getBioDetails = () => {
  const userDetail = ref({});
  const error = ref(null);

  const loadBioDetails = async () => {
    try {
      let data = await fetch("https://api.github.com/users/greatdaveo");
      // console.log(data);
      if (!data.ok) {
        throw Error("Unable to get user infos!!! 😔");
      }
      userDetail.value = await data.json();
      // console.log(userDetail);
    } catch (err) {
      error.value = err.message;
      //   console.log(error.value);
    }
  };

  return { userDetail, error, loadBioDetails };
};

export default getBioDetails;
