import GraphContainer from './components/chart/GraphContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Nav from './components/Nav'
import DataFlow from './components/DataFlow'
import NextSteps from './components/NextSteps'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route
            path='/drivers_of_livability'
            element={<GraphContainer />}
          ></Route>
          <Route path='/data_flow' element={<DataFlow />}></Route>
          <Route path='/next_steps' element={<NextSteps />}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App
