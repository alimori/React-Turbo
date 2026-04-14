import shared from "../../packages/config/tailwind/tailwind.config";

export default {
  ...shared,
  content: [
    "./src/**/*.{ts,tsx}",
    ...shared.content
  ]
};

