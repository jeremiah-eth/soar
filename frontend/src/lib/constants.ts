import { AppConfig, UserSession } from "@stacks/connect";

export const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export const appDetails = {
    name: "Soar Vote",
    icon: "https://soar-vote.vercel.app/logo.png", // Placeholder
};

export const CONTRACT_ADDRESS = "ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM"; // Devnet/Testnet deployer
export const CONTRACT_NAME = "voting";
