import React, { Component } from 'react';

import calendar from "../img/calendar_icon.svg";

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            list: {},
            error: null
        }
    }

    buildList = (data) => {
        let dataMassive = data.data.map((item) => item)
        console.log(dataMassive, null, '/t');
        this.setState({ list: dataMassive })
    }

    componentDidMount() {
        let url = 'http://v2250198.hosted-by-vdsina.ru:8080/note/get-all';
        fetch(url)
            .then(response => response.json())
            .then(this.buildList)
            .catch(error => console.error('Error: ', error))
    }

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
                                            {/* <img
                                                src={task.profile1}
                                                className="profile1"
                                                alt="person 1"
                                            />
                                            <img
                                                src={task.profile2}
                                                className="profile2"
                                                alt="person 2"
                                            /> */}
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
                                <li >{item.title + ", " + item.description}</li>
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