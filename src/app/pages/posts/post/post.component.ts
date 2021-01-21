import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() mensaje;// para recibir parametros del componente padre
  @Output() clickPost = new EventEmitter<number>();// para mandar info al componente padre de tipo NUMBER

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.mensaje.id);
  }

}
