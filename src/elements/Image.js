import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://dnvefa72aowie.cloudfront.net/origin/article/202104/bce02f7c25d41ea2f758c3322de4596b9768b7fc8822ed6ab1a184fd232c50ce.webp?q=82&s=300x300&t=crop",
  size: 36,
};


 const AspectOutter = styled.div`
     width: 200px;
     min-width: 100px;
     
 `;

const AspectInner = styled.div`
    position: relative;
    padding-top: 100%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    border-radius: 10px;
  `;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

export default Image;