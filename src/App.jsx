import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from "./component/Header";
import Footer from './component/Footer';
import ProductList from './component/ProductList';
import custardAppleCover from './assets/custard-apple-bites-cover.jpg';
import comboCover from './assets/fruity-bites-combo-cover.jpg';
import strawberryCover from './assets/strawberry-bites-cover.jpg'; 
import NoProduct from './component/NoProduct';
import AddProduct from './component/AddProduct';
import { useState } from 'react';


function App() {
  const initialProduct = [
    {productCover: custardAppleCover, productTitle: "Custard Apple Bites", productReviews: "4", productPrice:"200", productPacks:"2", productWeight:"20", productLink: "https://example.com/product1"},
    {productCover: comboCover, productTitle: "Fruity Bites Combo ", productReviews: "3", productPrice:"720", productPacks:"8", productWeight:"148", productLink: "https://example.com/product2"},
    {productCover: strawberryCover, productTitle: "Strawberry Bites", productReviews: "2", productPrice:"200", productPacks:"2", productWeight:"16", productLink: "https://example.com/product3"}
  ]

  const [selectedTab, setSelectedTab] = useState("PRODUCTS");
  const [newProduct, setNewProduct] = useState(initialProduct);

  const handleAddProduct = (newProductTitle, newProductPrice, newProductPack, newProductWeight, newProductReviews, productImage, newproductLink) => {
    const addNewProduct = [...initialProduct, {productCover: productImage, productTitle: newProductTitle, productReviews: newProductReviews, productPrice:newProductPrice, productPacks:newProductPack, productWeight:newProductWeight, productLink:newproductLink}];
    setNewProduct(addNewProduct);
  }
  
  return (
    <>
      <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Header>
      <div className='main-wrapper'>
        {selectedTab === "PRODUCTS" ? 
        <ProductList totalProduct={newProduct} /> : 
        <AddProduct onNewProduct={handleAddProduct}></AddProduct> }
       {/* {newProduct.length === 0 && <NoProduct />} */}
        {selectedTab === "PRODUCTS" && newProduct.length === 0 && <NoProduct />}

      </div>
      <Footer></Footer>
    </>
  )
}

export default App
