import styled from "@emotion/styled";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { device } from "../../Devices";
import { SignsData } from "../../signs";

const Container = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1%;
  margin-top: 1%;
  margin-bottom: 5%;
  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

function Zodiaacs(props) {
  const fly = useNavigate();
  function HandelRoutes(whr) {
    return fly("/signs/" + whr);
  }

  const { src, keys, sign } = props;
  const Child = styled.img`
    width: 70%;
  `;
  const Cont = styled.div`
    width: 100%;

    padding-bottom: 5%;
    text-align: center;
    cursor: pointer;
  `;
  const P = styled.p`
    color: black;
    font-weight: bolder;
    margin-top: 3%;
  `;

  const signeref = useRef();
  useEffect(() => {
    gsap.from(signeref.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.5,
    });
    return () => {};
  }, []);

  let textfacney = sign.split("");
  textfacney[0] = <mark>{textfacney[0]}</mark>;

  return (
    <>
      <Cont
        ref={signeref}
        key={keys}
        onClick={(e) => {
          HandelRoutes(sign);
        }}
      >
        <Child src={src}></Child>

        <P>{textfacney}</P>
      </Cont>
    </>
  );
}

export function SignBody() {
  return (
    <>
      <Container>
        {SignsData.map((el, idx) => {
          return (
            <>
              <Zodiaacs keys={idx + 8} src={el.link} sign={el.name} />
            </>
          );
        })}
      </Container>
    </>
  );
}
