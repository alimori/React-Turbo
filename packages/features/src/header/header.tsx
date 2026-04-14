
import { ThemeToggle } from "@repo/ui/components/theme-toggle"
import { UserDropdownMenu } from "@repo/ui/components/user-dropdown-menu.tsx"
import { MenuDropdownMenu } from "@repo/ui/components/menu-dropdown-menu"
import { MenubarRadio } from "@repo/ui/components/demo-menubar"

import { useEnv } from "@repo/shared/providers/env-provider"

export function Header({ title }: { title: string }) {

  const env = useEnv()

  return (
    <header className="h-14 border-b flex items-center justify-between px-4 shrink-0">
      <MenuDropdownMenu />
      <MenubarRadio />

      <div className="font-semibold">{title}</div>
      <div>
        {env.PROJECT} ({env.ENV})
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        {/* <Button variant="outline" size="sm">
          Logout
        </Button> */}
        <UserDropdownMenu />
      </div>
    </header>
  )
}


