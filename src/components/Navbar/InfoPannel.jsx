import styled from "@emotion/styled";
import { device } from "../../Devices";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const Bar = styled.div`
  width: 85%;
  height: 50px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2%;
`;

const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  font-size: small;
  @media ${device.mobileS} {
    font-size: 1.7vw;
  }
  @media ${device.mobileM} {
    font-size: 1.7vw;
  }
  @media ${device.mobileL} {
    font-size: 1.7vw;
  }
  @media ${device.tablet} {
    font-size: small;
  }
`;

const Tabs = styled.p`
  line-height: 50px;
  margin-right: 5%;
  font-weight: lighter;
  cursor: pointer;
`;
const SocialCont = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: small;
`;
const SocialTabls = styled.p`
  line-height: 50px;
  margin-left: 5%;
  font-weight: lighter;
  cursor: pointer;
`;

const Pathresolver = (where, fn) => {
  return fn(where);
};

export function InfoBar() {
  const fly = useNavigate();
  return (
    <>
      <Bar>
        <Cont>
          <Tabs
            onClick={() => {
              Pathresolver("/", fly);
            }}
          >
            Home
          </Tabs>
          <Tabs
            onClick={() => {
              Pathresolver("/signs", fly);
            }}
          >
            <mark>signs</mark>
          </Tabs>
          <Tabs>Blog</Tabs>
          <Tabs>Contact</Tabs>
          <Tabs>About</Tabs>
        </Cont>
        <SocialCont>
          <SocialTabls>
            <AcUnitIcon sx={{ fontSize: "20px", color: "green" }}></AcUnitIcon>
          </SocialTabls>
          <SocialTabls>
            <TwitterIcon
              sx={{ fontSize: "20px", color: "skyblue" }}
            ></TwitterIcon>
          </SocialTabls>
          <SocialTabls>
            <InstagramIcon
              sx={{ fontSize: "20px", color: "purple" }}
            ></InstagramIcon>
          </SocialTabls>
        </SocialCont>
      </Bar>
    </>
  );
}
