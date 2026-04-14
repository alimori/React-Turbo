// apps/iticket/src/providers/env-provider.tsx
import { createContext, useContext } from "react"
import type { AppEnv } from "../types/env.ts"

const EnvContext = createContext<AppEnv | null>(null)

export function EnvProvider({
  children,
  env,
}: {
  children: React.ReactNode
  env: AppEnv
}) {
  return <EnvContext.Provider value={env}>{children}</EnvContext.Provider>
}

export function useEnv() {
  const ctx = useContext(EnvContext)
  if (!ctx) throw new Error("useEnv must be used within EnvProvider")
  return ctx
}
