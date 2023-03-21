import { useEffect, useState } from "react"
import PrdctCard from "../components/PrdctCard"

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(async res  => await res.json())
        .then(data => setPosts(data.products))

    },[])


    return (
        <div className="container">
            {posts.map((post, i ) =>
          <PrdctCard post={post}> </PrdctCard>
           )}
            </div>
            )
    
        }
    
export default Home