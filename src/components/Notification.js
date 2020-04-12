import React from "react";
import { connect } from "react-redux";

const Notification = ({ notifications }) => {
  return (
    notifications.length > 0 &&
    notifications.map((notification) => (
      <div key={notification.id} className={`alert alert-${notification.type}`}>
        <i className="fas fa-info-circle"></i> {notification.msg}
      </div>
    ))
  );
};

const mapStateToProps = (state) => {
  return {
    notifications: state.notification.notifications,
  };
};

export default connect(mapStateToProps, null)(Notification);
