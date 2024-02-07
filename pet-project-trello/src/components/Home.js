import React, { Component } from 'react';

import calendar from "../img/calendar_icon.svg";

import profile_1 from "../img/profile_01.svg";
import profile_2 from "../img/profile_02.svg"; //картинки профилей, хочу чтобы адреса на них тоже приходили с сервера

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            list: {},
            error: null
        }
    }

    buildList = (data) => {
        let dataMassive = data.data.map((item) => item) //настраиваем чтобы забиралось из объекта, из объекта, из массива  
        console.log(dataMassive, null, '/t'); //смотрим чё забрали
        this.setState({ list: dataMassive }) //присваиваем list то что забрали в переменную 2 строчками выше
    }

    componentDidMount() {
        let url = 'http://v2250198.hosted-by-vdsina.ru:8080/note/get-all';
        fetch(url)
            .then(response => response.json())
            .then(this.buildList)
            .catch(error => console.error('Error: ', error))
    }

    // алгоритм подбора месяца по цифре
    getMonthName = (number) => {
        return {
            "01": 'JAN',
            "02": 'FEB',
            "03": 'MAR',
            "04": 'APR',
            "05": 'MAY',
            "06": 'JUN',
            "07": 'JUL',
            "08": 'AUG',
            "09": 'SEP',
            "10": 'OCT',
            "11": 'NOV',
            "12": 'DEC'
        }[number]

    };

    getUserId = (id) => {
        return {
            "0": profile_1,
            "1": profile_2,
            
        }[id]
    };

    render() {
        return (
            <div>
                {/* <h1>This is Home</h1> */}
                <ul>


                    {this.state.list.length === 0 &&
                        <li>No data available</li>
                    }


                    {this.state.list.length > 0 &&
                        this.state.list.map((item) => (
                            <div key={item.id} id={item.id} className='container'>

                                <div className="div-container-card">
                                    <img src="https://klike.net/uploads/posts/2019-11/1574605248_9.jpg" className="img-top" alt="top" />
                                    <div className="div-at-a-glance">
                                        <h1>{item.title}</h1>
                                        {/* <img src={task.emoji} className="emoji" alt="emoji" /> */}
                                    </div>
                                    <p className="p-class-description">{item.description}</p>
                                    <div className="div-more-info">
                                        <div className="div-due-date">
                                            <img
                                                src={calendar}
                                                className="img-calendar"
                                                alt="calendar icon"
                                            />
                                            <p className="p-date">{this.getMonthName(item.create_at.substring(5, 7)) + " " + item.create_at.substring(8, 10) + ", " + item.create_at.substring(0, 4)}</p>
                                        </div>
                                        <div className="div-assigned-to"> 
                                        {/* можно сделать сункцию которая будет реагировать на количество юзеров в деле и выдавать код для css с нужным позиционированием */}
                                            <img
                                                src={this.getUserId(item.user_id)}
                                                className="profile2"
                                                alt="person 1"
                                            />
                                            

                                        </div>
                                    </div>
                                    <div className="div-progress">
                                        {/* убрать точку когда закончу прогресс бар */}
                                        {/* <p>{task.progress}</p> */}
                                    </div>
                                </div>
                                <div className="div-container-note">
                                    {/* <p>{task.notehead}</p> */}
                                    <p className='list-title'>A short title</p>
                                    <ul key={item.list_id} id={item.list_id} className="list">

                                        <li className="list-element">{item.list_id}</li>
                                    </ul>

                                </div>
                                <br />
                                {/* <li >{item.title + ", " + item.description}</li> */}
                            </div>





                        ))
                    }


                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
        )
    }
}

// export default Home;