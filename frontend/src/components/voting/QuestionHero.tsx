"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Need to create Badge or use simple div
import { Icons } from "@/components/ui/icons";

export default function QuestionHero() {
    return (
        <Card className="w-full max-w-2xl mx-auto border-2 shadow-xl">
            <CardHeader className="text-center space-y-4 pb-2">
                <div className="flex justify-center">
                    <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider flex items-center gap-1">
                        <Icons.vote className="w-3 h-3" />
                        Proposal #001
                    </span>
                </div>
                <CardTitle className="text-3xl sm:text-4xl font-extrabold leading-tight">
                    Should we launch the Soar token on Stacks mainnet?
                </CardTitle>
                <CardDescription className="text-lg">
                    Voting is open to all community members. One vote per address.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
                <div className="text-sm text-muted-foreground">
                    Ends in <span className="font-semibold text-foreground">2 days 14 hours</span>
                </div>
            </CardContent>
        </Card>
    );
}
