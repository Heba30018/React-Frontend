import { useParams } from "react-router-dom";
import products from "../Data";
import { Link } from "react-router-dom";



function Details(){
    const{id}=useParams()
    const product=products.find(item=>item.id==Number(id))
    return(
        <>
                    <section className='container py-5'>

        <div class="card" w-200>
  <img src={product.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <Link class="btn btn-success" aria-current="page" to="/">Home</Link>
  </div>
</div>
</section>
        
        </>
    )
}
export default Details;