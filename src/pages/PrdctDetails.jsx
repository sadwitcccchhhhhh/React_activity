import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PrdctDetails() {
    const params = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + params.id)
            .then(async res => await res.json())
            .then(i => setProduct(i))

    }, [])

    return (
        <div>
           


           {product == null ?
                <p>Loading....</p>
                :
                <>

                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <img src={product.images[0]} alt=""/>
                    </>
           }
        </div>
    )
}

            export default PrdctDetails