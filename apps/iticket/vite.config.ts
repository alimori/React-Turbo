// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
//        "@": path.resolve(__dirname, "../../packages/ui/src"),
//     }
//   },
//   css: {
//     postcss: path.resolve(__dirname, '../../postcss.config.js'),
//   },
// })

// apps/iticket/vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// --- Helper function to resolve paths relative to the monorepo root ---
const resolveMonorepoRoot = (p: string) => path.resolve(__dirname, '../../', p);

// --- Main Vite Config Function ---
export default ({ mode }: { mode: any }) => {
  // The 'envDir' should point to your monorepo's root 'env' folder.
  const envDir = resolveMonorepoRoot('env');
  const env = loadEnv(mode, envDir, ''); // Load all env variables

  // Resolve paths for aliases
  const aliases = {
    // From your new monorepo config
    "@repo/features": resolveMonorepoRoot("packages/features/src"),
    "@repo/shared": resolveMonorepoRoot("packages/shared/src"),
    "@repo/ui": resolveMonorepoRoot("packages/ui/src"),
    // "@": resolveMonorepoRoot("packages/ui/src"), // Assuming '@' also maps to ui/src
  };

  // --- Dedupe logic from old config ---


  return defineConfig({
    plugins: [
      react()
    ],


    resolve: {
      alias: aliases
    },

    css: {
      postcss: resolveMonorepoRoot('postcss.config.js'),
    },

    // --- Define global constants ---
    // Make NODE_ENV available in the app, ensure it's consistent
    define: {
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV || process.env.NODE_ENV || 'development'),
    },
  });
};

