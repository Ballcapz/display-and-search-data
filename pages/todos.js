import { useState } from "react";

const debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    }, wait);
    if (immediate && !timeout) func.apply(context, args);
  };
};

const wordFilter = (query, todo) => {
  const regex = new RegExp(query, "gi");
  return todo.title.match(regex);
};

function Test({ todos }) {
  const [query, setQuery] = useState("");

  const items = todos
    .filter((todo) => {
      if (query == null || query == "") {
        return todo;
      } else if (wordFilter(query, todo)) {
        return todo;
      }
    })
    .map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });

  return (
    <>
      <input
        type="text"
        onChange={(e) => debounce(setQuery(e.target.value), 200)}
      />
      <ul>{items}</ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos = await res.json();
  debugger;
  return {
    props: {
      todos,
    },
  };
}

export default Test;
