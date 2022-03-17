import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { InfoBar } from "./InfoPannel";

const LogoWithContact = styled.div`
  width: 85%;
  height: 45px;
  margin: auto;
  margin-top: 1%;
`;

const MyLogoText = styled.p`
  font-size: x-large;
  float: left;
  letter-spacing: 0.7rem;
  font-weight: bold;
`;

const ContactBox = styled.div`
  float: right;
  margin-left: 2%;
`;

const ContactText = styled.p`
  text-align: right;
  font-size: smaller;
  font-weight: lighter;
  letter-spacing: 0.04rem;
`;

const Hr = styled.hr`
  width: 85%;
  margin: auto;
`;
export function NavBarComponet() {
  return (
    <>
      <LogoWithContact>
        <MyLogoText>LUNAR</MyLogoText>
        <ContactBox>
          <ContactText>
            {" "}
            <span>
              {" "}
              <EmailIcon sx={{ fontSize: "10px" }}></EmailIcon>{" "}
            </span>
            Email
          </ContactText>
          <ContactText>abcd@gmail.com</ContactText>
        </ContactBox>

        <ContactBox>
          <ContactText>
            {" "}
            <span>
              {" "}
              <LocalPhoneIcon sx={{ fontSize: "10px" }}></LocalPhoneIcon>{" "}
            </span>
            Phone
          </ContactText>
          <ContactText>12345678910</ContactText>
        </ContactBox>
      </LogoWithContact>
      <Hr></Hr>
      <InfoBar></InfoBar>
      <Hr></Hr>
    </>
  );
}
