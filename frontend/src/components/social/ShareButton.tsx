"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

export default function ShareButton() {
    const handleShare = () => {
        const text = encodeURIComponent("I just voted on the 'Soar' proposal! Join me and cast your vote on Stacks. #SoarVote #Stacks");
        const url = encodeURIComponent("https://soar-vote.vercel.app"); // Placeholder URL
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
    };

    return (
        <Button variant="outline" className="gap-2 w-full" onClick={handleShare}>
            <Icons.share className="h-4 w-4" />
            Share on X
        </Button>
    );
}
