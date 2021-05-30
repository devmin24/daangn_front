import React from "react";
import styled from "styled-components";

import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const daangnProductId = props.match.params.daangnProductId;
  console.log(daangnProductId);

  const post_list = useSelector((state) => state.post.list);
  const post = useSelector((state) => state.post.post);
  console.log(post);

  const together = post_list.slice(0, 8);
  console.log(together);

  React.useEffect(() => {
    dispatch(postActions.getPostDB());
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(postActions.getOnePostDB(daangnProductId));
  }, [daangnProductId]);

  return (
    <React.Fragment>
      <Div>
        <Image src={post.imgs}></Image>

        <Profile>
          <Icon src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png"></Icon>
          <div>
            <Nickname>{post.nickname}</Nickname>
            <div style={{ fontSize: "14px" }}>{post.region}</div>
          </div>
        </Profile>

        <div>
          <Title>{post.title}</Title>
          <Category>{post.category}</Category>
          <Price>{post.price}</Price>
          <Contents>{post.contents}</Contents>
          <div
            style={{
              color: "gray",
              borderBottom: "1px solid #e9ecef",
              paddingBottom: "30px",
            }}
          >
            {post.chat} ∙ {post.like} ∙ {post.viewNum}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "980px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <p style={{ fontSize: "25px", fontWeight: "900" }}>
            당근마켓 인기중고
          </p>
          <div
            onClick={() => {
              history.push("/list");
            }}
            style={{ color: "orange", fontSize: "15px", fontWeight: "800" }}
          >
            더 구경하기
          </div>
        </div>
        <Poststyle>
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
        </Poststyle>
      </Div>
    </React.Fragment>
  );
};

PostDetail.defaultProps = {
  daangnProductId: "217117164",
  imgs:
    "https://dnvefa72aowie.cloudfront.net/origin/article/202104/bce02f7c25d41ea2f758c3322de4596b9768b7fc8822ed6ab1a184fd232c50ce.webp?q=82&s=300x300&t=crop",
  nickname: "오창희",
  region: "경기도 용인시 수지구 죽전동",
  title: "실내 자전거",
  category: "가구/인테리어 ",
  price: "10,000원",
  contents:
    "구매한지 2개 월 남짓 되었고, 잠깐 사용해서 깨끗합니다. 총 3개인데, 개별 거래도 가능하고 3개 모두 사시는 분께는 할인해 드리겠습니다.",
  like: "관심 3",
  chat: "채팅 5",
  viewNum: "조회 10",
};

export default PostDetail;

const Div = styled.div`
  margin-top: 100px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto;
`;

const Image = styled.img`
  width: 500px;
  height: 500px;
  background-image: url("https://dnvefa72aowie.cloudfront.net/origin/article/202104/bce02f7c25d41ea2f758c3322de4596b9768b7fc8822ed6ab1a184fd232c50ce.webp?q=82&s=300x300&t=crop");
  background-size: 680px 680px;
  border-radius: 12px;
  border: 0px solid transparent;
`;

const Nickname = styled.div`
  width: 980px;
  margin: 0px auto;
  font-size: 17px;
  font-weight: 900;
  display: flex;
  align-items: flex-start;
  margin-top: 5px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  display: flex;
  justify-content: flex-start;
  margin-right: 5px;
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 980px;
  margin: 0px auto;
  margin-top: 20px;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 15px;
`;

const Title = styled.div`
  width: 980px;
  margin: 0px auto;
  font-size: 20px;
  font-weight: 900;
  display: flex;
  align-items: flex-start;
  margin-top: 30px;
`;

const Category = styled.div`
  color: gray;
  margin: 0px auto;
  margin-top: 7px;
  margin-bottom: 7px;
  width: 980px;
`;

const Price = styled.div`
  margin: 0px auto;
  margin-top: 7px;
  width: 980px;
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Contents = styled.div`
  margin: 0px auto;
  margin-top: 7px;
  margin-bottom: 20px;
  width: 980px;
  font-size: 18px;
  line-height: 1.6;
  letter-spacing: -0.6px;
  font-weight: 500;
`;

const Poststyle = styled.div`
  width: 980px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px auto;
`;
