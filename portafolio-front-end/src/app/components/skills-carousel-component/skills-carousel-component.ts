import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-carousel-component',
  standalone: false,
  templateUrl: './skills-carousel-component.html',
  styleUrl: './skills-carousel-component.css'
})
export class SkillsCarouselComponent {
 originalSkills = [
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
  ];

  skills = [...this.originalSkills, ...this.originalSkills]; 
}
