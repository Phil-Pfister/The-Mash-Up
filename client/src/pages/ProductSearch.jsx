
import { useQuery } from '@apollo/client'
import ProductList from '../components/ui/ProductList';

import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const ProductSearch = () => {

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList
              products={products}
              
            />
          )} 
        </div>
      </div>
    </main>
  );
};

export default ProductSearch;
