import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  githubLink,
}) => {
  return (
    <Col size={12} sm={6} md={4} style={{ margin: "20px 0" }}>
      <div className="proj-imgbx" style={{ height: "180px" }}>
        <img src={imgUrl} style={{ height: "100%", width: "100%" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div
            className="mt-4"
            style={{ display: "flex", justifyContent: "center", gap: "16px" }}
          >
            <Button href={githubLink} target="_blank" variant="outline-info">
              View Code
            </Button>
            <Button href={link} target="_blank" variant="outline-light">
              Live Preview
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
