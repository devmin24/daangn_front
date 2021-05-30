import React from "react";
import Post from "../components/Post";
import SelectButton from "../components/SelectButton";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configureStore";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  const together = post_list.slice(0, 101);

  React.useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(postActions.getPostDB());
  }, []);

  return (
    <React.Fragment>
      <div></div>
      <h1 style={{ textAlign: "center", fontSize: "38px", marginTop: "50px" }}>
        중고거래 인기매물
      </h1>

      <div
        style={{
          width: "890px",
          display: "flex",
          justifyContent: "flex-end",
          margin: "0px auto",
          marginBottom: "30px",
        }}
      ></div>

      <SelectButton></SelectButton>

      <div
        style={{
          width: "980px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "0px auto",
        }}
      >
        {together.map((p, idx) => {
          const daangnProductId = p.daangnProductId;
          return (
            <div
              style={{
                width: "calc(25% - 44px)",
                marginRight: "44px",
                marginBottom: "56px",
              }}
              onClick={() => {
                history.push(`/detail/${daangnProductId}`);
              }}
            >
              <Post key={p.daangnProductId} {...p} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PostList;
