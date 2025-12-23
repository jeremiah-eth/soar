"use client";

import { useEffect, useState } from "react";
import { fetchCallReadOnlyFunction, cvToValue, standardPrincipalCV } from "@stacks/transactions";
import { StacksTestnet } from "@stacks/network";
import { CONTRACT_ADDRESS, CONTRACT_NAME } from "@/lib/constants";
import { useWallet } from "@/context/WalletContext";

const network = new StacksTestnet();

export function useUserVote() {
    const { userData, isSignedIn } = useWallet();
    const [hasVoted, setHasVoted] = useState<{ choice: boolean; timestamp: number } | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isSignedIn || !userData?.profile?.stxAddress?.testnet) {
            setHasVoted(null);
            return;
        }

        const checkVote = async () => {
            setIsLoading(true);
            try {
                const address = userData.profile.stxAddress.testnet;
                const response = await fetchCallReadOnlyFunction({
                    contractAddress: CONTRACT_ADDRESS,
                    contractName: CONTRACT_NAME,
                    functionName: "has-voted",
                    functionArgs: [standardPrincipalCV(address)],
                    network,
                    senderAddress: address,
                });

                // Response is (some {choice: bool, timestamp: uint}) or none
                const data = cvToValue(response);

                if (data && data.value) {
                    setHasVoted({
                        choice: data.value.choice.value, // true/false
                        timestamp: Number(data.value.timestamp.value)
                    });
                } else {
                    setHasVoted(null);
                }

            } catch (e) {
                console.error("Failed to check user vote:", e);
            } finally {
                setIsLoading(false);
            }
        };

        checkVote();
    }, [isSignedIn, userData]);

    return { hasVoted, isLoading };
}
