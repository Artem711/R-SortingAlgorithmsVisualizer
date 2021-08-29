// PLUGINS IMPORTS //
import React from 'react'

// COMPONENTS IMPORTS //
import Navbar from 'Shared/Layout/Navbar'
import { memoComparison } from 'Shared/Helpers/Functions'

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const App: React.FC<PropsType> = () => {
  return (
    <>
      <Navbar />
    </>
  )
}

export default React.memo(App, memoComparison)
