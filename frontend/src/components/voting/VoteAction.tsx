"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface VoteActionProps {
    choice: boolean; // true = Yes, false = No
    isLoading?: boolean;
    onVote: () => void;
    disabled?: boolean;
}

export default function VoteAction({ choice, isLoading, onVote, disabled }: VoteActionProps) {
    const isYes = choice === true;

    return (
        <Button
            size="lg"
            onClick={onVote}
            disabled={disabled || isLoading}
            className={cn(
                "w-full h-16 text-lg font-bold transition-all transform active:scale-95 shadow-lg",
                isYes
                    ? "bg-vote-yes hover:bg-vote-yes/90 text-white shadow-vote-yes/20"
                    : "bg-vote-no hover:bg-vote-no/90 text-white shadow-vote-no/20",
                disabled && "opacity-50 cursor-not-allowed grayscale"
            )}
        >
            {isLoading ? (
                <Icons.spinner className="mr-2 h-5 w-5 animate-spin" />
            ) : (
                <Icons.vote className="mr-2 h-5 w-5" />
            )}
            Vote {isYes ? "YES" : "NO"}
        </Button>
    );
}
