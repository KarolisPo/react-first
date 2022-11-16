import './index.css';

function FooterBlock({ title, children }) {
  return (
    <div className="Footer-block">
      <h3 className="Footer-title">{title}</h3>
      <p className="Footer-block-details">{children}</p>
    </div>
  );
}

export default FooterBlock;
