import React from 'react';
import './Business.css';


class Business extends React.Component{
    render(){
    const {business} = this.props;

        return (
                 <div className="Business">
                        <div className="image-container">
                            <img src={business.imageSrc} alt='' onClick={()=> window.open(business.url, "_blank")}/>
                        </div>
                        <div className ="heading">
                            <h2 id="name" onClick={()=> window.open(business.url, "_blank")}>{business.name}</h2>
                            <h2 id="price">{business.price ? `${business.price}`:``}</h2>
                        </div>
                        <div className="Business-information">
                            <div class="Business-address">
                                 <p>{business.address}</p>
                                 <p>{business.city}</p>
                                 <p id="directions" onClick={()=> window.open(`https://www.google.com/maps/search/?api=1&query=${business.alias}`, "_blank")}>{business.state}, {business.zipCode}</p>
                            </div>
                                <div className="Business-reviews">
                                    <h3>{business.category}</h3>
                                    <h3 className="rating">{business.rating} stars</h3>
                                    <p>{business.reviewCount} reviews</p>
                                </div>
                        </div>
                 </div>     
        );
    }
};

export default Business
