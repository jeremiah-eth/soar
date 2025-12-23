"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { UserData } from "@stacks/connect";
import { userSession } from "@/lib/constants";

interface WalletContextType {
    userData: UserData | null;
    setUserData: (data: UserData | null) => void;
    userSession: typeof userSession;
    isSignedIn: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
            setIsSignedIn(true);
        }
    }, []);

    return (
        <WalletContext.Provider
            value={{ userData, setUserData, userSession, isSignedIn }}
        >
            {children}
        </WalletContext.Provider>
    );
}

export function useWallet() {
    const context = useContext(WalletContext);
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider");
    }
    return context;
}
