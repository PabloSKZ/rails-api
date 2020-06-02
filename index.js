const email = document.getElementById("email").value;
const you = document.getElementById("you").value;
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const data = {
    user: {
      email: email,
      password: you,
    },
  };
  console.log(data);
  fetch("http://localhost:3000/users", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3000/users",
      Authorization:
        "Bearer 0367175a27e94220279793caf5e210ae19e7597ef97ec9502ca11315d3e162c70d461b8680a23d2431a1761c62624dbfc39cfd0db729bc2058ff11a653e2867a",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  }).then((response) => console.log(response));
});
