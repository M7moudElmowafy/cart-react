import React from "react";
import Products from './Products';

const Home = () => {
    return (
        <div className="hero border-1 pb-3">
            <div className="card bg-dark text-light border-0 ">
                <img src="assets/bg3.jpg" className="card-img" alt="Background" height="640px"/>
                <div className="card-img-overlay d-flex align-items-center ">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0" >NEW SEASON ARRIVALS </h5>
                    <p className="card-text lead fs-1">
                        CHECK OUT ALL THE TRENDS 
                        </p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    );
}

export default Home;