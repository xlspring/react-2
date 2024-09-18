export default function search(list, searchField, searchValue) {
  const delay = 3000;
  return new Promise((resolve, reject) => {
    let results = list.filter((item) => item[searchField] === searchValue);

    setTimeout(() => {
      results.length === 0
        ? reject(`No one was found (query ${searchField}:${searchValue})`)
        : resolve(results, delay);
    }, delay);
  });
}
