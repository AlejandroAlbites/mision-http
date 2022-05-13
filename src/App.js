import axios from "axios";

function App() {
  // GET

  axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  // GET ID

  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  // POST

  axios
    .post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        userId: 10,
        id: 201,
        title: "nuevo post agregado",
        completed: false,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  //PUT

  const editTitle = {
    userId: 1,
    id: 1,
    title: "titulo editado",
    completed: false,
  };
  axios
    .put("https://jsonplaceholder.typicode.com/todos/1", editTitle)
    .then((editTitle) => {
      console.log(editTitle);
    })
    .catch((error) => {
      console.log(error);
    });

  //DELETE

  const deleteTodo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  };

  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1", deleteTodo)
    .then((deleteTodo) => {
      console.log(deleteTodo);
    })
    .catch((error) => {
      console.log(error);
    });

  return <div></div>;
}

export default App;
