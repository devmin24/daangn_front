import React from "react";

import styled from "styled-components";
import banner2 from "../shared/banner2.png";
import { history } from "../redux/configureStore";

const Banner2 = () => {
  return (
    <React.Fragment>
      {/* 배너 2 */}
      <div style={{ padding: "6rem 0" }}>
        <DIV>
          <Image></Image>

          <div style={{ flexDirection: "column", margin: "20px" }}>
            <H1>
              우리 동네
              <br />
              중고 직거래 마켓
            </H1>
            <P>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</P>
            <div style={{ marginTop: "3.2rem" }}>
              {/* 버튼 2개는 Link로 컴포넌트 만든 것 연결하기 */}
              <Button
                onClick={() => {
                  history.push("/list");
                }}
              >
                인기매물 보기
              </Button>
              <A href="https://www.daangn.com/trust">믿을 수 있는 중고거래</A>
            </div>
          </div>
        </DIV>
      </div>
    </React.Fragment>
  );
};

export default Banner2;

const DIV = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner2});
  background-size: 532px 684px;
  width: 532px;
  height: 684px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
  margin: 0px;
`;

const A = styled.a`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  margin: 0px 10px;
`;

const Button = styled.button`
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 15px 20px;
  display: inline-block;
  font-size: 18px;
  font-weight: 900;
  margin: 0px 10px;
`;
