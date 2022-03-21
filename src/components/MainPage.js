import React,{Component} from "react";
import s from "./MainPage.module.css";
import avatar from "./images/avatar.svg";
import arrow from "./images/arrow.svg";
import buttonArrow from "./images/buttonArrow.svg";
class MainPage extends Component{
    state = {};
    infoHandler=(e)=>{
         this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let url = 'http://localhost:5000/';
        const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        };
        fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(
                this.state
                ),
        })
        .then(response => {
            if(response.ok){
                alert(`Данные отправлены Response status:${response.status}`)
                console.log(response)
            }else{
                alert("Данные не отправлены")
            }
        })
        console.log(this.state);
    }
    render(){
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
                    <form className={s.form} onSubmit={this.handleSubmit}>
                            <label>
                        ФИО:
                            <input type="text" name="name" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Дата рождения:
                            <input type="text" name="birthday" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Гражданство:
                            <input type="text" name="citizenship" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Адрес проживания:
                            <input type="text" name="address" id={s.address}placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Руководитель группы:
                            <input type="text" name="leader" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Должность:
                            <input type="text" name="post" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Телефон:
                            <input type="text" name="phone" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Почта (личная):
                            <input type="text" name="mail" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Почта (рабочая, если есть):
                            <input type="text" name="workMail" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Дата приема на работу:
                            <input type="text" name="date" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Размер оплаты труда:
                            <input type="text" name="salary" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <label>
                        Оформление:
                            <input type="text" name="registration" placeholder="..." onChange={this.infoHandler}></input>
                        </label>
                        <input type="submit" value="Сохранить" className={s.save}></input>          
                    </form>
                    <div className={s.comments}>
                        <div className={s.line}>
                            <form onSubmit={this.handleSubmit}>
                            <input type="text" name="comments" placeholder="Комментарии..." onChange={this.infoHandler}></input>
                            <input type="submit" value="Сохранить" className={s.save}></input>
                            </form>
                        </div>
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
    )}
}
export {MainPage};