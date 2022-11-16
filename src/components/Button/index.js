import './index.css';

function Button({children = "Submit"}) {
  return <button className="Button">{children}</button>;
}

export default Button;
