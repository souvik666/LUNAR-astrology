import styled from "styled-components";
import { device } from "../../Devices";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Cont = styled.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "a b";

  @media ${device.mobileS} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "b"
      "a";
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "b"
      "a";
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-areas:
      "b"
      "a";
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContChild = styled.div`
  width: 100%;
  grid-area: "a";
`;

const Img = styled.img`
  width: 90%;

  -webkit-filter: grayscale(100%);
  filter: grayscale(90%);
`;

const TextBox = styled.div`
  height: 70%;
  width: 100%;
  margin-top: 15%;
  text-align: left;
`;

const SmallText = styled.small`
  font-weight: lighter;
`;
const HeadLin = styled.p`
  font-size: xx-large;
`;

const InfoText = styled.p`
  font-weight: lighter;
  font-size: small;
  width: 70%;
`;

const TagLine = styled.small`
  font-weight: lighter;
  text-decoration: underline;
  cursor: pointer;
`;

const ImgField = styled.div`
  width: 100%;
  text-align: right;
  grid-area: "b";
  @media ${device.mobileS} {
    text-align: center;
  }
  @media ${device.mobileM} {
    text-align: center;
  }
  @media ${device.mobileL} {
    text-align: center;
  }
  @media ${device.tablet} {
    text-align: right;
  }
`;

export function Body(props) {
  const { heading, signs, descriptions, pic } = props;
  const imgRef = useRef();
  useEffect(() => {
    gsap.from(imgRef.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.5,
    });

    return () => {};
  }, []);

  return (
    <>
      <Cont>
        <ContChild>
          <TextBox>
            <SmallText>{!heading ? "About We" : heading}</SmallText>
            <br />
            <br />
            <HeadLin>
              <mark>{!signs ? "LUNAR" : signs}</mark>
              {!signs ? " IS" : ""}
            </HeadLin>
            <HeadLin>{!signs ? "WAY OF LIFE" : "Today's Horoscope "}</HeadLin>
            <br />
            <InfoText>
              {descriptions
                ? descriptions
                : `  Astrology may not give definite answers, but providing meaningful
              explanations of ambiguous or confusing situations can increase an
              individual's sense of control over them, according to a 1998
              study. It can also provide reassurance about the future, bringing
              people great comfort and reducing their feelings of distress.`}
            </InfoText>
            <br />
            <TagLine>Read More</TagLine>
          </TextBox>
        </ContChild>
        <ImgField>
          {/*  earth.png*/}
          <Img
            style={pic ? { width: "65%" } : { width: "90%" }}
            ref={imgRef}
            src={
              pic
                ? pic
                : "https://us.123rf.com/450wm/croisy/croisy1812/croisy181200008/116796953-triple-lunar-goddess-hecate-ancient-greek-mythology-hand-drawn-black-and-white-isolated-vector-illus.jpg?ver=6"
            }
          ></Img>
        </ImgField>
      </Cont>
    </>
  );
}
