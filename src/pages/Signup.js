import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [user_name, setUserName] = React.useState("");
  const signup = () => {
    if (id === "" || pwd === "" || user_name === "") {
      window.alert("아이디, 비밀번호가 공란입니다.");
      return;
    }
    console.log(id, pwd, user_name);
    dispatch(userActions.signupDB(id, pwd, user_name));
    console.log("test 로그인  완료");
  };
  return (
    <React.Fragment>
      <Div>
        <h1>🥕 회원가입을 해주세요.</h1>
        <P>아이디</P>
        <Input
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <P>닉네임</P>
        <Input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></Input>
        <P>비밀번호</P>
        <Input
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        ></Input>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button onClick={signup}>회원가입하기</Button>
          <Button
            onClick={() => {
              history.push("/login");
            }}
          >
            로그인 하러가기
          </Button>
        </div>
      </Div>
    </React.Fragment>
  );
};

export default Signup;

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
