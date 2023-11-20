import './CardButton.css';

const CardButton = ({ className, children }) => {
  const classNames = 'card-button' + (className ? ' ' + className : '');
  return <button className={classNames}>{children}</button>;
};

export default CardButton;
