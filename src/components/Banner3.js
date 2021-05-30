import React from "react";

import styled from "styled-components";
import banner3 from "../shared/banner3.png";

const Banner3 = () => {
  return (
    <React.Fragment>
      <div
        style={{
          padding: "6rem 0",
          backgroundColor: "#E6F3E6",
          display: "block",
        }}
      >
        <Div>
          <Image></Image>
          <div>
            <H1>
              이웃과 함께 하는 <br /> 동네 생활
            </H1>
            <P>우리 동네의 다양한 이야기를 이웃과 함께 나누어요.</P>
            <Ul>
              <li style={{ marginRight: "4.6rem", margin: "1.6rem" }}>
                <div
                  className="icon1"
                  style={{
                    backgroundImage: `url(
                      "https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg"
                    )`,
                    width: "56px",
                    height: "56px",
                    backgroundSize: "56px 56px",
                  }}
                ></div>
                <div
                  className="boldtext1"
                  style={{
                    marginBottom: "0.8rem",
                    marginTop: "1.6rem",
                    fontSize: "1.4rem !important",
                    lineHeight: "1.5",
                    fontWeight: "bold",
                  }}
                >
                  우리동네질문
                </div>
                <div
                  className="text1"
                  style={{ lineHeight: "1.5", fontSize: "14px" }}
                >
                  궁금한 게 있을 땐 <br />
                  이웃에게 물어보세요.
                </div>
              </li>
              <li style={{ marginRight: "4.6rem", margin: "1.6rem" }}>
                <div
                  className="icon2"
                  style={{
                    backgroundImage: `url("https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg")`,
                    width: "56px",
                    height: "56px",
                    backgroundSize: "56px 56px",
                  }}
                ></div>
                <div
                  className="boldtext2"
                  style={{
                    marginBottom: "0.8rem",
                    marginTop: "1.6rem",
                    fontSize: "1.4rem !important",
                    lineHeight: "1.5",
                    fontWeight: "bold",
                  }}
                >
                  동네분실센터
                </div>
                <div
                  className="text2"
                  style={{ lineHeight: "1.5", fontSize: "14px" }}
                >
                  무언가를 잃어버렸을 때, <br />
                  함께 찾을 수 있어요.
                </div>
              </li>
              <li style={{ marginRight: "0", margin: "1.6rem" }}>
                <div
                  className="icon3"
                  style={{
                    backgroundImage: `url("https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg")`,
                    width: "56px",
                    height: "56px",
                    backgroundSize: "56px 56px",
                  }}
                ></div>
                <div
                  className="boldtext3"
                  style={{
                    marginBottom: "0.8rem",
                    marginTop: "1.6rem",
                    fontSize: "1.4rem !important",
                    lineHeight: "1.5",
                    fontWeight: "bold",
                  }}
                >
                  동네모임
                </div>
                <div
                  className="text3"
                  style={{ lineHeight: "1.5", fontSize: "14px" }}
                >
                  관심사가 비슷한 이웃과 <br />
                  온오프라인으로 만나요.
                </div>
              </li>
            </Ul>
          </div>
        </Div>
      </div>
    </React.Fragment>
  );
};

export default Banner3;

const Div = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 1024px;
  margin: 0 auto;
  justify-content: space-between;
`;

const Image = styled.div`
  background-image: url(${banner3});
  background-size: 546px 740px;
  width: 546px;
  height: 740px;
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

const Ul = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0px;
`;
