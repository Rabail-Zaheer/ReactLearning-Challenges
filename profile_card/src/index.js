import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Sass",
    level: "intermediate",
    color: "#cd6799",
  },
  {
    skill: "Bootstrap5",
    level: "advanced",
    color: "#ea80fc",
  },
  {
    skill: "Tailwind",
    level: "intermediate",
    color: "#b8c2cc",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="Rabail_Zaheer.jpg"
      alt="Rabail Zaheer Kalhoro"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Rabail Zaheer Kalhoro</h1>
      <p>
        Front-end web developer and fellow at Bytewise Ltd. When not coding or
        working in general, I like to play board games, to cook (and eat), or to
        just enjoy classic sitcoms and series.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
