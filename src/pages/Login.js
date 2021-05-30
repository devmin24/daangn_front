import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  const changeId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const changePw = (e) => {
    console.log(e.target.value);
    setPw(e.target.value);
  };

  const login = () => {
    if (id === "" || pw === "") {
      window.alert("아이디 또는 비밀번호가 비어있습니다.");
      return;
    }
    console.log(id, pw);
    dispatch(userActions.loginDB(id, pw));
    console.log("success");
  };

  return (
    <React.Fragment>
      <Div>
        <h1>🥕 로그인을 해주세요.</h1>
        <P>아이디</P>
        <Input onChange={changeId}></Input>
        <P>비밀번호</P>
        <Input onChange={changePw} type="password"></Input>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button onClick={login}>로그인하기</Button>
          <Button
            onClick={() => {
              history.push("/signup");
            }}
          >
            회원가입 하러가기
          </Button>
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Login;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0px auto;
  margin-top: 100px;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  padding: 70px 50px 70px 50px;
`;

const P = styled.p`
  font-size: 20px;
  color: #fda970;
  margin: 0px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 0px 0px 10px 0px;
`;

const Button = styled.button`
  width: 500px;
  height: 45px;
  margin: 10px 5px 10px 5px;
  background-color: #ffd0b0;
  border: 0px solid #ffd0b0;
  border-radius: 5px;
`;
