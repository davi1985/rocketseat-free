axios
  .get("http://api.github.com/users/davi1985")
  .then(response => {
    console.log(response.data.avatar_url);
  })
  .then(error => {
    console.log(error);
  });
