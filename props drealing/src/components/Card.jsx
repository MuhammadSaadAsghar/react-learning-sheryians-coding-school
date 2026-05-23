import React from "react";
import "./Card.css"
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
   
      <div className="card">
      <div>
          <div className="top">
          <img src={props.brandlogo} alt="logo" />
          <button>save <Bookmark size={12} color="#8b8b8b"/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.postdate}</span></h3>
          <h2>{props.post}</h2>
          <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    
  );
};

export default Card;
