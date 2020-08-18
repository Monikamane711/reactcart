import products from '../products.json'

export default function filterList(arr, method) {

    if(method == null) return products;

    else {
          return products.filter(product => {
          const sizeArray = product.cuisine_type.split(" ");
          if(arr.length > 0) {
                if(sizeArray.some(r => arr.indexOf(r) >= 0)) {
                    return product;
            }
          }
          else {
              return products;
          }
      })  
    }
}

