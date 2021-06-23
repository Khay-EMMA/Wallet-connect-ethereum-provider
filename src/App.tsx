import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WCEthereumProvider from "./connect";

function App() {
  const TEST_SESSION_CHAIN_ID = 3;

  const TEST_SESSION_RPC_HOST =
    "https://rinkeby.infura.io/v3/e9c4665d91a343e295308d5995ff5a72";

  const TEST_PROVIDER_OPTS = {
    chainId: TEST_SESSION_CHAIN_ID,
    qrcode: true,
    bridge: "https://staging.walletconnect.org",
    rpc: {
      [TEST_SESSION_CHAIN_ID]: TEST_SESSION_RPC_HOST,
    },
  };
  const onClickConnect = async () => {
    const provider = new WCEthereumProvider(TEST_PROVIDER_OPTS);

    const providerAccounts = await provider.enable();
    console.log(providerAccounts, "provider accounts");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={onClickConnect}>Connect Wallet</button>
      </header>
    </div>
  );
}

export default App;
