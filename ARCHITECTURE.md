
# Turbo + React + Tailwind + Shad cn
### A mono  repo multi app modern structure.
## Folder Structure
```
apps/
   iticket/
       src/
       package.json

   post/
       src/
       package.json

packages/
  features/
    src
      auth/
        components/
        hooks/
        services/

      ticket/
         components/
         hooks/
         services/

    package.json

  shared/
    src
       utils/
       types/
       hooks/

    package.json

  ui/
    src
       components/
       hooks/    #ui hooks (useMediaQuery, etc.)
       lib/

    package.json

package.json
```

## Dependency Rules:

Use **dependency direction**:

```
apps → features → shared → ui
```

```
ui → (radix, tailwind, etc.)
```

- apps import features ✅
- features import ui + shared ✅
- ui imports nothing from features and shared ❌

NEVER:
```
features → features (randomly)
```

Separate:

- UI (design system)
- Features (business logic)
- Apps (composition)

## Tips
#### Inside features, organize like:
```
auth/
  components/
  hooks/
  services/
  index.ts   👈 export public API
```

##  Where should things go?

This is the **MOST IMPORTANT PART**

### 1- ui package → Design system only

Put here:

- Button
- Dropdown
- Input
- Dialog
- UI hooks (useMediaQuery, etc.)

 NO business logic

### 2- features → Business logic + UI composition

Put here:

- LoginForm
- TicketList
- Dashboard widgets
- API calls

### 3-  shared → Pure logic (no UI)

Put here:

- utils (formatDate)
- types
- reusable hooks (non-UI)