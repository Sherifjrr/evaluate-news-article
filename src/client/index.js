import handleSubmit from "./js/formHandler";
import check_URL from "./js/checkURL";
import "babel-polyfill";

import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/resets.scss";

Window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit();
  });
});

export { handleSubmit, check_URL };
