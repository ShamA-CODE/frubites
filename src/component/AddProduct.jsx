import { useRef, useState } from "react";

const AddProduct = ({onNewProduct}) => {

  const titleElement = useRef();
  const priceElement = useRef();
  const packsElement = useRef();
  const weightElement = useRef();
  const reviewsElement = useRef();
  const linkElement = useRef();
  const [productImage, setProductImage] = useState(null);

   // Handle image upload
   const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProductImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProductTitle = titleElement.current.value;
    const newProductPrice = priceElement.current.value;
    const newProductPack = packsElement.current.value;
    const newProductWeight = weightElement.current.value;
    const newProductReviews = reviewsElement.current.value;
    const newproductLink = linkElement.current.value;

    // Clear form fields
    titleElement.current.value = "";
    priceElement.current.value = "";
    packsElement.current.value = "";
    weightElement.current.value = "";
    reviewsElement.current.value = "";
    linkElement.current.value = "";
    setProductImage(null);

    if (!productImage) {
      alert("Please upload an image!");
      return;
    }

    onNewProduct(newProductTitle, newProductPrice, newProductPack, newProductWeight, newProductReviews, productImage, newproductLink);
  }


  return <>
    <div className="container">
        <div className="row">
          <div className="col-12 wrapper-add-product">
            <h4>Add Product</h4>
            <form onSubmit={handleAddProduct}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Title</label>
                    <input type="text" className="form-control" placeholder="Enter Title" ref={titleElement}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input type="text" className="form-control" placeholder="Enter Price" ref={priceElement}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Packs</label>
                    <input type="text" className="form-control" placeholder="Enter Packs" ref={packsElement}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Weight</label>
                    <input type="text" className="form-control" placeholder="Enter Weight" ref={weightElement}/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Reviews</label>
                    <input type="text" className="form-control" placeholder="Enter Reviews" ref={reviewsElement}/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <label className="form-label">Product Link</label>
                    <input type="url" className="form-control" placeholder="Enter Link" ref={linkElement}/>
                  </div>
                </div>
              </div>

              {/* Preview Uploaded Image */}
              {productImage && <img src={productImage} alt="Product Preview" style={{ width: "100px", marginTop: "10px" }} />}

              <button type="submit" className="btn-buy-now">Add Product</button>
            </form>
          </div>
       </div>
    </div> 
      
  </>
}

export default AddProduct;