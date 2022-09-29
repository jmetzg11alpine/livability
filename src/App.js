import { useState } from 'react'
import Selector from './components/Selector'
import GraphContainer from './components/chart/GraphContainer'

const App = () => {
  const [city, setCity] = useState(null)

  return (
    <div>
      <Selector setCity={setCity} />
      <GraphContainer city={city} />
    </div>
  )
}
export default App
