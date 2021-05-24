const test = () => {
  const users = fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => response.json());
  return await users;
}