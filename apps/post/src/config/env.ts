import type { AppEnv } from "@repo/ui/types/env.ts"

export const env: AppEnv = {
    ENV: import.meta.env.VITE_ENV,
    PROJECT: import.meta.env.VITE_PROJECT_NAME,

    services: {
        auth: import.meta.env.VITE_SERVICE_AUTH,
    },
}
