import Product from "./Product";


const ProductList = ({totalProduct}) => {

  return <>
    <div className="container">
        <div className="row">
          {totalProduct.map((item) => <Product key={item.productTitle} productCoverName={item.productCover} productTitleName={item.productTitle} productReviewsName={item.productReviews} productPriceValue={item.productPrice} productPacksName={item.productPacks} productWeightName={item.productWeight} productLink={item.productLink} /> )}
       </div>
    </div>  
  </>
}

export default ProductList;