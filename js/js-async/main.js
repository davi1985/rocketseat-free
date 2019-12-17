//AJAX
/*
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/users/davi1985");
xhr.send(null);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};

// PROMISSES

let myPromise = function() {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/davi1985");
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject("Erro na requisição");
        }
      }
    };
  });
};

let user = document.querySelector("h2");
let avatar = document.querySelector("img");
let fallowers = document.querySelector("span");
myPromise()
  .then(function(response) {
    user.innerHTML = response.login;
    avatar.src = response.avatar_url;
    fallowers.innerHTML = response.followers;

    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
  */
