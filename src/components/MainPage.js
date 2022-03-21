import React,{useState} from "react";
import s from "./MainPage.module.css";
import avatar from "./images/avatar.svg";
import arrow from "./images/arrow.svg";
import save from "./images/save.svg";
import buttonArrow from "./images/buttonArrow.svg";
const MainPage =()=>{
    const[info, setInfo] = useState({
        name: 'blabla',
        birthday: '',
        citizenship: '',

    });
    const infoHandler=(e)=>{
        setInfo({[e.target.name]: e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(info);
    }
    return(
        <div className={s.container}>
            <header className={s.header}>
                <button> <img className={s.arrow} src={arrow}></img>вернуться назад</button>
                <div>Имя сотрудника</div>
            </header>
            <div className={s.title}>Карточка сотрудника</div>
            <div className={s.card}>
                <img className={s.avatar} src={avatar}></img>
                <div className={s.info}>
                    <form className={s.form} onSubmit={handleSubmit}>
                            <label>
                        ФИО:
                            <input type="text" name="name" placeholder="..." onChange={infoHandler}></input>
                        </label>
                        <label>
                        Дата рождения:
                            <input type="text" name="birthday" placeholder="..." onChange={infoHandler}></input>
                        </label>
                        <label>
                        Гражданство:
                            <input type="text" name="citizenship" placeholder="..." onChange={infoHandler}></input>
                        </label>
                        <label>
                        Адрес проживания:
                            <input type="text" name="address" placeholder="..."></input>
                        </label>
                        <label>
                        Руководитель группы:
                            <input type="text" name="leader" placeholder="..."></input>
                        </label>
                        <label>
                        Должность:
                            <input type="text" name="post" placeholder="..."></input>
                        </label>
                        <label>
                        Телефон:
                            <input type="text" name="phone" placeholder="..."></input>
                        </label>
                        <label>
                        Почта (личная):
                            <input type="text" name="mail" placeholder="..."></input>
                        </label>
                        <label>
                        Почта (рабочая, если есть):
                            <input type="text" name="workMail" placeholder="..."></input>
                        </label>
                        <label>
                        Дата приема на работу:
                            <input type="text" name="date" placeholder="..."></input>
                        </label>
                        <label>
                        Размер оплаты труда:
                            <input type="text" name="salary" placeholder="..."></input>
                        </label>
                        <label>
                        Оформление:
                            <input type="text" name="registration" placeholder="..."></input>
                        </label>
                        <input type="submit" value="Сохранить"></input>
                        {/* <img className={s.save} src={save}></img> */}
                    
                    </form>
                    <div className={s.comments}>
                        <div className={s.line}>
                            <input placeholder="Комментарии..."></input>
                        </div>
                        <img className={s.save} src={save}></img>
                    </div>
                </div>
                
            </div>
            <div className={s.title}>
                Занятость сотрудника
            </div>
            <div className={s.workflow}>
                
                <table>
                    <thead>
                       <tr>
                            <th>Клиент ...</th>
                            <th>Проект ...</th>
                            <th>Этап ...</th>
                            <th>Дедлайн ...</th>
                            <th>Статус ...</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Введите ткест...</td>
                            <td className={s.project}>Текст... <img className={s.buttonArrow} src={buttonArrow}></img></td>
                            <td className={s.black}>Название этапа</td>
                            <td className={s.black}>00.00.00 0:0</td>
                            <td>...</td>
                        </tr>
                          <tr>
                            <td>Введите ткест...</td>
                            <td className={s.project}>Текст... <img className={s.buttonArrow} src={buttonArrow}></img></td>
                            <td className={s.black}>Название этапа</td>
                            <td className={s.black}>00.00.00 0:0</td>
                            <td>...</td>
                          </tr>
                          <tr className={s.blank}>
                              <td colSpan={5} rowSpan={2}>
                                .
                              </td>
                          </tr>
                    </tbody>
                      
                </table>

            </div>
            
        </div>
    )
}
export {MainPage};