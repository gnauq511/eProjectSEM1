import React from "react";
import './footer.css';
export default function Footer() {
  return(
    <div className="footer" style={{marginTop: "50px"}}>
      <div className="bg-dark text-white py-3" >
        <div className=" text-center">
          <div className="row">
          <div className="col-md-3">
              <h5>Shopping Online</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white" >  
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Where We Deliver
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Gift Cards</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Buy a Gift Card
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Activate a Card
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    History
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Diamond Club</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Membership
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-3">&copy; 2024 Fashion Shop. All rights reserved.</p>
        </div>
      </div>
    </div>
    
  );    
}
