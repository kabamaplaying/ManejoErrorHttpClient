import { Component, VERSION, OnInit } from '@angular/core';
import { PlacheHolderService } from './services/placheholder.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private service: PlacheHolderService) {
    this.getTodosNotFound();
  }

  ngOnInit() {

  }

    getTodosNotFound() {
      this.service.getTodosNotFound().subscribe(data => console.log(data));
    }
}
