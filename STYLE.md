 # Styling Rules:
 
## First: Big picture (very important)

You now have 3 styling layers:

- **Tailwind utilities** → layout, spacing, quick UI
- **CSS variables (theme)** → colors, tokens (shadcn style)
- **SCSS** → component-level styling / complex styles

👉 Best practice = use each for what it’s good at


## Where to use what?

| Layer           | Tool           |
| --------------- | -------------- |
| UI components   | Tailwind       |
| Feature styling | `.module.scss` |
| Theme           | CSS variables  |
| Layout          | Tailwind       |

### Real-world rule

 *“Use Tailwind until it becomes messy → then move to SCSS”*

 For example more than 10 tailwind classes applied to one cless in scss.


## ✅ When to use what
### 1- 🟦 Tailwind (primary)

Use for:

- layout (flex, grid)
- spacing (p-4, gap-2)
- simple styling
```
<div className="flex items-center gap-2 p-4" />
```

### 2- 🟩 .module.scss (recommended)

Use for:

- component-specific styles
- complex selectors
- reusable styled blocks

**Default choice for components**

### 3- 🟥 .scss (global)

Use for:

- global styles
- theme variables
- overrides

**NOT for components**

### Golden rule

- Use .module.scss for components
- Use .scss only for global/theme

### 4- 🎨 Theme system (VERY IMPORTANT)

Since you use shadcn:

**ALWAYS use CSS variables + HSL**

### Global theme (global.scss)
```
:root {
  --background: 0 0% 100%;
  --foreground: 222 84% 5%;

  --primary: 222 47% 11%;
  --primary-foreground: 210 40% 98%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 210 40% 98%;
}

.dark {
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;

  --primary: 210 40% 98%;
  --primary-foreground: 222 47% 11%;
}
```

### 5- ⚠️ IMPORTANT (Tailwind + SCSS)

To use @apply, your SCSS must go through Tailwind.

In Vite, this works automatically if PostCSS is configured.

### ✅ Example: Ticket List (REAL example)
**📁 Structure**
```
ticket-list/
  ticket-list.tsx
  ticket-list.module.scss
```

**🟦 ticket-list.module.scss**
```
.container {
  @apply p-4 space-y-4;
}


.card {
  @apply rounded-lg border bg-background text-foreground p-4 transition;

  &:hover {
    @apply shadow-md;
  }
}

.title {
  @apply text-lg font-semibold;
}

.meta {
  @apply text-sm text-muted-foreground;
}

.status {
  @apply px-2 py-1 rounded-md text-xs;

  &.open {
    @apply bg-green-500/10 text-green-600;
  }

  &.closed {
    @apply bg-red-500/10 text-red-600;
  }
}
```

**🟩 ticket-list.tsx**
```
import styles from "./ticket-list.module.scss"

export function TicketList() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>Ticket #123</div>
        <div className={styles.meta}>Created 2 days ago</div>

        <div className={`${styles.status} ${styles.open}`}>
          Open
        </div>
      </div>
    </div>
  )
}
```
### 6- 🌙 Dark mode support

You DON’T need extra SCSS for dark mode if you use tokens:
```
.card {
  @apply bg-background text-foreground;
}
```

✔ Automatically switches via .dark

❌ Avoid this
```
.card {
  background: white;

  .dark & {
    background: black;
  }
}
```

👉 This breaks shadcn philosophy

### 7- 🎯 Best practice for colors in SCSS
✅ GOOD
```
@apply bg-background text-foreground;
```
❌ BAD
```
background: #fff;
```

### 8- 🧠 Combining Tailwind + SCSS (best pattern)

Use Tailwind for layout:
```
<div className="flex">
  <TicketList />
</div>
```

Use SCSS for component:
```
.card {
  @apply p-4 rounded-lg;
}
```
