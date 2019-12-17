let listElement = document.querySelector("ul");
let inputElement = document.querySelector("input");
let container = document.querySelector("div.list");

function renderRepositories(repositories) {
  listElement.innerHTML = "";
  let total = document.createElement("p");

  for (repo of repositories) {
    const textElement = document.createTextNode(repo.name);
    const liElement = document.createElement("li");

    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderLoading(loading) {
  listElement.innerHTML = "";

  let textElement = document.createTextNode("Carregando");
  let loadingElement = document.createElement("li");

  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError(loading) {
  listElement.innerHTML = "";

  let textElement = document.createTextNode("Erro!");
  let errorElement = document.createElement("li");

  errorElement.style.color = "#f00";

  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}

function listRepositories() {
  let user = inputElement.value;

  if (!user) return;

  renderLoading();

  axios
    .get("http://api.github.com/users/" + user + "/repos")
    .then(function(response) {
      renderRepositories(response.data);
    })
    .catch(function() {
      renderError();
    });
}
