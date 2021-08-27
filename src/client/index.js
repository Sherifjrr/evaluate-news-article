import handleSubmit from "./js/formHandler";
import 'babel-polyfill'

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

Window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
  });
});

export { handleSubmit };
