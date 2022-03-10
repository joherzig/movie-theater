import produce from "immer";
import _ from "lodash";
import movieApi from "../../middleware/movie";

const MODULE = "MOVIES";

const GET_LIST = `${MODULE}/GET_LIST`;

export const fetchMovieList = () => ({
  type: GET_LIST,
  payload: movieApi.getList(),
});

const initState = {
  list: [],
  byId: {},
  byGenre: {},
};

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case `${GET_LIST}_FULFILLED`:
        draft.list = payload;
        draft.byId = _.keyBy(payload, "id");
        draft.byGenre = payload.reduce((byGenre, movie) => {
          movie.genres.forEach((el) => {
            if (!byGenre[el]?.length) {
              byGenre[el] = [movie];
              return null;
            }
            byGenre[el].push(movie);
          });
          return byGenre;
        }, {});
        break;
    }
  });

export const movieSelectors = {
  list: (state) => state.movies.list,
  movie: (state, id) => state.movies.byId[id],
  byGenre: (state) => state.movies.byGenre,
};

export default reducer;
