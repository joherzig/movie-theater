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
};

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case `${GET_LIST}_FULFILLED`:
        draft.list = payload;
        draft.byId = _.keyBy(payload, "id");
        break;
    }
  });

export const movieSelectors = {
  list: (state) => state.movies.list,
  movie: (id, state) => state.movies.byId[id],
};

export default reducer;
