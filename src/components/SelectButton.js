import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { actionCreators as postActions } from "../redux/modules/post";

const SelectButton = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  React.useEffect(() => {
    dispatch(postActions.getPostDB(text));
  }, [text]);

  React.useEffect(() => {
    dispatch(postActions.getPostDB(text));
  }, []);

  return (
    <React.Fragment>
      <Div>
        <Button
          onClick={() => {
            setText("강남구");
          }}
        >
          강남구
        </Button>
        <Button
          onClick={() => {
            setText("강북구");
          }}
        >
          강북구
        </Button>
        <Button
          onClick={() => {
            setText("노원구");
          }}
        >
          노원구
        </Button>
        <Button
          onClick={() => {
            setText("동대문구");
          }}
        >
          동대문구
        </Button>
        <Button
          onClick={() => {
            setText("동작구");
          }}
        >
          동작구
        </Button>
        <Button
          onClick={() => {
            setText("마포구");
          }}
        >
          마포구
        </Button>
        <Button
          onClick={() => {
            setText("송파구");
          }}
        >
          송파구
        </Button>
        <Button
          onClick={() => {
            setText("용산구");
          }}
          style={{ marginRight: "44px" }}
        >
          용산구
        </Button>
      </Div>
    </React.Fragment>
  );
};

export default SelectButton;

const Div = styled.div`
  width: 980px;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const Button = styled.button`
  width: 200px;
  height: 45px;
  border: 0px solid;
  background-color: #f3f3f3;
`;
