"use client";

import Link from "next/link";
import { useWallet } from "@/context/WalletContext";
import ConnectButton from "./ConnectButton";
import UserDropdown from "./UserDropdown";
import { Icons } from "@/components/ui/icons";

export default function Header() {
    const { isSignedIn } = useWallet();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                        <span className="bg-soar-blue text-white p-1 rounded-md">
                            <Icons.vote className="h-6 w-6" />
                        </span>
                        <span>Soar Vote</span>
                    </Link>
                </div>

                <nav className="flex items-center gap-4">
                    {isSignedIn ? <UserDropdown /> : <ConnectButton />}
                </nav>
            </div>
        </header>
    );
}
