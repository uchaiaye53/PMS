import { Link } from "react-router-dom"

const Home = () => {
  console.log("home")
  return (
    <div>
      <h1 className="text-4xl text-center"> <Link to={`/form`}>Go to Form page</Link></h1>       
    </div>
  )
}

export default Home;
