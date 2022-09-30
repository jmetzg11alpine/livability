import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>
      <Link to='/drivers_of_livability'>Cities</Link>
      <Link to='/data_flow'>Data Flow</Link>
      <Link to='/next_steps'>Next Steps</Link>
    </div>
  )
}
export default Nav
