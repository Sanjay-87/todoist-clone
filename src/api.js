import axios from "axios";

const token = "854c6cd13fed37da1a7b2209c715659e6dadec49";

export default axios.create({
  baseURL: "https://api.todoist.com/rest/v1/",
  headers: { Authorization: "Bearer " + token, "Content-Type": "application/json" },
});
