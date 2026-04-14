import React from "react";

import { ArrowUpIcon, ArrowRightIcon, ArrowLeftIcon } from "lucide-react"
import { Spinner } from "@repo/ui/components/spinner";
// import { Button } from "@/components/button";
import { Button } from "@repo/ui/components/button";


export function ButtonsSet() {
    return (
        <div className="p-8 space-y-4">

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Default (Primary) Style: </div>

                <div className="flex items-start gap-2">
                    <Button size="xs" variant="default">
                        Extra Small
                    </Button>
                    <Button size="xs">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-xs" aria-label="Submit">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm">
                        Small
                    </Button>
                    <Button size="sm">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="default">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button>Default</Button>
                    <Button>
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button>
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button aria-label="Submit" variant="default" size="icon">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="lg">
                        Large
                    </Button>
                    <Button size="lg">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="default"><ArrowUpIcon />
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Secondary Style: </div>

                <div className="flex items-start gap-2">
                    <Button size="xs" variant="secondary">
                        Extra Small
                    </Button>
                    <Button size="xs" variant="secondary">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs" variant="secondary">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>

                    <Button size="icon-xs" aria-label="Submit" variant="secondary">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm" variant="secondary">
                        Small
                    </Button>
                    <Button size="sm" variant="secondary">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm" variant="secondary">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="secondary">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="secondary">Default</Button>
                    <Button variant="secondary">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button variant="secondary">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="secondary">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="secondary" size="lg">
                        Large
                    </Button>
                    <Button size="lg" variant="secondary">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg" variant="secondary">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="secondary"> <ArrowUpIcon />
                    </Button>
                </div>

            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Outline Style: </div>

                <div className="flex items-start gap-2">
                    <Button size="xs" variant="outline">
                        Extra Small
                    </Button>
                    <Button size="xs" variant="outline">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs" variant="outline">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>

                    <Button size="icon-xs" aria-label="Submit" variant="outline">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm" variant="outline">
                        Small
                    </Button>
                    <Button size="sm" variant="outline">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm" variant="outline">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="outline">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="outline">Default</Button>
                    <Button variant="outline">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button variant="outline">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="outline">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="outline" size="lg">
                        Large
                    </Button>
                    <Button size="lg" variant="outline">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg" variant="outline">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="outline"> <ArrowUpIcon />
                    </Button>
                </div>

            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Destructive Style: </div>

                <div className="flex items-start gap-2">
                    <Button size="xs" variant="destructive">
                        Extra Small
                    </Button>
                    <Button size="xs" variant="destructive">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs" variant="destructive">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>

                    <Button size="icon-xs" aria-label="Submit" variant="destructive">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm" variant="destructive">
                        Small
                    </Button>
                    <Button size="sm" variant="destructive">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm" variant="destructive">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="destructive">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="destructive">Default</Button>
                    <Button variant="destructive">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button variant="destructive">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="destructive">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="destructive" size="lg">
                        Large
                    </Button>
                    <Button size="lg" variant="destructive">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg" variant="destructive">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="destructive"> <ArrowUpIcon />
                    </Button>
                </div>

            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Ghost Style: </div>

                <div className="flex items-start gap-2">
                    <Button size="xs" variant="ghost">
                        Extra Small
                    </Button>
                    <Button size="xs" variant="ghost">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs" variant="ghost">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>

                    <Button size="icon-xs" aria-label="Submit" variant="ghost">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm" variant="ghost">
                        Small
                    </Button>
                    <Button size="sm" variant="ghost">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm" variant="ghost">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="ghost">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="ghost">Default</Button>
                    <Button variant="ghost">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button variant="ghost">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="ghost">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="ghost" size="lg">
                        Large
                    </Button>
                    <Button size="lg" variant="ghost">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg" variant="ghost">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="ghost"> <ArrowUpIcon />
                    </Button>
                </div>

            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Link Style : </div>
                <div className="flex items-start gap-2">
                    <Button size="xs" variant="link">
                        Extra Small
                    </Button>
                    <Button size="xs" variant="link">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="xs" variant="link">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-xs" aria-label="Submit" variant="link">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button size="sm" variant="link">
                        Small
                    </Button>
                    <Button size="sm" variant="link">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="sm" variant="link">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="link">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="link">Default</Button>
                    <Button variant="link">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button variant="link">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="link">
                        <ArrowUpIcon />
                    </Button>
                </div>
                <div className="flex items-start gap-2">
                    <Button variant="link" size="lg">
                        Large
                    </Button>
                    <Button size="lg" variant="link">
                        <ArrowLeftIcon data-icon="inline-start" /> Default
                    </Button>
                    <Button size="lg" variant="link">
                        Default
                        <ArrowRightIcon data-icon="inline-end" />
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="link"> <ArrowUpIcon />
                    </Button>
                </div>
            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Loading Style : </div>
                <div className="flex items-start gap-2">
                    <Button variant="outline" disabled>
                        <Spinner data-icon="inline-start" />
                        Downloading
                    </Button>
                    <Button variant="outline" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>
                    <Button variant="default" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>
                    <Button variant="secondary" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>
                    <Button variant="destructive" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>
                    <Button variant="ghost" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>
                    <Button variant="link" disabled>
                        Downloading
                        <Spinner data-icon="inline-start" />
                    </Button>

                </div>

            </div>

            <div className="flex items-center gap-8 sm:flex-row">
                <div className='ms-4'>Rounded Style : </div>
                <div className="flex items-start gap-2">
                    <Button className="rounded-full">Get Started</Button>
                    <Button className="rounded-full" variant="secondary" >Get Started</Button>
                    <Button className="rounded-full" variant="destructive" >Get Started</Button>
                    <Button className="rounded-full" variant="outline" >Get Started</Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                        <ArrowUpIcon />
                    </Button>
                </div>

            </div>

        </div>
    );
}
