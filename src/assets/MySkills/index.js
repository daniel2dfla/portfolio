import { Container, Grid, Card, Info } from './styles'
import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiReact } from "react-icons/di";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, color: "#E44D26" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, color: "#1572B6" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, color:"#F0DB4F"},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, color:"#83CD29"},
  { id: "mysql", name: "MySQL", icon: <DiMysql />, color: "#00618A"},
  { id: "react", name: "React", icon: <DiReact /> ,color: "#61DAFB"},
];

const index = () => {

  return (
    <Container id='myskills'>
      <h2>Minhas Habilidades!</h2>
      <Grid>
        {technologies.map((tech) => (
          <Card id={tech.id} key={tech.id} color={tech.color}>
            {tech.icon}
            <Info>
              <h3>{tech.name}</h3>

            </Info>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default index