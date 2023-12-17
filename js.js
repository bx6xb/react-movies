fetch("http://www.omdbapi.com/?apikey=b3f6e6fb&s=asdasd")
  .then((response) => response.json())
  .then((data) => console.log(data))
