import React from "react";
import "./MainComponentPage.css";
import { avatar } from "./AvatarList/AvatarList";
import { useState } from "react";

export const MainComponentPage = () => {
  const [hoverFlag,setHoverFlag] = useState(true);
  console.log(avatar);
  const fla = true;
  return (
    <>
      <div className="full-screen-for-choose-artists">
        <h3 className="full-screen-header onboarding-screen-artists-header ">
          Помогите нам подобрать идеальный плейлист
        </h3>
        <div className="onboarding-screen-artists-sub-title">
          Кто вам нравится больше всего? Выберите не менее трех исполнителей,
          чтобы помочь нам лучше угадать ваше настроение
        </div>
        <div className="onboarding-screen-grid">
        
          {avatar.map((ava) => (
            <div onClick={()=>(fla = setHoverFlag(!hoverFlag))} className="artistAvatar">
            {  console.log('status', fla)}
              <div  className="dark-hover">Love </div>
              {ava.hide ? <img  className="artist" src={ava.img} /> : <img  className="artist-choose" src={ava.img}/>} 
              
              <div className="artistName">{ava.author}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
