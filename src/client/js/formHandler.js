import { check_URL } from "./checkURL";

const pushData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  const articleUrl = document.getElementById("article-url").value;
  if (check_URL(articleUrl)) {
    pushData("http://localhost:8081/add-url", { articleUrl }).then((data) => {
      console.log(data);
      document.getElementById("text").textContent =
        data.sentence_list[0].text || "";
      document.getElementById("agreement").textContent = data.agreement;
      document.getElementById("confidence").textContent = data.confidence;
      document.getElementById("score_tag").textContent = data.score_tag;
      document.getElementById("subjectivity").textContent = data.subjectivity;
      document.getElementById("irony").textContent = data.irony;
    });
  } else {
    alert("Enter a valid URL");
  }
};

export default handleSubmit;
