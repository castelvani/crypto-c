import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import MarketVolume from "../../components/MarketVolume";
import {
  InfoContainer,
  InfoTitle,
  InfoBody,
  InfoFooter,
  Content,
} from "./style";
import { useRouteMatch } from "react-router";
import { api } from "../../services";
import { ICryptos, ICryptoID, ICryptoDetail } from "../../interfaces";
import parse from "html-react-parser";
import { formatMoney } from "../../util";
import { FiBook, FiAperture } from "react-icons/fi";
import { FaAdjust } from "react-icons/fa";
const Info: React.FC = () => {
  const { params } = useRouteMatch<ICryptoID>();
  const [crypto, setCrypto] = useState<ICryptos>();
  const [cryptoDetails, setCryptoDetails] = useState<ICryptoDetail>();
  const [calc, setCalc] = useState("");
  useEffect(() => {
    api
      .get(
        `coins/markets?vs_currency=usd&ids=${params.id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`
      )
      .then((response) => {
        setCrypto(response.data[0]);
      });
    api
      .get(
        `coins/${params.id}?tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
      )
      .then((response) => {
        setCryptoDetails(response.data);
      });
    console.log(crypto);
  }, []);

  const switchCalc = (param: string) => {
    switch (param) {
      case "1":
        return <MarketVolume crypto={crypto} />;
        break;
      default:
        break;
    }
  };

  return (
    <>
      <NavBar />
      <Content>
        <InfoContainer>
          <InfoTitle>
            <div className="symbol-title">
              <img src={crypto?.image} alt="crypto-image" />
              <h2>{crypto?.name}</h2>
            </div>
            <div>
              <h3>{formatMoney(crypto?.current_price || 0)}</h3>
            </div>
          </InfoTitle>
          <InfoBody>
            <div className="options">
              <div className="data-info" onClick={() => setCalc("1")}>
                <FiBook size={40} />
                <p>Market volume</p>
              </div>
              <div className="data-info" onClick={() => setCalc("2")}>
                <FaAdjust size={40} />
                <p>teste</p>
              </div>
              <div className="data-info">
                <FiAperture size={40} />
                <p>teste</p>
              </div>
              <div className="data-info">
                <FiAperture size={40} />
                <p>teste</p>
              </div>
              <div className="data-info">
                <FiAperture size={40} />
                <p>teste</p>
              </div>
              <div className="data-info">
                <FiAperture size={40} />
                <p>teste</p>
              </div>
            </div>
            {switchCalc(calc)}
            <h2>About</h2>
            <div className="about">
              <p>{parse(cryptoDetails?.description.en || "")}</p>
            </div>
          </InfoBody>
          <InfoFooter></InfoFooter>
        </InfoContainer>
      </Content>
      <Footer />
    </>
  );
};

export default Info;
