import axios from "axios";

const token = "eb0f1a8fbf3eff7c4bb0d62b17c63669c400becd";

export default axios.create({
    baseURL: "https://api.todoist.com/rest/v1/",
    headers: { Authorization: "Bearer " + token },
});
