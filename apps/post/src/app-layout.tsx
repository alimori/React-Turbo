import { Header } from "@repo/features/header"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col bg-background text-foreground">

      {/* Header */}
      <Header title={'Post'} />

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Scrollable main */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}