import './../assets/css/card.css'

const Card = (props)=>{

    // const cardStyle={
    //     background:"red",
    //     marginRight:"15px",
    //     boxShadow: "0 0 4px 6px rgba(0,0,0,0.15)"
    // }

    let {id,img,title,price,addToCart}=props

    return(
        <div className="card" >
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body" id={id}>
                <h5 className="card-title">{title}</h5>
                <p id="test"  className="card-text">{price}</p>
                <button className="btn btn-primary" onClick={(e)=>addToCart(e)}>add to cart</button>
            </div>
        </div>
    )
}

export default Card