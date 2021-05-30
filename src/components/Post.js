import React from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";

const Post = (props) => {
  return (
    <React.Fragment>
      <Image src={props.imgs}></Image>
      <Title>{props.title}</Title>
      <Price>{props.price}</Price>
      <Region>{props.region}</Region>
      <div style={{ color: "#868e96", fontSize: "13px" }}>
        <span>{props.like}</span> ∙ <span>{props.chat}</span>
      </div>
    </React.Fragment>
  );
};

Post.defaultProps = {
  daangnProductId: "217117164",
  title: "실내 자전거",
  imgs: "https://pbs.twimg.com/profile_images/449975524350103554/zBK8lr4U.jpeg",
  price: "10,000원",
  region: "경기도 용인시 수지구 죽전동",
  like: "관심 3",
  chat: "채팅 5",
};

export default Post;

const DIV = styled.div`
  width: calc(25% - 44px);
  margin-right: 44px;
  margin-bottom: 56px;
`;

const Image = styled.img`
  width: 201px;
  height: 201px;
  background-image: url("https://pbs.twimg.com/profile_images/449975524350103554/zBK8lr4U.jpeg");
  background-size: 201px 201px;
  border-radius: 12px;
  border: 0px solid transparent;
`;

const Title = styled.h2`
  font-size: 16px;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
  font-weight: normal;
  margin: 5px auto;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 4px;
`;

const Region = styled.div`
  font-size: 13px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  line-height: 1.5;
`;
