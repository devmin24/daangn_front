import React from "react";

import styled from "styled-components";
import banner4 from "../shared/banner4.png";

const Banner4 = () => {
  return (
    <React.Fragment>
      <div style={{ padding: "6rem 0", display: "block" }}>
        <Div>
          <Image></Image>
          <div>
            <H1>
              내 근처에서 찾는 <br /> 우리 동네 가게
            </H1>
            <P>
              우리 동네 가게를 찾고 있나요? <br /> 동네 주민이 남긴 진짜 후기를
              함께 확인해보세요!
            </P>
            <div>
              <A href="https://town.daangn.com/">당근마켓 동네가게 찾기</A>
            </div>
          </div>
        </Div>
      </div>
    </React.Fragment>
  );
};

export default Banner4;

const Div = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner4});
  background-size: 526px 735px;
  width: 526px;
  height: 735px;
  display: inline-block;
`;

const H1 = styled.div`
  font-size: 2.5rem;
  line-height: 1.35;
  margin-bottom: 2.4rem;
  font-weight: 800;
`;

const P = styled.p`
  font-size: 17px !important;
  line-height: 1.5;
  letter-spacing: -0.3px;
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
  line-height: 1.47;
  letter-spacing: -0.3px;
  font-weight: 900;
  -webkit-tap-highlight-color: rgba(73, 80, 87, 0.05);
`;
