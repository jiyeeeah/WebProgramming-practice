//얘는 작동 안하지만 test2는 작동함
let postData;

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    postData = data;
  }); //fetch의 기본은 GET 메소드

const postURL = "https:jsonplaceholder.typicode.com/todos";

fetch(postURL, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => response.json())
  .then((data) => console.log(data));