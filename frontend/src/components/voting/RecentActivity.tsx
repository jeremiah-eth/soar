"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

export default function RecentActivity() {
    // Mock data for now, ideally fetched from an indexer or API
    const activities = [
        { address: "SP2J...9V8B", action: "Voted YES", time: "2 mins ago" },
        { address: "SP1X...3K2P", action: "Voted NO", time: "5 mins ago" },
        { address: "SP3M...8L9Q", action: "Voted YES", time: "12 mins ago" },
    ];

    return (
        <Card className="w-full">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                    <Icons.spinner className="h-4 w-4 animate-spin text-primary" />
                    Live Activity
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity, i) => (
                        <div key={i} className="flex items-center justify-between text-sm border-b pb-2 last:border-0 last:pb-0">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-soar-blue animate-pulse" />
                                <span className="font-mono text-muted-foreground">{activity.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={activity.action.includes("YES") ? "text-vote-yes font-bold" : "text-vote-no font-bold"}>
                                    {activity.action}
                                </span>
                                <span className="text-xs text-muted-foreground">{activity.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
