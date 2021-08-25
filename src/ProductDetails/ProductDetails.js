import React from 'react';
import classes from './ProductDetails.module.css'


const ProductDetails = (props) => {
  const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage]
    if(pos === 0) {
      classArr.push(classes.SelectedProductImage);
    }
    return (
      <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}/>
    );
  })

  const featureList = props.data.featureList.map((item, pos)=> {
    const classArr = [classes.FeatureItem];
    if (pos === 0){
      classArr.push(classes.SelectedFeatureItem);
    }
    return(
      <button key={pos} className={classArr.join(' ')}>{item}</button>
    );
  })


  // console.log(props.data);
  return(
    <div className={classes.ProductData}> 
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>

          <h3 className={classes.SectionHeading}>Select Color</h3>
          <div>
            {colorOptions}
          {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black Color Watch"></img>
          <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="Purple Color Watch"></img>
          <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="Blue Color Watch"></img>
          <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="Red Color Watch"></img> */}
          </div>

          <h3 className={classes.SectionHeading}>Features</h3>
          <div>
            {featureList}
            {/* <button className={[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
            <button className={classes.FeatureItem}>Heart Rate</button> */}
          </div>

          <button className={classes.PrimaryButton}>Buy Now!</button>
        </div>
  );
}
export default ProductDetails;