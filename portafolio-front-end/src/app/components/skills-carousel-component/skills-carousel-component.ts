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
    {name: 'Java', img: 'assets/java.png'},
    {name: 'Python', img: 'assets/Spring.png'},
    {name: 'JavaScript', img: 'assets/type.png'},
    {name: 'TypeScript', img: 'assets/type.png'},
    {name: 'SQL', img: ''}
  ];

   

   frameAndTecnoSSecAutkills = [
    {name: 'Spring Boot', img: 'assets/java.png'},
    {name: 'HTML', img: 'assets/Spring.png'},
    {name: 'CSS', img: 'assets/angular.svg'},
    {name: 'MySQL', img: 'assets/type.png'},
    {name: 'JWT', img: 'assets/java.png'},
    {name: 'Spring Security', img: 'assets/Spring.png'}
    
  ];

  devAndToolsSkills = [
    {name: 'Docker', img: 'assets/java.png'},
    {name: 'Git', img: 'assets/Spring.png'},
    {name: 'GitHub', img: 'assets/angular.svg'},
    {name: 'VS Code', img: 'assets/type.png'},
    {name: 'Linux', img: ''}
  ];

  skillsProgramer = [...this.programerSkills, ...this.programerSkills]; 
  SkillsFrameworks = [...this.frameAndTecnoSSecAutkills, ...this.frameAndTecnoSSecAutkills];
  SkillsTools = [...this.devAndToolsSkills, ...this.devAndToolsSkills]

}
