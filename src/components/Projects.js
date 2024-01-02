import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import evergreen from "../assets/projects/evergreen.png";
import shopper from "../assets/projects/shopper.png";
import yuki from "../assets/projects/yuki.png";
import portfolio from "../assets/projects/portfolio.png";
import expenseTracker from "../assets/projects/expense-tracker.png";
import taskApp from "../assets/projects/task-app.png";

export const Projects = () => {
  const projects = [
    {
      title: "Evergreen",
      description: "A Landscape Gardening website",
      imgUrl: evergreen,
      githubLink: "https://github.com/sheriff-demilade/evergreen",
      link: "https://evergreenproject.vercel.app/",
    },
    {
      title: "Shopper",
      description: "An E-Commerce website",
      imgUrl: shopper,
      githubLink: "https://github.com/sheriff-demilade/ecommerce",
      link: "https://ecommerce-psi-lac.vercel.app/mens",
    },
    {
      title: "Yuki Magazine",
      description: "An Open-source Ebook website",
      imgUrl: yuki,
      githubLink: "https://github.com/sheriff-demilade/Manga_Website",
      link: "https://manga-website-ashen.vercel.app/",
    },
    {
      title: "My Portfolio",
      description: "This shocase my projects",
      imgUrl: portfolio,
      githubLink: "https://github.com/sheriff-demilade/portfolio",
      link: "https://portfolio-sheriffs-projects.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description: "Personal finance app",
      imgUrl: expenseTracker,
      githubLink: "https://github.com/sheriff-demilade/expense-tracker",
      link: "https://expense-tracker-beta-seven.vercel.app/",
    },
    {
      title: "Tasks App",
      description: "An utility app",
      imgUrl: taskApp,
      githubLink: "https://github.com/sheriff-demilade/todo-list-app",
      link: "https://todo-list-app-six-pi.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    These are the projects I have built and contributed too,
                    using React Js.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="color shape"
        src={colorSharp2}
      ></img>
    </section>
  );
};
