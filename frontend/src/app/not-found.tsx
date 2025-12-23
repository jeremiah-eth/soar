"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-4rem)] items-center justify-center p-4">
            <Card className="w-full max-w-md text-center border-2 border-dashed">
                <CardContent className="pt-10 pb-10 space-y-6">
                    <div className="flex justify-center">
                        <div className="bg-muted p-4 rounded-full">
                            <Icons.close className="h-10 w-10 text-muted-foreground" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">404 Not Found</h1>
                        <p className="text-muted-foreground">
                            The page you are looking for does not exist or has been moved.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
