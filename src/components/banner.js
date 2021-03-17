import React from 'react';
import Bannerimg from './images/bannerimg.jpg';

class Banner extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={Bannerimg} alt='Bannerimg' width="100%" height="100%" />
        </div>
      </div>
   );
  }
} 
export default Banner;