export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  // token:
  //   "BQDLA3evSRrMjNWZqrIEL6SN2DKR3lZzCSvBKhtlZSO0kzXgHbMW4LRjKLNBckCByUid9ykKwZNasQfTFIo-ZNRZHiqvEGwdHdv3h7Ggg2cKfW-xzfqiwKytpSTyYisdA1zRLWdxVvO8GU8BsbKHlKMEo0SUDzLzMRodZvDrWOABppwKMMbe3V1jNrYRKY7LPtLtr8fwLgeMXCsh",
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
