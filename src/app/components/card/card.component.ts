import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public libros: Libro[];

  constructor() {
    this.libros = [
      new Libro(1, 2, "Libro1", "Tapa blanda", "Ken Follet", 20, "https://smash-images.photobox.com/original/9d6e4dea778c09379f8a3458d407ba309f5e9672_Roadtrip.jpg"),
      new Libro(2, 3, "Libro2", "Tapa blanda", "Dan Brown", 25, "https://smash-images.photobox.com/original/af32ab86aa193bff0e6ba3331e28296f54176748_Libro-Vertical-de-fotos-calidad-ord.jpg"),
      new Libro(3, 4, "Libro3", "Tapa dura", "Autor 3", 55, "https://http2.mlstatic.com/D_NQ_NP_936670-MLA43542862231_092020-O.jpg"),
    ]
  }

  ngOnInit(): void { }



}
