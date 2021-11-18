import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { HomeContainer, ListCard, CryptoList } from "./style";
import { api } from "../../services";
import { ICryptos } from "../../interfaces";
import { formatMoney } from "../../util";
import btcbg from "../../img/btcbg.png";
import { Link } from "react-router-dom";

export default function Cryptos() {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    api
      .get(
        "coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
      )
      .then((response) => {
        setCryptos(response.data);
      });
  }, []);
  return (
    <>
      <NavBar />
      <HomeContainer>
        <img src={btcbg} className="background-logo" alt="background-logo" />
        <CryptoList>
          {cryptos?.map((crypt: ICryptos, index) => (
            <Link key={index} to={`info/${crypt.id}`}>
              <ListCard>
                <div className="symbol-name">
                  <img src={crypt.image} alt="" />
                  <h2>{crypt.name}</h2>
                </div>
                <div className="value">
                  <h3>{formatMoney(crypt.current_price)}2</h3>
                </div>
              </ListCard>
            </Link>
          ))}
        </CryptoList>
      </HomeContainer>
      <Footer />
    </>
  );
}
