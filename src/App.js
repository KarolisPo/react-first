import './reset.css';
import './App.css';
import TwitterLogo from './images/twitter_colored.png';
import GithubLogo from './images/github.png';

import ListItem from './components/ListItem';
import ContentWrap from './components/ContentWrap';
import WorkExpBlock from './components/WorkExpBlock';
import FooterBlock from './components/FooterBlock';
import Pill from './components/Pill';

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
          <ContentWrap className="Left-block" title="Links">
            <ListItem src={GithubLogo} href="https://github.com/">
              GITHUB/username
            </ListItem>
            <ListItem src={GithubLogo} href="https://github.com/">
              GITHUB/username
            </ListItem>
            <ListItem src={GithubLogo} href="https://github.com/">
              GITHUB/username
            </ListItem>
            <ListItem src={GithubLogo} href="https://github.com/">
              GITHUB/username
            </ListItem>
          </ContentWrap>
          <ContentWrap className="Right-block" title="About me">
            <p className="Paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              quisquam recusandae autem voluptate corrupti inventore ad laborum
              porro blanditiis accusantium? Cupiditate libero laborum fugiat
              molestiae, illum consequatur asperiores nostrum. Deserunt. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Maiores omnis
              molestias laboriosam nulla eveniet laudantium ipsam labore nobis
              eaque. Alias hic culpa soluta, ea sit ut accusamus nisi ipsam
              officiis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorum distinctio facere facilis unde tenetur magnam, est,
              voluptate obcaecati voluptates, et veritatis delectus nobis? Rerum
              amet id maiores vitae esse nemo.
            </p>
          </ContentWrap>
        </div>
      </section>

      <section>
        <div className="Education-personal-technical">
          <ContentWrap title="Education">
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
          </ContentWrap>
          
          <ContentWrap title="Personal skills">
            <Pill className="My-skill-perfect">teamwork</Pill>
            <Pill className="My-skill-good">communication</Pill>
            <Pill className="My-skill-viable">organization</Pill>
          </ContentWrap>

          <ContentWrap title="Technical skills">
            <Pill className="My-skill-perfect">css</Pill>
            <Pill className="My-skill-perfect">html</Pill>
            <Pill className="My-skill-viable">react.js</Pill>
          </ContentWrap>
        </div>
      </section>

      <section>
        <ContentWrap title="Work experience">
          <div className="Work-exp-wrap">
            <WorkExpBlock
              position="Position"
              company="MyCompany"
              date="2018 - TODAY"
              task1="Dalykas"
              task2="Dalykas2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </WorkExpBlock>
            <WorkExpBlock
              position="Position"
              company="MyCompany"
              date="2018 - TODAY"
              task1="Dalykas"
              task2="Dalykas2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </WorkExpBlock>
            <WorkExpBlock
              position="Position"
              company="MyCompany"
              date="2018 - TODAY"
              task1="Dalykas"
              task2="Dalykas2"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </WorkExpBlock>
          </div>
        </ContentWrap>
      </section>

      <div class="Gray-line-full"></div>

      <footer className="Footer">
        <FooterBlock title="Address">
          Street 28-15
          <br />
          Vilnius, Lietuva
        </FooterBlock>
        <FooterBlock title="Contacts">
          <a href="mailto:karolis@gmail.com" className="Footer-block-link">
            karolis@gmail.com
          </a>
          <br />
          <a href="tel:+37061621885" className="Footer-block-link">
            +37061621885
          </a>
        </FooterBlock>
        <FooterBlock title="Social">
          <a
            href="https://twitter.com/"
            target="_blank"
            className="Footer-block-link"
          >
            Twitter
          </a>
          <br />
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="Footer-block-link"
          >
            Linkedin
          </a>
        </FooterBlock>
      </footer>
    </div>
  );
}

export default App;
