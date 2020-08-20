import products from '../product.json'
import {dummyProducts} from '../dummy'

export default function filterList(arr, method) {

    if(method == null) return dummyProducts;

    else {
          return dummyProducts.filter(product => {
          const sizeArray = product.cuisine.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return product;
            }
          }
          else {
              return dummyProducts;
          }
      })  
    }
}

