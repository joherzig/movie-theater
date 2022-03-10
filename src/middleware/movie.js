import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);
const TOKEN = "Wookie2019";

const request = {
  get: (url) => superagent.get(url).set("Authorization", `Bearer ${TOKEN}`),
};

const movieApi = {
  getList: () => request.get("https://wookie.codesubmit.io/movies"),
};

export default movieApi;
