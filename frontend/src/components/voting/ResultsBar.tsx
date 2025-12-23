"use client";

import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ResultsBarProps {
    yes: number;
    no: number;
    isLoading?: boolean;
}

export default function ResultsBar({ yes, no, isLoading = false }: ResultsBarProps) {
    if (isLoading) {
        return <Skeleton className="w-full h-8 rounded-full" />;
    }

    const total = yes + no;
    const yesPercent = total === 0 ? 50 : Math.round((yes / total) * 100);
    const noPercent = total === 0 ? 50 : 100 - yesPercent;

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm font-medium px-1">
                <span className="text-vote-yes">YES ({yes})</span>
                <span className="text-vote-no">NO ({no})</span>
            </div>

            <div className="relative w-full h-8 bg-muted rounded-full overflow-hidden flex shadow-inner">
                {/* Yes Bar */}
                <div
                    className="h-full bg-vote-yes transition-all duration-1000 ease-out flex items-center justify-start pl-3 text-white text-xs font-bold"
                    style={{ width: `${yesPercent}%` }}
                >
                    {yesPercent}%
                </div>

                {/* No Bar */}
                <div
                    className="h-full bg-vote-no transition-all duration-1000 ease-out flex items-center justify-end pr-3 text-white text-xs font-bold"
                    style={{ width: `${noPercent}%` }}
                >
                    {noPercent}%
                </div>
            </div>
        </div>
    );
}
