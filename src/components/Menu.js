import React from "react";
import s from "./Menu.module.css";
import logo from "./images/logo.svg";
import more from "./images/more.svg"
import greenPoint from "./images/greenPoint.svg";
import violetPoint from "./images/violetPoint.svg";
const Menu =()=>{
    return(
        <div className={s.menu_container}>
            <header>
                <img src={logo}></img>
                <img src={more}></img>

            </header>
            <div>
                <div className={s.option}>
                    <img src={greenPoint}></img>
                    <div className={s.title}>
                    Главная
                    </div>
                </div>
                <div className={s.option}>
                    <img src={greenPoint}></img>
                    <div className={s.title}>
                    Мои задачи
                    </div>
                </div>
                <div className={s.option}>
                    <img src={greenPoint}></img>
                    <div className={s.title}>
                    Уведомления
                    </div>
                </div>
                <div className={s.option}>
                    <img src={greenPoint}></img>
                    <div className={s.title}>
                    Команды
                    </div>
                </div>
                <div className={s.option}>
                    <img src={violetPoint}></img>
                    <div className={`${s.title} ${s.chosen}`}>
                    Настройки
                    </div>
                </div>
            </div>
        </div>
    )
}
export {Menu};