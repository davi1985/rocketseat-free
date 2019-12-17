function ageCheck(age) {
  return new Promise((response, reject) => {
    setTimeout(() => {
      return age >= 18 ? response() : reject();
    }, 2000);
  });
}

ageCheck(15)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18");
  });
