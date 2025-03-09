const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", sendingForm);
function sendingForm(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  if (login == "" || password == "") {
    window.alert("All form fields must be filled in");
  } else {
    console.log(`${form.elements.email.name} : ${login.trim()}`);
    console.log(`${form.elements.password.name} : ${password.trim()}`);
  }
  form.reset();
}
