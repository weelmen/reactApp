//import { get } from "../../helpers/apiHelpers"
export const getAllProductsApi = (config) => async dispatch => {

  try {
    let result = await get('produit/produitlist',config); 
    console.log(result) ; 
    dispatch(getAllproducts(result.message)) ; 
  } catch (error) {
    
  }
}

const getAllproducts = (data) => {

  return {
    type: 'GET_ALL_PRODUCTS', 
    payload:data
  }
}