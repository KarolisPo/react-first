import './index.css';

function Pill({ children, className }) {
  return (
    <div className="My-skill">
      <p className={'My-skill-para ' + className}>{children}</p>
    </div>
  );
}

export default Pill;
