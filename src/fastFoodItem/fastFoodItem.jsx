import {HiShoppingCart} from 'react-icons/hi' 
import './fastFoodItem.css'
const FastFoodItems = ({name,price,ingredients,imageUrl})=>{
    return(
        <div className="card product-card h-100 shadow-sm pb-2">
            <span className="badge badge-end badge-shadow bg-success fs-sm fw-medium">
                قیمت: {price.toLocaleString()} تومان
            </span>
            <div className="card__placeholder">
                 <img className="card-img-top" src={imageUrl}  />
            </div>
        
            <div className="card-body text-center d-flex flex-column">
                <h5 className="mb-3">{name}</h5>
                <div className="fs-sm fw-bold text-muted mb-3">
                    {ingredients}
                </div>
                <button className="btn btn-outline-success btn-sm w-100 mt-auto fw-bold">
                    <HiShoppingCart className='fs-5 ms-3'/>
                    افزودن به سبد خرید
                </button>
            </div>
        </div>
    )
}
export default FastFoodItems;