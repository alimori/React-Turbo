import './index.css'
import { ButtonsSet } from "@repo/features/buttons-set"
import { Dashboard } from "@repo/features/dashboard"

import { Button } from "@repo/ui/components/button.tsx"

import { AppLayout } from './app-layout'
import { useState } from 'react'
import { env } from './config/env'


const features = ["dashboard", "buttons set"]

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

        {feature === "dashboard" && <Dashboard title={'POST' + " " + env.PROJECT + " " + env.ENV} env="post" showCol={false} />}
        {feature === "buttons set" && <ButtonsSet />}



      </AppLayout>

    </>
  )
}

export default App
