"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-4">
            <Card className="w-full max-w-md text-center border-destructive/50">
                <CardContent className="pt-10 pb-10 space-y-6">
                    <div className="flex justify-center">
                        <div className="bg-destructive/10 p-4 rounded-full">
                            <Icons.spinner className="h-10 w-10 text-destructive" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight">Something went wrong!</h1>
                        <p className="text-muted-foreground">
                            We encountered an unexpected error.
                        </p>
                        {error.message && (
                            <p className="text-xs text-destructive p-2 bg-muted rounded font-mono">
                                {error.message}
                            </p>
                        )}
                    </div>
                    <Button onClick={() => reset()} variant="default">
                        Try again
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
