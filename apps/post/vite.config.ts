// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@repo/ui": path.resolve(__dirname, "../../packages/ui/src"),
//       "@": path.resolve(__dirname, "../../packages/ui/src"),
//     }
//   },
//   css: {
//     postcss: path.resolve(__dirname, '../../postcss.config.js'),
//   },
// })



// apps/post/vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// --- Helper function to resolve paths relative to the monorepo root ---
const resolveMonorepoRoot = (p: string) => path.resolve(__dirname, '../../', p);

export default ({ mode }: { mode: any }) => {
  // The 'envDir' should point to your monorepo's root 'env' folder.
  const envDir = resolveMonorepoRoot('env');
  const env = loadEnv(mode, envDir, ''); // Load all env variables

  // Resolve paths for aliases
  const aliases = {
    "@repo/features": resolveMonorepoRoot("packages/features/src"),
    "@repo/shared": resolveMonorepoRoot("packages/shared/src"),
    "@repo/ui": resolveMonorepoRoot("packages/ui/src"),
    //"@": resolveMonorepoRoot("packages/ui/src"), // Assuming '@' also maps to ui/src
  };


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



// apps/iticket/vite.config.ts (and similar for post)
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';


// const envDir = path.resolve(__dirname, '../../env'); // Adjust path to reach the root 'env' directory

// export default ({ mode }) => {
//   // loadEnv will automatically load variables from .env, .env.[mode], and .env.[mode].local
//   // By specifying the 'envDir', we tell Vite to look in our monorepo's env folder.
//   const env = loadEnv(mode, envDir, ''); // The third argument '' means load all env variables

//   return defineConfig({
//     plugins: [react()],
//     // Vite configuration options here
//     // Example: setting a base path if your app is not at the root of the domain
//     // base: env.VITE_BASE_URL || '/',

//     // You can also explicitly define env variables if needed,
//     // but loadEnv should pick them up automatically from the .env files.
//     define: {
//       // Example: making env variables globally available in your app
//       'import.meta.env': JSON.stringify({
//         ...env,
//         // Add any other variables you want to expose globally
//       }),
//     },
//   });
// };


