"use client";

import { useWallet } from "@/context/WalletContext";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Note: Ensure @radix-ui/react-dropdown-menu is installed or install it next
export default function UserDropdown() {
    const { userData, userSession } = useWallet();

    const handleDisconnect = () => {
        userSession.signUserOut();
        window.location.reload();
    };

    // Shorten address helper
    const address = userData?.profile?.stxAddress?.testnet || ""; // Defaulting to testnet for now
    const shortAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "";

    return (
        <div className="flex items-center gap-2">
            <Button variant="outline" className="gap-2">
                <Icons.wallet className="h-4 w-4 text-soar-blue" />
                <span className="font-mono">{shortAddress}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={handleDisconnect} title="Disconnect">
                <Icons.logout className="h-4 w-4" />
            </Button>
        </div>
    );
}
