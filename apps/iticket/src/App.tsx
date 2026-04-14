import './index.css'
import { ButtonsSet } from "@repo/features/buttons-set"
import { Dashboard } from "@repo/features/dashboard"
import { InvoiceTable } from "@repo/features/invoice-table"

import { Button } from "@repo/ui/components/button.tsx"
import { AppLayout } from './app-layout'
import { useState } from 'react'
import { env } from "./config/env"

const features = ["dashboard", "buttons set", "invoice table"]

function App() {

  const [feature, setFeature] = useState("dashboard")

  function handleClick(item: string) {
    setFeature(item)
  }

  return (
    <>
      <AppLayout>

        {features.map((item: string) =>
          <Button className="mx-2" variant="outline" onClick={() => handleClick(item)}>{item}</Button>
        )}

        {feature === "dashboard" && <Dashboard title={'ITICKET' + " " + env.PROJECT + " " + env.ENV} showCol={true} />}
        {feature === "buttons set" && <ButtonsSet />}
        {feature === "invoice table" && <InvoiceTable />}


      </AppLayout>
    </>
  )
}

export default App
