import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import nexcent from "../assets/img/nexcent.png";
import portfolio from "../assets/img/portfolio.png";
import manga from "../assets/img/manga.png";
import realEstate from "../assets/img/real-estate.png";
import expenseTracker from "../assets/img/expense-tracker.png";
import todoList from "../assets/img/todo-list.png";

export const Projects = () => {
  const projects = [
    {
      title: "Nexcent",
      description: "Business Landing page",
      imgUrl: nexcent,
      link: "https://nexcent-eta.vercel.app/",
    },
    {
      title: "My Portfolio",
      description: "This shocase my projects",
      imgUrl: portfolio,
      link: "https://portfolio-sheriffs-projects.vercel.app/",
    },
    {
      title: "Manga website",
      description: "An Open-source project courtesy of Daniel Asakpa",
      imgUrl: manga,
      link: "https://manga-website-ashen.vercel.app/",
    },
    {
      title: "Real Estate",
      description: "Business Page",
      imgUrl: realEstate,
      link: "https://real-estate-plum-ten.vercel.app/",
    },
    {
      title: "Expense Tracker",
      description: "Personal finance app",
      imgUrl: expenseTracker,
      link: "https://expense-tracker-beta-seven.vercel.app/",
    },
    {
      title: "Todo List",
      description: "An utility app",
      imgUrl: todoList,
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
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
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
