import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);
const TOKEN = "Wookie2019";

const request = {
  get: (url) =>
    superagent
      .get(url)
      .set("Authorization", `Bearer ${TOKEN}`)
      .then(({ body }) => body)
      .catch((err) => {
        console.error(err);
        return Promise.reject(e);
      }),
};

const movieApi = {
  getList: (search) => {
    const searchQuery = search ? `?q=${search}` : "";
    return request.get(`https://wookie.codesubmit.io/movies${searchQuery}`).then((res) => {
      return res?.movies || [];
    });
  },
};

export default movieApi;
