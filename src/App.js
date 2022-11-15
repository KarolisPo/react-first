import './reset.css';
import './App.css';
import TwitterLogo from './images/twitter_colored.png';

function App() {
  return (
    <div className="App">
      <div className="Header-color-block"></div>
      <header className="Header">
        <h1 className="Header-h1">Karolis Pociūnas</h1>
        <h2 className="Header-h2">FrontEnd Developer</h2>
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
                  <p className="Paragraph Link-text">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="Soc-link"
                    >
                      TWITTER/username
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <p className="Paragraph Link-text">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="Soc-link"
                    >
                      TWITTER/username
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <p className="Paragraph Link-text">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="Soc-link"
                    >
                      TWITTER/username
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="Content">
              <ul className="Line-wrap">
                <li className="List-item">
                  <div className="Logo-img">
                    <img src={TwitterLogo} className="Soc-logo" />
                  </div>
                  <p className="Paragraph Link-text">
                    <a
                      href="https://www.twitter.com/"
                      target="_blank"
                      className="Soc-link"
                    >
                      TWITTER/username
                    </a>
                  </p>
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
              <p className="Paragraph">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
                quisquam recusandae autem voluptate corrupti inventore ad
                laborum porro blanditiis accusantium? Cupiditate libero laborum
                fugiat molestiae, illum consequatur asperiores nostrum.
                Deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Maiores omnis molestias laboriosam nulla eveniet
                laudantium ipsam labore nobis eaque. Alias hic culpa soluta, ea
                sit ut accusamus nisi ipsam officiis! Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum distinctio facere facilis
                unde tenetur magnam, est, voluptate obcaecati voluptates, et
                veritatis delectus nobis? Rerum amet id maiores vitae esse nemo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Education-personal-technical">
          <div className="Content-wrap">
            <div className="Content-header">
              <h3 className="Block-title">Education</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
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

          <div className="Content-wrap">
            <div className="Content-header">
              <h3 className="Block-title">Personal skills</h3>
              <div className="Fancy-line">
                <div className="Small-green-block"></div>
                <div className="Gray-line"></div>
              </div>
            </div>
            <div className="Content">
              <div className="My-skill">
                <p className="My-skill-perfect My-skill-para">teamwork</p>
              </div>
              <div className="My-skill">
                <p className="My-skill-good My-skill-para">communication</p>
              </div>
              <div clasName="My-skill">
                <p className="My-skill-viable My-skill-para">organization</p>
              </div>
            </div>
          </div>

          <div className="Content-wrap">
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
                  <p className="My-skill-perfect My-skill-para">CSS</p>
                </div>
                <div className="My-skill">
                  <p className="My-skill-good My-skill-para">HTML</p>
                </div>
                <div clasName="My-skill">
                  <p className="My-skill-viable My-skill-para">JS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Content-wrap">
          <div className="Content-header">
            <h3 className="Block-title">Work Experience</h3>
            <div className="Fancy-line">
              <div className="Small-green-block"></div>
              <div className="Gray-line"></div>
            </div>
          </div>
          <div className="Content">
            <div className="Work-exp-wrap">
              <div className="Work-exp-block">
                <div className="Exp-info-wrap">
                  <p className="Work-exp-title">
                    <span className="Bold-title">JOB POSITION</span>
                    <br />
                    Company <br />
                    2018 - presenet
                  </p>
                  <p className="Work-exp-about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia rem ipsam, voluptas cumque veniam ipsum non vel
                    numquam? Sed consectetur, velit ex possimus eaque a tempore
                    rem ullam non deserunt?
                  </p>
                </div>
                <ul className="Work-exp-tasks" type="disc">
                  <li>Dalykas</li>
                  <li>Dalykas2</li>
                </ul>
              </div>

              <div className="Work-exp-block">
                <div className="Exp-info-wrap">
                  <p className="Work-exp-title">
                    <span className="Bold-title">JOB POSITION</span>
                    <br />
                    Company <br />
                    2018 - presenet
                  </p>
                  <p className="Work-exp-about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia rem ipsam, voluptas cumque veniam ipsum non vel
                    numquam? Sed consectetur, velit ex possimus eaque a tempore
                    rem ullam non deserunt?
                  </p>
                </div>
                <ul className="Work-exp-tasks" type="disc">
                  <li>Dalykas</li>
                  <li>Dalykas2</li>
                </ul>
              </div>

              <div className="Work-exp-block">
                <div className="Exp-info-wrap">
                  <p className="Work-exp-title">
                    <span className="Bold-title">JOB POSITION</span>
                    <br />
                    Company <br />
                    2018 - presenet
                  </p>
                  <p className="Work-exp-about">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia rem ipsam, voluptas cumque veniam ipsum non vel
                    numquam? Sed consectetur, velit ex possimus eaque a tempore
                    rem ullam non deserunt?
                  </p>
                </div>
                <ul className="Work-exp-tasks" type="disc">
                  <li>Dalykas</li>
                  <li>Dalykas2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="Gray-line-full"></div>

      <footer className="Footer">
        <div className="Footer-block">
          <h3 className="Footer-title">Address</h3>
          <p className="Footer-block-details">
            Street 28-15
            <br />
            Vilnius, Lietuva
          </p>
        </div>
        <div className="Footer-block">
          <h3 className="Footer-title">Kontaktai</h3>
          <p className="Footer-block-details">
            <a href="mailto:karolis@gmail.com" className="Footer-block-link">
              karolis@gmail.com
            </a>
            <br />
            <a href="tel:+37061621885" className="Footer-block-link">
              +37061621885
            </a>
          </p>
        </div>
        <div className="Footer-block">
          <h3 className="Footer-title">Social</h3>
          <p className="Footer-block-details">
            <a
              href="https://twitter.com/"
              target="_blank"
              className="Footer-block-link"
            >
              Twitter
            </a>
            <br />
            <a
              href="https://facebook.com/"
              target="_blank"
              className="Footer-block-link"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
