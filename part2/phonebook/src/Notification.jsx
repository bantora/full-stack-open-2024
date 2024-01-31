import "./styles.css";

const Notification = ({ notifText, color, visibility }) => {
  return (
    <div
      className='error'
      style={{
        color,
        visibility,
      }}
    >
      {notifText}
    </div>
  );
};

export default Notification;
