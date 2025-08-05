import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  standalone: false,
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {

  showDownloadMessage = false;
  showDownloadMessageCvTerminal = false;
  

  startDownload() {
  this.showDownloadMessage = true;
  setTimeout(() => {
    this.showDownloadMessage = false;
  }, 3000);
  
}

startDownloadCvTerminal() {
  this.showDownloadMessageCvTerminal = true;
  setTimeout(() => {
    this.showDownloadMessageCvTerminal = false;
  }, 3000);
  
}



}
