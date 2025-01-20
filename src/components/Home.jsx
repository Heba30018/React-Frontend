//   import { Link } from "react-router-dom";
// import products from "../Data";

//   function Home(){
//     return(

        
//             <section className='container py-5'>
//                 {
//                     products.map((obj)=>(
                    
//                             <div className='card mb-2 p-3'>
//                                 <div className='row'>
//                                     <div className='col-2'>
//                                         <img src={obj.image} alt='' className='w-100'/>
//                                     </div>
//                                     <div className='col-10'>
//                                         <h2>{obj.title}</h2>
//                                         <p>{obj.description}</p>
//                                         <Link to={`/details/${obj.id}`} className="btn btn-primary">details</Link>
//                                     </div>
//                                 </div>
//                             </div>
                        
//                     ))
        
        
//                 }
//             </section>
        
        
//           )
    
//   }
//   export default Home;


import React from "react";

function Home({ userRole }) {
  return (
    <div className="container mt-5">
      {userRole ? (
        <h1>Hello, {userRole}!</h1>
      ) : (
        <h1>Welcome! Please log in to see your role.</h1>
      )}
    </div>
  );
}

export default Home;

