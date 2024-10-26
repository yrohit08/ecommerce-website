import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';


const Categories = () => {
    return (
        <div className="container mt-5 mb-5" >
        <h2 className="text-center mb-4">Shop by Category</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card category-card">
              <Link to="/department/electronics"> <img src="https://s.yimg.com/ny/api/res/1.2/NhDq6zGSVXbEkmyF2eDfPQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/digital_trends_973/348ad644b2df13a3a7f541454515e608" className="card-img-top" alt="Electronics" width="400px" height="200px" /> </Link>
              <div className="card-body text-center">
                <h5 className="card-title">Electronics</h5>
                <Link to="/department/electronics" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card category-card">
            <Link to="/department/fashion"><img src="https://t3.ftcdn.net/jpg/04/63/74/54/360_F_463745476_fQ6EKEfofPQoXmv49AMNXcRUPsVVV3LL.jpg" className="card-img-top" alt="Fashion" /> </Link>
              <div className="card-body text-center">
                <h5 className="card-title">Fashion</h5>
                <Link to="/department/fashion" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card category-card">
            <Link to="/department/homeAppliances"><img src="https://media.istockphoto.com/id/1301959047/photo/energy-efficiency-of-home-kitchen-appliances-concept.jpg?s=612x612&w=0&k=20&c=de9dYOENeXKri5gb3WZcOcFCFVVyPDZkYS2W_JY1L-Y=" className="card-img-top" alt="Home Appliances" /> </Link>
              <div className="card-body text-center">
                <h5 className="card-title">Home Appliances</h5>
                <Link to="/department/homeAppliances" className="btn btn-primary">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Categories;
