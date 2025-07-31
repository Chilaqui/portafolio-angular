import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: false,
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {

  isDark = true;

  ngOnInit(): void {
    this.applyTheme(this.isDark);
  }

  toggleTheme(){
    this.isDark = !this.isDark;
    this.applyTheme(this.isDark);
    
  }

  applyTheme(isDark: boolean){
    const body = document.body;
    body.classList.toggle('dark-theme', this.isDark);
    body.classList.toggle('light-theme', !this.isDark);
  }

}
