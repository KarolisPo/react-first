import './index.css';

function WorkExpBlock({ position, company, date, children, task1, task2}) {
  return (
    <div className="Work-exp-block">
      <div className="Exp-info-wrap">
        <p className="Work-exp-title">
          <span className="Bold-title">{position}</span>
          <br />
          {company} <br />
          {date}
        </p>
        <p className="Work-exp-about">{children}</p>
      </div>
      <ul className="Work-exp-tasks" type="disc">
        <li>{task1}</li>
        <li>{task2}</li>
      </ul>
    </div>
  );
}

export default WorkExpBlock;
