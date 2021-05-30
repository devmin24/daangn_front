import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import axios from "axios";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const GET_POST = "GET_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list })); //리스트가져오기
const addPost = createAction(ADD_POST, (post) => ({ post }));
const getPost = createAction(GET_POST, (post) => ({ post }));

const initialState = {
  list: [],
  post: [],
};

const initialPost = {
  daangnProductId: "0",
  title: "실내 자전거",
  img:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202104/bce02f7c25d41ea2f758c3322de4596b9768b7fc8822ed6ab1a184fd232c50ce.webp?q=82&s=300x300&t=crop",
  price: "10,000원",
  region: "경기도 용인시 수지구 죽전동",
  like: "관심:3",
  chat: "채팅:5",
};

const getPostDB = (text = "") => {
  return function (dispatch, getState, { history }) {
    let post_list = [];
    if (text === "") {
      axios({
        method: "get",
        url: "http://54.180.112.53:8080/api/hot_articles",
      }).then((docs) => {
        // docs=api를 가져온 값
        // console.log(docs.data);
        const post_list = docs.data;
        // console.log(post_list);

        dispatch(setPost(post_list));
      });
    } else {
      axios({
        method: "get",
        url: `http://54.180.112.53:8080/api/region/${text}`,
      }).then((docs) => {
        // docs=api를 가져온 값
        // console.log(docs.data);
        const post_list = docs.data;
        // console.log(post_list);
        dispatch(setPost(post_list));
      });
    }
  };
};

const getOnePostDB = (daangnProductId) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "get",
      url: `http://54.180.112.53:8080/api/hot_articles/${daangnProductId}`,
    }).then((docs) => {
      const onePost = docs.data;
      dispatch(getPost(onePost));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list; //콘솔 찍어보기, 스테이트의 복제본
      }),
    // [ADD_POST]: (state, action) => produce(state, (draft) => {}),
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.post = action.payload.post;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostDB,
  getOnePostDB,
};

export { actionCreators };
