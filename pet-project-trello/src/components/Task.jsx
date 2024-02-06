import "../styles/style.css";
import calendar from "../img/calendar_icon.svg";
import image_top from "../img/image_top_default.svg";
import emoji_reaction from "../img/emoji_reaction.svg";
import profile_1 from "../img/profile_01.svg";
import profile_2 from "../img/profile_02.svg";

const tasks = [
  {
    img: image_top,
    title: "Task title",
    emoji: emoji_reaction,
    description: "Add a short description or link a web page.",
    date: "Jan 01, 2021",
    profile1:
      "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663103492_54-mykaleidoscope-ru-p-eiforiya-oboi-emotsii-64.jpg",
    profile2:
      "https://w.forfun.com/fetch/d9/d9b916b8d04c6bae50b1c0e38ec14cc3.jpeg",
    progress: ".",
    notehead: "Add a quick note. Or create a simple list:",
    listel: "Cake",
    id: 0,
  },
  // таких массивов скока хочешь можно сделать
  {
    img: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663103492_54-mykaleidoscope-ru-p-eiforiya-oboi-emotsii-64.jpg",
    title: "Task title 2",
    emoji: emoji_reaction,
    description: "This is a short description or link a web page.",
    date: "June 02, 2023",
    profile1: profile_1,
    profile2: profile_2,
    id: 1,
  },
];

export function Task() {
  return (
    <>
      {tasks.map((task) => {
        return (
          <div className="container"  key={task.id}>
            <div className="div-container-card">
              <img src={task.img} className="img-top" alt="top" />
              <div className="div-at-a-glance">
                <h1>{task.title}</h1>
                <img src={task.emoji} className="emoji" alt="emoji" />
              </div>
              <p className="p-class-description">{task.description}</p>
              <div className="div-more-info">
                <div className="div-due-date">
                  <img
                    src={calendar}
                    className="img-calendar"
                    alt="calendar icon"
                  />
                  <p className="p-date">{task.date}</p>
                </div>
                <div className="div-assigned-to">
                  <img
                    src={task.profile1}
                    className="profile1"
                    alt="person 1"
                  />
                  <img
                    src={task.profile2}
                    className="profile2"
                    alt="person 2"
                  />
                </div>
              </div>
              <div className="div-progress">
                {/* убрать точку когда закончу прогресс бар */}
                <p>{task.progress}</p>
              </div>
            </div>
          <div className="div-container-note">
              <p>{task.notehead}</p>
              <ul className="list">
                <li className="list-element">{task.listel}</li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
}
