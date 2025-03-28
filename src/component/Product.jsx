import { FaRegStar, FaStar } from "react-icons/fa";
 
const Product = ({productCoverName, productTitleName, productReviewsName, productPriceValue, productPacksName, productWeightName, productLink}) => {

	const reviewCount = parseInt(productReviewsName, 10); // Convert to number
  const totalStars = 5; // Maximum stars
  const filledStars = Array(reviewCount).fill(<FaStar size={19} />);
  const emptyStars = Array(totalStars - reviewCount).fill(<FaRegStar size={19} />);

  return <>
    <div className="col-lg-4 col-sm-6">
				<div className="products-grid-bg">
					<div className="product-image">
						<a href={productLink}><img src={productCoverName} alt={productTitleName} /></a>
					</div>
					<div className="product-details">
						<a className="product-title" href={productLink}>
						  {productTitleName}
						</a>
						<p className="review-badge-bg"> 
							<span className="badge-stars-bg"> 
              {/* <FaStar size={19}/>
              <FaStar size={19}/>
              <FaStar size={19}/>
              <FaStar size={19}/>
              <FaRegStar size={19}/> */}
								{filledStars}
								{emptyStars}
							</span> 
							<span className="review-badge-text">{productReviewsName} reviews</span> 
						</p>
						<p className="product-price">₹ {productPriceValue}</p>
						<p className="product-qty">{productPacksName} packs, {productWeightName}g each</p>
						<a className="btn-buy-now" href={productLink} target="_blank" rel="noopener noreferrer">BUY NOW</a>
					</div>
					
				</div>
			</div>
  </>
}

export default Product;