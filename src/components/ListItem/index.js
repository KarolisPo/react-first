import './index.css';

function ListItem({ src, href, children }) {
  return (
      <ul className="Line-wrap">
        <li className="List-item">
          <div className="Logo-img">
            <img src={src} className="Soc-logo" />
          </div>
          <p className="Paragraph Link-text">
            <a href={href} target="_blank" className="Soc-link">
              {children}
            </a>
          </p>
        </li>
      </ul>
  );
}

export default ListItem;
