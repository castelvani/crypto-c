import React from "react";
import { FooterContainer, Content, FooterTitle, FooterBody } from "./style";
import Lottie from "react-lottie";
import coin from "../../animations/26801-coinchu.json";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Content>
        <FooterTitle>
          <Lottie
            style={{ margin: 0 }}
            options={{ animationData: coin }}
            height={45}
            width={45}
            isStopped={false}
            isPaused={false}
          />
          <h1>Crypto C</h1>
        </FooterTitle>
        <FooterBody>
          <div>
            <h4>Links</h4>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div>
            <h4>Teste</h4>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div>
            <h4>Links</h4>
            <ul>
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
        </FooterBody>
      </Content>
      <i>&copy; 2020 - {currentYear}</i>
    </FooterContainer>
  );
};

export default Footer;
