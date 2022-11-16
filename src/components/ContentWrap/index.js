import './index.css';

function ContentWrap({ className, children, title }) {
  return (
    <div className={"Content-wrap " + className}>
      <div className="Content-header">
        <h3 className="Block-title">{title}</h3>
        <div className="Fancy-line">
          <div className="Small-green-block"></div>
          <div className="Gray-line"></div>
        </div>
      </div>
      <div className="Content">{children}</div>
    </div>
  );
}

export default ContentWrap;
