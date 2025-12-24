import { AppConfig, UserSession } from "@stacks/connect";

export const appConfig = new AppConfig(["store_write", "publish_data"]);
export const userSession = new UserSession({ appConfig });

export const appDetails = {
    name: "Soar Vote",
    icon: "https://soar-vote.vercel.app/logo.png", // Placeholder
};

export const CONTRACT_ADDRESS = "SP95KYNT2QWA2EXJS2WZT666ZVXDA4QV4AZZ2T5G"; // Mainnet deployer
export const CONTRACT_NAME = "voting";
