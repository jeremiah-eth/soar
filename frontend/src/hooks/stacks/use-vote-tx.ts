"use client";

import { useConnect } from "@stacks/connect-react";
import { StacksTestnet } from "@stacks/network";
import { boolCV } from "@stacks/transactions";
import { CONTRACT_ADDRESS, CONTRACT_NAME } from "@/lib/constants";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import confetti from "canvas-confetti";

const network = new StacksTestnet();

export function useVoteTx() {
    const { doContractCall } = useConnect();
    const { toast } = useToast();
    const [isVoting, setIsVoting] = useState(false);

    const castVote = async (choice: boolean) => {
        setIsVoting(true);
        try {
            await doContractCall({
                network,
                contractAddress: CONTRACT_ADDRESS,
                contractName: CONTRACT_NAME,
                functionName: "vote",
                functionArgs: [boolCV(choice)],
                postConditions: [],
                onFinish: (data) => {
                    confetti({
                        particleCount: 100,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                    toast({
                        title: "Vote broadcasted!",
                        description: `Transaction ID: ${data.txId.slice(0, 6)}...${data.txId.slice(-4)}`,
                    });
                    setIsVoting(false);
                },
                onCancel: () => {
                    setIsVoting(false);
                },
            });
        } catch (e) {
            console.error("Voting failed", e);
            toast({
                title: "Voting failed",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
            setIsVoting(false);
        }
    };

    return { castVote, isVoting };
}
