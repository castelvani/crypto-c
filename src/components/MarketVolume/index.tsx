import React, { FormEvent, useState } from "react";
import { ICryptos } from "../../interfaces";
import { MarketContainer } from "./style";

type StateValues = {
  crypto: ICryptos | any;
};

export default function MarketVolume({ crypto }: StateValues) {
  const [resultPercentVol, setResultPercentVol] = useState(0);
  const [resultVol, setResultVol] = useState(0);
  const [resultPercentPrice, setResultPercentPrice] = useState(0);
  const [resultPrice, setResultPrice] = useState(0);

  const CalculateMarketVol = (event: FormEvent<HTMLInputElement>) => {
    setResultVol(+event.currentTarget.value * crypto.circulating_supply);
    setResultPercentVol(
      ((+event.currentTarget.value * crypto.circulating_supply) /
        crypto.market_cap) *
        100 -
        100
    );
  };

  const CalculateMarketPrice = (event: FormEvent<HTMLInputElement>) => {
    setResultPrice(+event.currentTarget.value / crypto.circulating_supply);
    setResultPercentPrice(
      ((+event.currentTarget.value / crypto.circulating_supply) *
        crypto.current_price) /
        100
    );
  };

  return (
    <MarketContainer>
      <div className="market-volume">
        <input
          placeholder="Expected price"
          type="number"
          onChange={CalculateMarketVol}
        />
        <h2>Result</h2>
        <h3>Growth needed: {resultPercentVol.toLocaleString()}%</h3>
        <h3>Market volume needed: {resultVol.toLocaleString()}</h3>
      </div>
      <div className="price">
        <input
          placeholder="Expected volume"
          type="number"
          onChange={CalculateMarketPrice}
        />
        <h2>Result</h2>
        <h3>Growth needed: {resultPercentPrice.toLocaleString()}%</h3>
        <h3>Market volume needed: {resultPrice.toLocaleString()}</h3>
      </div>
    </MarketContainer>
  );
}
