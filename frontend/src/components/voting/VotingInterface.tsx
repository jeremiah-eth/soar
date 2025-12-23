"use client";

import { useVoteResults } from "@/hooks/stacks/use-contract-read";
import { useUserVote } from "@/hooks/stacks/use-user-vote";
import QuestionHero from "./QuestionHero";
import ResultsBar from "./ResultsBar";
import VoteAction from "./VoteAction";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useWallet } from "@/context/WalletContext";
import ConnectButton from "@/components/layout/ConnectButton";

export default function VotingInterface() {
    const { results, isLoading: resultsLoading } = useVoteResults();
    const { hasVoted, isLoading: userVoteLoading } = useUserVote();
    const { isSignedIn } = useWallet();

    const handleVote = (choice: boolean) => {
        // Transaction logic will be added in next commits
        console.log("Voting:", choice);
    };

    if (resultsLoading) {
        return <Skeleton className="w-full max-w-2xl mx-auto h-[400px]" />;
    }

    return (
        <div className="space-y-8 w-full max-w-2xl mx-auto">
            <QuestionHero />

            <Card>
                <CardContent className="pt-6 space-y-6">
                    <ResultsBar yes={results.yes} no={results.no} />

                    <div className="pt-4 border-t">
                        {!isSignedIn ? (
                            <div className="text-center space-y-4 py-4">
                                <p className="text-muted-foreground">Connect your wallet to vote</p>
                                <div className="flex justify-center">
                                    <ConnectButton />
                                </div>
                            </div>
                        ) : hasVoted ? (
                            <div className="text-center py-6 bg-muted/30 rounded-lg border border-dashed">
                                <p className="text-xl font-semibold mb-2">
                                    You voted {hasVoted.choice ? <span className="text-vote-yes">YES</span> : <span className="text-vote-no">NO</span>}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Feel strongly differently? You can change your vote below.
                                </p>
                            </div>
                        ) : null}

                        {/* Voting Actions - Always visible if signed in, or if signed out (disabled) */}
                        {isSignedIn && (
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <VoteAction
                                    choice={true}
                                    onVote={() => handleVote(true)}
                                    isLoading={false}
                                />
                                <VoteAction
                                    choice={false}
                                    onVote={() => handleVote(false)}
                                    isLoading={false}
                                />
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
