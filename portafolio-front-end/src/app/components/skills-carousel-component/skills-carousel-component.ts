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

  originalSkills = [
    {name: 'Java', img: 'assets/java.png'},
    {name: 'Spring Boot', img: 'assets/spring.svg'},
    {name: 'Angular', img: 'assets/angular.svg'},
    {name: 'TypeScript', img: ''},
    {name: 'HTML', img: ''},
    {name: 'CSS', img: ''},
    {name: 'Git', img: ''},
    {name: 'SQL', img: ''},
    {name: 'Docker', img: ''},
    {name: 'Linux', img: ''}


  ];

  skills = [...this.originalSkills, ...this.originalSkills]; 
}
