import React from 'react';
import classes from './ProductPreview.module.css';

const ProductPreview = (props) => {
  const currentHours = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

  return(
    <div className={classes.ProductPreview}>
      <img src={props.currentPreviewImage} alt="Product Preview" />
          {
            // props.showHeartBeatSection ? 
            props.currentSelectedFeature === 1 ?
              <div className={[classes.FeatureData, classes.HeartBeatsSection].join(' ')}>
                <i className="fas fa-heartbeat" />
                <p>78</p>
              </div>
            :
              <div className={[classes.FeatureData, classes.TimeSection].join(' ')}>
                <p>{`${currentHours}:${currentMinutes}`}</p>
              </div> 
          }
    </div>
  );
}

export default ProductPreview;