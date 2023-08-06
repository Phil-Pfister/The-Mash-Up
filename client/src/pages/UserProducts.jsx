import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';




const UserProducts = (props) => {
    const  { loading, data } = useQuery(QUERY_USER);
    const userData = data?.user || {};
    console.log(userData);
   
   

    return (
        <main>
          <div className="flex flex-col justify-center">
          {Auth.loggedIn() ? (
            <>
            <div className="p-8">
              <p className="text-2xl text-white text-center" >Welcome {userData.username}</p>
            </div>
            
            <div className="col-12 col-md-8 mb-3 flex flex-row flex-wrap">
            
            {userData.products && userData.products.map((product) => {
              return (
               
                <div className="max-w-xs max-h-xs w-full bg-black shadow-lg rounded-xl m-3 p-6">
                <div className="text-white" key={product._id}>{product.name}</div>
                <div className="text-white">{product.description}</div>
                <img
                        src={product.image}
                        alt="product image"
                        className=" w-full   object-fill  rounded-2xl"
                      ></img>
                </div>
                
          )})};
               
              
            </div>
            </>
          ) : (
            <h3>You're Not Logged in</h3>)}
          </div>


        </main>
      );
    
}

export default UserProducts;