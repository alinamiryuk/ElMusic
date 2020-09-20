import React from "react";
import "./MainComponentPage.css";
import {avatar} from './AvatarList/AvatarList'

export const MainComponentPage = () => {
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
          {avatar.map((ava)=>(
            <div className="artistAvatar">
              <img
                className="artist"
                src={ava.img}
              />
              <div className="artistName">{ava.author}</div>
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};
