import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import Auth from '../utils/auth';


const UserProducts = () => {
    const  { data } = useQuery(QUERY_USER);
    const userData = data?.user || {};
    console.log(userData);
   
   

    return (
        <main>
          <div className="flex-row justify-center">
          {Auth.loggedIn() ? (
            <div className="col-12 col-md-8 mb-3">
             
               <h1>user</h1>
              
            </div>
          ) : (
            <h3>You're Not Logged in</h3>)}
          </div>


        </main>
      );
    
}

export default UserProducts;