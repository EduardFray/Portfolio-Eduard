import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


  skills = [
    {
      name: 'HTML',
      img: './assets/images/skills/html.png'
    },
    {
      name: 'CSS',
      img: './assets/images/skills/css.png'
    },
    {
      name: 'JavaScript',
      img: './assets/images/skills/Javascript.png'
    },
    {
      name: 'TypeScript',
      img: './assets/images/skills/typescript.png'
    },
    {
      name: 'Angular',
      img: './assets/images/skills/Angular.png'
    },
    {
      name: 'Firebase',
      img: './assets/images/skills/Firebase.png'
    },
    {
      name: 'GIT',
      img: './assets/images/skills/git.png'
    },
    {
      name: 'Rest-Api',
      img: './assets/images/skills/api.png'
    },
    {
      name: 'Scrum',
      img: './assets/images/skills/scrum.png'
    },
    {
      name: 'Material Design',
      img: './assets/images/skills/Frame.png'
    },
    {
      name: 'Continually learning',
      img: './assets/images/skills/learning.png',
      hovered: false
    }
  ];

  hovered = false;
}
