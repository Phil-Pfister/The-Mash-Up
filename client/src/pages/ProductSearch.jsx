
import { useQuery } from '@apollo/client'
import { useParams } from "react-router-dom";

import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const ProductSearch = () => {
  const { searchKeyword } = useParams();
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  
  


  const searched = products.filter((a) => a.keyword == searchKeyword);
  console.log(searched);

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
         
        </div>
      </div>
    </main>
  );
};

export default ProductSearch;
