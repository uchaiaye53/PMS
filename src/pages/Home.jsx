import { Link } from "react-router-dom"

const Home = () => {
  console.log("home")
  return (
    <div>
      
      <Link to={`/form`}>Add veicle</Link>
    </div>
  )
}

export default Home;
