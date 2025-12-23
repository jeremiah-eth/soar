"use client";

import { useEffect, useState, useCallback } from "react";
import { callReadOnlyFunction, cvToValue, standardPrincipalCV } from "@stacks/transactions";
import { StacksMainnet, StacksTestnet } from "@stacks/network";
import { CONTRACT_ADDRESS, CONTRACT_NAME } from "@/lib/constants";

// Helper to determine network - defaulting to Testnet for dev
const network = new StacksTestnet();

export function useVoteResults() {
    const [results, setResults] = useState({ yes: 0, no: 0 });
    const [isLoading, setIsLoading] = useState(true);

    const fetchResults = useCallback(async () => {
        try {
            const response = await callReadOnlyFunction({
                contractAddress: CONTRACT_ADDRESS,
                contractName: CONTRACT_NAME,
                functionName: "get-results",
                functionArgs: [],
                network,
                senderAddress: CONTRACT_ADDRESS,
            });

            const data = cvToValue(response);
            // Data is expected to be { yes: uint, no: uint }
            // Stacks.js returns uints as BigInts or numbers depending on version, verify output
            // Creating a safe parser
            const yes = Number(data?.value?.yes?.value || 0);
            const no = Number(data?.value?.no?.value || 0);

            setResults({ yes, no });
        } catch (e) {
            console.error("Failed to fetch results:", e);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Poll every 10 seconds
    useEffect(() => {
        fetchResults();
        const interval = setInterval(fetchResults, 10000);
        return () => clearInterval(interval);
    }, [fetchResults]);

    return { results, isLoading, refetch: fetchResults };
}
