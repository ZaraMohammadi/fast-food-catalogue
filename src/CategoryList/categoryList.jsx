import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../Loading/loading";
const CategoryList =({filterItems})=>{

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchCategories = async ()=>{
            const response = await axios.get('/FoodCategory/categories');
            setCategories(response.data);
            setLoading(false);
        }
        fetchCategories();
    },[])

    const renderContent=()=>{
        if(loading){
            return <Loading theme='muted'/>
        }
        return(
        <ul className="nav">
            <li className="nav-item" onClick={()=>filterItems()}>
                <a className="nav-link" href="#">
                    همه دسته بندی ها
                </a>
            </li>
       
        {
            categories.map((category)=>(
                <li className="nav-item" key={category.id} onClick={()=>filterItems(category.id)}>
                    <a className="nav-link" href="#">
                        {category.name}
                    </a>
                </li>
            ))
        }
        </ul>
        )
    }

    return(
        <nav className="container mt-n4">
            <div className="d-flex align-items-center bg-light shadow-lg rounded-3 py-3" 
            style={{height:'60px'}}>
               
            {renderContent()}
            </div>
        </nav>
    )
}
export default CategoryList;