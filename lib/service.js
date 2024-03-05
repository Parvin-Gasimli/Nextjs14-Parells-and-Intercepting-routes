export const getAllPhotos = () => {
  return fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
    res.json()
  );
};

export const getPhoto = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).then(
    (res) => res.json()
  );
};
