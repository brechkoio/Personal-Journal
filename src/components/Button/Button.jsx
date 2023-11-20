import './Button.css';

const Button = ({ children }) => {
  const clicked = () => {
    console.log('Hello');
  };

  return (
    <button className='button accent' onClick={clicked}>
      {children}
    </button>
  );
};

export default Button;
