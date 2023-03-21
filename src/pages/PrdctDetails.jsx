import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PrdctDetails() {
    const params = useParams()
    const [product, setProduct] = useState()

    useEffect(() => {
        fetch('https://dummyjson.com/products/' + params.id)
            .then(async res => await res.json())
            .then(i  => setProduct(i))

    }, [])

    return (
        <div>
           


           {product == null ?
                <p>Loading....</p>
                :
                <>

                    <p>{product.title}</p> 
                    <img src={product.images[0]} alt=""/>
                    <p>{product.description}</p>
                    <h2>Price: $ {product.price}</h2>
                    <h4>Discount: {product.discountPercentage}%</h4>

                    </>
           }
        </div>
    )
}

            export default PrdctDetails