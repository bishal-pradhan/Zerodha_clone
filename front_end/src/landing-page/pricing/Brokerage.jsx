function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>{" "}
          </a>
          <ul
            style={{ textAlign: "left", lineHeight: "2.8" }}
            className="text-muted"
          >
            <li>
              Call & Trade and and RMS auto-sequareoff:Additional ckarges of ₹50
              +GST per order.
            </li>
            <li>Digital contract notes will be sentvia e-mail.</li>
            <li>
              The basic principle: profit by buying at a lower price and selling
              at a higher price (or shorting if prices are falling).
            </li>
            <li>
              Analyzing the value of an asset based on news, financials,
              earnings, or macroeconomic data.
            </li>
            <li>
              Using charts, price patterns, and indicators (like RSI, MACD,
              Moving Averages) to predict market moves.
            </li>
            <li>
              Greed and fear ruin trades. Stick to your plan and don't chase the
              market.
            </li>
            <li>High volume on price moves can confirm strength of a trend.</li>
          </ul>
        </div>
        <div className="col-4">
             <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5 mt-4 ">Changes in pricing</h3>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
