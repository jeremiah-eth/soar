"use client";

import { useEffect, useState } from "react";
import { NamesApi, Configuration } from "@stacks/blockchain-api-client";
import { useWallet } from "@/context/WalletContext";

const apiConfig = new Configuration({
    basePath: "https://api.testnet.hiro.so", // Switch to /api.hiro.so for mainnet later
});

const namesApi = new NamesApi(apiConfig);

export function useBns() {
    const { userData, isSignedIn } = useWallet();
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        if (!isSignedIn || !userData?.profile?.stxAddress?.testnet) {
            setName(null);
            return;
        }

        const fetchName = async () => {
            try {
                const address = userData.profile.stxAddress.testnet;
                const response = await namesApi.getNamesOwnedByAddress({
                    address,
                    blockchain: "stacks",
                });

                if (response.names && response.names.length > 0) {
                    setName(response.names[0]);
                }
            } catch (e) {
                console.error("Failed to fetch BNS name:", e);
            }
        };

        fetchName();
    }, [isSignedIn, userData]);

    return { name };
}
