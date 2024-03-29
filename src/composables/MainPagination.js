import { ref, computed } from "vue";

const MainPagination = (data) => {
  let page = ref(1);

  const perPage = 4;

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { paginatedData, perPage, page, nextPage, backPage, goToPage };
};

export default MainPagination;
