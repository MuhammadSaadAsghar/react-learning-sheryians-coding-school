import React from "react";
import style from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.top}>
         {props.status && (
    <h5 className={style.status}>{props.status}</h5>
  )}
        <h4 className={style.pay}>{props.pay}</h4>
      </div>
        <div className={style.image}>
          <img
            src={props.image}
            alt=""
          />
        </div>
      <div className={style.center}>
        <h2>{props.name}</h2>
        <h4 className={style.role}>{props.role}</h4>
        <p className={style.work}>{props.work}</p>
        <div className={style.skill}>
          {props.skill.map(function(skill,index){
          return <span key={index}>{skill}</span>
          })}
          <span className={style.more}>{props.more}</span>
        </div>
        <div className={style.bio}>
     <p>{props.bio}</p>
        </div>
      </div>
       <div className={style.bottom}>
        <div className={style.line}></div>
        <p className={style.link}>View Profile</p>
      </div>
    </div>
  );
};

export default Card;
