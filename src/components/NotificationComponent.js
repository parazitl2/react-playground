
export const NotificationComponent = ({ children, buttons }) => {
  return (
    <div className="notification">
      <div>
        {children}
      </div>
      <div>
        {buttons}
      </div>
    </div>
  );
};