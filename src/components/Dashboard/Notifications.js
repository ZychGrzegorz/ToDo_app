import React from "react";
import moment from "moment";
const Notifications = (props) => {
  const { notifications } = props;
  return (
    <div className="notificationsContent">
      <span className="cardTitle">Notifications</span>

      <ul className="notificationsList">
        {notifications &&
          notifications.map((item) => {
            return (
              <li key={item.id} className="notificationsLi">
                <span className="notificationElement user">
                  {item.user}
                  <br />
                </span>
                <span className="notificationElement content">
                  {item.content}
                  <br />
                </span>
                <span className="notificationElement date">
                  {moment(item.time.toDate()).fromNow()}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Notifications;
