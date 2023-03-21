
function PrdctCard(post) {

    return (

        <a href={"/products/"  + post.post.id} className="card">
            <h1>{post.post.title}</h1>
            <img src={post.post.images[0]}></img>
            <h3>{post.post.description}</h3>
            <h2>Price: $ {post.post.price}</h2>
            <h4>Discount: {post.post.discountPercentage}%</h4>

        </a>
    )
}

export default PrdctCard