"use client";

import { useWallet } from "@/context/WalletContext";
import { showConnect } from "@stacks/connect";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { appDetails } from "@/lib/constants";

export default function ConnectButton() {
    const { userSession, setUserData } = useWallet();

    const handleConnect = () => {
        showConnect({
            appDetails,
            onFinish: () => {
                window.location.reload(); // Simple reload to refresh state
            },
            userSession,
        });
    };

    return (
        <Button onClick={handleConnect} className="gap-2 bg-soar-blue hover:bg-soar-blue/90 text-white">
            <Icons.wallet className="h-4 w-4" />
            Connect Wallet
        </Button>
    );
}
