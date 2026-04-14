
// tailwind.config.ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/post/src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/iticket/src/**/*.{js,ts,jsx,tsx,mdx}",
    // Add paths for any other apps or packages that use Tailwind
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // --- Colors ---
      colors: {
        // Core shadcn/ui colors, mapped to CSS variables
        // These should map to the DEFAULT shade of your scales or specific variables
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        // Semantic Colors - Mapped to specific CSS variables or DEFAULT shade of scales
        primary: {
          // Maps to --primary CSS variable, which we've set to blue HSL in theme.css
          // If you want .bg-primary to use --primary-500, you can map it like this:
          DEFAULT: "hsl(var(--primary))", // This uses the --primary variable directly
          foreground: "hsl(var(--primary-foreground))",
          // Or, if you prefer primary.DEFAULT to be the 500 shade from the scale:
          // DEFAULT: "hsl(var(--primary-500))",
          // foreground: "hsl(var(--primary-foreground))",

          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          200: "hsl(var(--primary-200))",
          300: "hsl(var(--primary-300))",
          400: "hsl(var(--primary-400))",
          500: "hsl(var(--primary-500))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
          900: "hsl(var(--primary-900))",
          950: "hsl(var(--primary-950))",
        },
        secondary: {
          // Maps to --secondary CSS variable, which is default gray.
          // If you want .bg-secondary to use --secondary-500 from the scale:
          DEFAULT: "hsl(var(--secondary-500))",
          foreground: "hsl(var(--secondary-foreground))",

          50: "hsl(var(--secondary-50))",
          100: "hsl(var(--secondary-100))",
          200: "hsl(var(--secondary-200))",
          300: "hsl(var(--secondary-300))",
          400: "hsl(var(--secondary-400))",
          500: "hsl(var(--secondary-500))",
          600: "hsl(var(--secondary-600))",
          700: "hsl(var(--secondary-700))",
          800: "hsl(var(--secondary-800))",
          900: "hsl(var(--secondary-900))",
          950: "hsl(var(--secondary-950))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: {
          // Use the specific success variable or the scale's default
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",

          //success scale
          50: "hsl(var(--success-50))",
          100: "hsl(var(--success-100))",
          200: "hsl(var(--success-200))",
          300: "hsl(var(--success-300))",
          400: "hsl(var(--success-400))",
          500: "hsl(var(--success-500))",
          600: "hsl(var(--success-600))",
          700: "hsl(var(--success-700))",
          800: "hsl(var(--success-800))",
          900: "hsl(var(--success-900))",
          950: "hsl(var(--success-950))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",

          50: "hsl(var(--warning-50))",
          100: "hsl(var(--warning-100))",
          200: "hsl(var(--warning-200))",
          300: "hsl(var(--warning-300))",
          400: "hsl(var(--warning-400))",
          500: "hsl(var(--warning-500))",
          600: "hsl(var(--warning-600))",
          700: "hsl(var(--warning-700))",
          800: "hsl(var(--warning-800))",
          900: "hsl(var(--warning-900))",
          950: "hsl(var(--warning-950))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--error-foreground))",

          50: "hsl(var(--error-50))",
          100: "hsl(var(--error-100))",
          200: "hsl(var(--error-200))",
          300: "hsl(var(--error-300))",
          400: "hsl(var(--error-400))",
          500: "hsl(var(--error-500))",
          600: "hsl(var(--error-600))",
          700: "hsl(var(--error-700))",
          800: "hsl(var(--error-800))",
          900: "hsl(var(--error-900))",
          950: "hsl(var(--error-950))",
        },

        neutral: {
          DEFAULT: "hsl(var(--neutral-500))",
          50: "hsl(var(--neutral-50))",
          100: "hsl(var(--neutral-100))",
          200: "hsl(var(--neutral-200))",
          300: "hsl(var(--neutral-300))",
          400: "hsl(var(--neutral-400))",
          500: "hsl(var(--neutral-500))",
          600: "hsl(var(--neutral-600))",
          700: "hsl(var(--neutral-700))",
          800: "hsl(var(--neutral-800))",
          900: "hsl(var(--neutral-900))",
          950: "hsl(var(--neutral-950))",
        },

        // --- Custom Semantic Colors Scales (50-950) ---
        // These map Tailwind's `bg-primary-100`, `text-secondary-700`, etc.
      },

      // --- Other Tailwind Theme Extensions ---
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)"
        // Add more spacing variables if you define them in theme.css
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)", // This is used by the button's xs/sm variants
        lg: "var(--radius-lg)", // This is used by the button's default/lg variants after correction
      },
      fontSize: {
        xs: 'var(--font-xs)',
        sm: 'var(--font-sm)',
        base: 'var(--font-base)',
        lg: 'var(--font-lg)',
        xl: 'var(--font-xl)',
        '2xl': 'var(--font-2xl)',
        '3xl': 'var(--font-3xl)',
        '4xl': 'var(--font-4xl)',
        '5xl': 'var(--font-5xl)',
        '6xl': 'var(--font-6xl)',
        '7xl': 'var(--font-7xl)',
        '8xl': 'var(--font-8xl)',
        '9xl': 'var(--font-9xl)',
      },
    },
  },
  // Ensure this plugin is present for animations
  plugins: [require("tailwindcss-animate")],
};
