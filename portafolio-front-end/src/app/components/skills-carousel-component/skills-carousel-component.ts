import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-carousel-component',
  standalone: false,
  templateUrl: './skills-carousel-component.html',
  styleUrl: './skills-carousel-component.css'
})
export class SkillsCarouselComponent {
 /* originalSkills = [
    'Java',
    'Spring Boot',
    'Angular',
    'TypeScript',
    'HTML',
    'CSS',
    'Git',
    'SQL',
    'Docker',
    'Linux'
  ]; */

   programerSkills = [
    {name: 'Java', img: 'assets/img/skills/java.png'},
    {name: 'Python', img: 'assets/img/skills/python.png'},
    {name: 'JavaScript', img: 'assets/img/skills/js.png'},
    {name: 'TypeScript', img: 'assets/img/skills/ts.png'},
    {name: 'SQL', img: 'assets/img/skills/sql.png'}
  ];

   

   frameAndTecnoSSecAutkills = [
    {name: 'Spring Boot', img: 'assets/img/skills/spring.svg'},
    {name: 'HTML', img: 'assets/img/skills/html.png'},
    {name: 'CSS', img: 'assets/img/skills/css.png'},
    {name: 'MySQL', img: 'assets/img/skills/mysql.png'},
    {name: 'JWT', img: 'assets/img/skills/jwt.png'},
    {name: 'Spring Security', img: 'assets/img/skills/security.svg'}
    
  ];

  devAndToolsSkills = [
    {name: 'Docker', img: 'assets/img/skills/docker.png'},
    {name: 'Git', img: 'assets/img/skills/git.png'},
    {name: 'GitHub', img: 'assets/img/skills/github.png'},
    {name: 'VS Code', img: 'assets/img/skills/visual.png'},
    {name: 'Linux', img: 'assets/img/skills/linux.png'}
  ];

  skillsProgramer = [...this.programerSkills, ...this.programerSkills]; 
  SkillsFrameworks = [...this.frameAndTecnoSSecAutkills, ...this.frameAndTecnoSSecAutkills];
  SkillsTools = [...this.devAndToolsSkills, ...this.devAndToolsSkills]

}
