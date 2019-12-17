let listElement = document.querySelector("ul");
let inputElement = document.querySelector("input");

function renderRepos(repositories) {
  for (repositorie of repositories) {
    const textElement = document.createTextNode(repositorie.name);
    const liElement = document.createElement("li");

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function listRepos() {
  let user = inputElement.value;
  if (!user) return;

  axios
    .get("http://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      loading.appendChild(loadingText);
      renderRepos(response.data);
    });
}
