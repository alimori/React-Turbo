// shared/types/env.ts
export interface AppEnv {
  ENV: string
  PROJECT: string
  services: {
    auth: string
  }
}
