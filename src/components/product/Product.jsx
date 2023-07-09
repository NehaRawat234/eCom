import Filters from "./Filters"
import "./product.css"
import { useEffect, useState } from "react"

export default function Product() {

    const [itemDetails, setItemDetails] = useState(false)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setItemDetails(json)
            }
            )

    }, [])

    return <>
        <div id="product">
                <Filters />
            <div id="product-container" className="product-container">
                {
                    itemDetails && itemDetails.map(function (item) {
                        return <div className="product-template-box">
                            <div><h2>Title</h2> {item.title}</div>
                            <div><img src={item.image} alt="" /></div>
                            <div><h2>Description:</h2> {item.description}</div>
                            <div> <h2> Price:</h2>{item.price}</div>
                        </div>
                    })
                }
            </div>
        </div>

    </>
}