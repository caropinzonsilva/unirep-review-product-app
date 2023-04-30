import { ConnectButton, useConnectWallet } from "@shopify/connect-wallet";

export const OneClickGiftNft = () => {
  const { wallet } = useConnectWallet({
    onConnect: (wallet) => {
      evaluateGate(wallet);
    },
  });

  return (
    <>
      <div id="one-click-gifted-nft" style={{ display: "none" }}>
        {Boolean(!wallet) ? (
          <>
            <BadgeAndTitle
              title={
                <>
                  You have unlocked the <b>Product Reviewer Badge!</b>
                </>
              }
            />
            <p style={{ marginBottom: 0 }}>
              Connect your wallet and claim your token to receive exclusive
              discounts
            </p>
            <ConnectButton />
          </>
        ) : (
          <BadgeAndTitle
            title={
              <>
                <b>Product Reviewer Badge</b> claimed!
              </>
            }
          />
        )}
      </div>
      <div id="one-click-gifted-nft-info">
        <BadgeAndTitle
          title={
            <>
              Review at least 1 product to win your{" "}
              <b>Product Reviewer Badge!</b>
            </>
          }
        />
        <p style={{ margin: 0 }}>
          All reviews are anonymous{" "}
          <a href="https://medium.com/privacy-scaling-explorations/unirep-a-private-and-non-repudiable-reputation-system-7fb5c6478549">
            (learn more)
          </a>
        </p>
      </div>
    </>
  );
};

const BadgeAndTitle = ({ title }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="https://th.bing.com/th/id/OIG.S0TjDU3c8mmGFEBSiQI8?pid=ImgGn"
      alt="Product Reviewer Badge!"
      style={{
        width: "74px",
        height: "74px",
        marginRight: "10px",
      }}
    />
    <h3>{title}</h3>
  </div>
);
