let user = JSON.parse(localStorage.getItem("user"))

fetch('/api/myPolls/' + user.id)
  .then(function(response) {
    console.log("here1")
    return response.json();
  })
  .then(function(myJson) {
    console.log("here2");
    console.log(myJson)
  });
