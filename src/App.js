import './reset.css';
import './App.css';
import TwitterLogo from './images/twitter_colored.png';

function App() {
  return (
    <div className="App">
      <div className="Header-color-block"></div>
      <header className="Header">
        <h1 className="Header-h1">Karolis Pociūnas</h1>
        <h2 className="Header-h2">FrontEnd Programuotojas</h2>
      </header>

      <section>
        <div className="Links-and-about-me">
          <div className="Content-wrap Left-block">
            <div className="Content-header">
              <h3 className="Block-title">Links</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <div className="Text-wrap">
                    <p className="Paragraph Link-text">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        className="Soc-link"
                      >
                        TWITTER/username
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <div className="Text-wrap">
                    <p className="Paragraph Link-text">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        className="Soc-link"
                      >
                        TWITTER/username
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <div className="Text-wrap">
                    <p className="Paragraph Link-text">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        className="Soc-link"
                      >
                        TWITTER/username
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <div className="Text-wrap">
                    <p className="Paragraph Link-text">
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        className="Soc-link"
                      >
                        TWITTER/username
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="Content-wrap Right-block">
            <div className="Content-header">
              <h3 className="Block-title">About me</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <div className="Text-wrap">
                <p className="Paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                  quisquam recusandae autem voluptate corrupti inventore ad
                  laborum porro blanditiis accusantium? Cupiditate libero
                  laborum fugiat molestiae, illum consequatur asperiores
                  nostrum. Deserunt. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Maiores omnis molestias laboriosam nulla
                  eveniet laudantium ipsam labore nobis eaque. Alias hic culpa
                  soluta, ea sit ut accusamus nisi ipsam officiis! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Dolorum
                  distinctio facere facilis unde tenetur magnam, est, voluptate
                  obcaecati voluptates, et veritatis delectus nobis? Rerum amet
                  id maiores vitae esse nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Education-personal-technical">
          <div className="Content-wrap Right-block">
            <div className="Content-header">
              <h3 className="Block-title">Education</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <div className="Text-wrap">
                <p>
                  SCHOOL NAME <br />
                  2000-2012 <br />
                  Degree
                </p>
                <div className="Gray-line-short"></div>
                <p>
                  SCHOOL NAME <br />
                  2000-2012 <br />
                  Degree
                </p>
              </div>
            </div>
          </div>

          <div className="Content-wrap Right-block">
            <div className="Content-header">
              <h3 className="Block-title">Personal skills</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <div className="My-skill">
                <p className="My-skill--perfect My-skill-para">teamwork</p>
              </div>
              <div className="My-skill">
                <p className="My-skill--good My-skill-para">communication</p>
              </div>
              <div clasName="My-skill">
                <p className="My-skill--viable My-skill-para">organization</p>
              </div>
            </div>
          </div>

          <div className="Content-wrap Right-block">
            <div className="Content-header">
              <h3 className="Block-title">Technical skills</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <div className="Content">
                <div className="My-skill">
                  <p className="My-skill--perfect My-skill-para">CSS</p>
                </div>
                <div className="My-skill">
                  <p className="My-skill--good My-skill-para">HTML</p>
                </div>
                <div clasName="My-skill">
                  <p className="My-skill--viable My-skill-para">JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default App;
