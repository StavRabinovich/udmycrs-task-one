import React, { Component } from 'react';

import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Topbar from './Topbar/Topbar';
import ProductData from './Utils/ProductData';


class App extends Component {
  state = {
    productData: ProductData,
    // currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    currentPreviewImagePos: 0,
    // showHeartBeatSection: false,
    currentSelectedFeature: 0,
  }

  onColorOptionClick = (pos) => {
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    // this.setState({currentPreviewImage: updatedPreviewImage});
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    /* let updatedState = false;
    if (pos === 1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection: updatedState}); */
    this.setState({currentSelectedFeature: pos});
  }

  render() {
    return (
      <div>
        <Topbar/>

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions
            [this.state.currentPreviewImagePos].imageUrl} 
            /*showHeartBeatSection={this.state.showHeartBeatSection}*/
             currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>

          <div className={classes.ProductData}> 
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos} 
            onFeatureItemClick={this.onFeatureItemClick}
            /*showHeartBeatSection={this.state.showHeartBeatSection}*/
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>
    );
  }
}
  
  

export default App;
