import handleSubmit from "./js/formHandler";
import { check_URL } from "./js/checkURL";
import "babel-polyfill";

import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/resets.scss";

const button = document.getElementById("btn-submit");
button.addEventListener("click", () => {
  handleSubmit();
});

export { handleSubmit, check_URL };
