import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: []
})
export class ClasesComponent implements OnInit {

  alertD = "alert-danger";

  loading = false;

  properties = {
    danger: false
  };


  constructor() { }

  ngOnInit() {
  }

  execute(){
    this.loading = true;

    setTimeout( ()=> this.loading = false, 3000 )
  }

}
