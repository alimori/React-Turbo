
import style from "./dashboard.module.scss"
// import {
//     Card,
//     CardAction,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/card"

import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@repo/ui/components/card"

export function Dashboard({ title, showCol }: { title: string, showCol: boolean }) {

    return (
        <>
            <div className="fw-bold w-full text-center text-2xl font-bold rounded-md">
                WELCOME TO {title}
            </div>

            <div className="font-semibold">Primary</div>
            <div className="flex my-2">
                <div className="bg-primary-50 p-7">50</div>
                <div className="bg-primary-100 p-7">100</div>
                <div className="bg-primary-200 p-7">200</div>
                <div className="bg-primary-300 p-7">300</div>
                <div className="bg-primary-400 p-7">400</div>
                <div className="bg-primary-500 p-7">500</div>
                <div className="bg-primary-600 p-7">600</div>
                <div className="bg-primary-700 p-7 text-background">700</div>
                <div className="bg-primary-800 p-7 text-background">800</div>
                <div className="bg-primary-900 p-7 text-background">900</div>
                <div className="bg-primary-950 p-7 text-background">950</div>
            </div>
            <div className="font-semibold">Secondary</div>
            <div className="flex my-2">
                <div className="bg-secondary-50 p-7">50</div>
                <div className="bg-secondary-100 p-7">100</div>
                <div className="bg-secondary-200 p-7">200</div>
                <div className="bg-secondary-300 p-7">300</div>
                <div className="bg-secondary-400 p-7">400</div>
                <div className="bg-secondary-500 p-7">500</div>
                <div className="bg-secondary-600 p-7">600</div>
                <div className="bg-secondary-700 p-7 text-background">700</div>
                <div className="bg-secondary-800 p-7 text-background">800</div>
                <div className="bg-secondary-900 p-7 text-background">900</div>
                <div className="bg-secondary-950 p-7 text-background">950</div>
            </div>
            <div className="font-semibold">Neutral</div>
            <div className="flex my-2">
                <div className="bg-neutral-50 p-7">50</div>
                <div className="bg-neutral-100 p-7">100</div>
                <div className="bg-neutral-200 p-7">200</div>
                <div className="bg-neutral-300 p-7">300</div>
                <div className="bg-neutral-400 p-7">400</div>
                <div className="bg-neutral-500 p-7">500</div>
                <div className="bg-neutral-600 p-7">600</div>
                <div className="bg-neutral-700 p-7 text-background">700</div>
                <div className="bg-neutral-800 p-7 text-background">800</div>
                <div className="bg-neutral-900 p-7 text-background">900</div>
                <div className="bg-neutral-950 p-7 text-background">950</div>
            </div>
            <div className="font-semibold">Success</div>
            <div className="flex my-2">
                <div className="bg-success-50 p-7">50</div>
                <div className="bg-success-100 p-7">100</div>
                <div className="bg-success-200 p-7">200</div>
                <div className="bg-success-300 p-7">300</div>
                <div className="bg-success-400 p-7">400</div>
                <div className="bg-success-500 p-7">500</div>
                <div className="bg-success-600 p-7">600</div>
                <div className="bg-success-700 p-7 text-background">700</div>
                <div className="bg-success-800 p-7 text-background">800</div>
                <div className="bg-success-900 p-7 text-background">900</div>
                <div className="bg-success-950 p-7 text-background">950</div>
            </div>
            <div className="font-semibold">Warning</div>
            <div className="flex my-2">
                <div className="bg-warning-50 p-7">50</div>
                <div className="bg-warning-100 p-7">100</div>
                <div className="bg-warning-200 p-7">200</div>
                <div className="bg-warning-300 p-7">300</div>
                <div className="bg-warning-400 p-7">400</div>
                <div className="bg-warning-500 p-7">500</div>
                <div className="bg-warning-600 p-7">600</div>
                <div className="bg-warning-700 p-7 text-background">700</div>
                <div className="bg-warning-800 p-7 text-background">800</div>
                <div className="bg-warning-900 p-7 text-background">900</div>
                <div className="bg-warning-950 p-7 text-background">950</div>
            </div>
            <div className="font-semibold">Error</div>
            <div className="flex my-2">
                <div className="bg-error-50 p-7">50</div>
                <div className="bg-error-100 p-7">100</div>
                <div className="bg-error-200 p-7">200</div>
                <div className="bg-error-300 p-7">300</div>
                <div className="bg-error-400 p-7">400</div>
                <div className="bg-error-500 p-7">500</div>
                <div className="bg-error-600 p-7">600</div>
                <div className="bg-error-700 p-7 text-background">700</div>
                <div className="bg-error-800 p-7 text-background">800</div>
                <div className="bg-error-900 p-7 text-background">900</div>
                <div className="bg-error-950 p-7 text-background">950</div>
            </div>

            <div className="font-semibold">Radius</div>
            <div className="flex my-2">
                <div className="bg-neutral-300 p-7 rounded-sm mx-4">Small Radius</div>
                <div className="bg-neutral-300 p-7 rounded-md mx-4">Default Radius</div>
                <div className="bg-neutral-300 p-7 rounded-lg mx-4">Large Radius</div>
                <div className="bg-neutral-300 p-7 rounded-full mx-4">Full Radius</div>
            </div>

            {showCol && (
                <>
                    <div className="font-semibold">Semantic</div>
                    <div className="flex my-2 gap-4">
                        <div className="bg-success-300 p-7 rounded-sm">Success</div>
                        <div className="bg-error-300 p-7 rounded-md">Error</div>
                        <div className="bg-warning-300 p-7 rounded-lg">Warning</div>
                        <div className={style.tag}>Custom SCSS</div>
                    </div>
                </>
            )
            }

            <div className="font-semibold">Cards</div>
            <div className="flex gap-8 my-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                        <CardAction>Card Action</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>



        </>
    )
}