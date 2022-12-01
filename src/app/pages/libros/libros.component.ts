import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[];

  constructor() {
    this.libros = [
      new Libro(1, 2, "Libro1", "Tapa blanda", "Ken Follet", 20, "https://smash-images.photobox.com/original/9d6e4dea778c09379f8a3458d407ba309f5e9672_Roadtrip.jpg"),
      new Libro(2, 3, "Libro2", "Tapa blanda", "Dan Brown", 25, "https://smash-images.photobox.com/original/af32ab86aa193bff0e6ba3331e28296f54176748_Libro-Vertical-de-fotos-calidad-ord.jpg"),
      new Libro(3, 4, "Libro3", "Tapa dura", "Autor 4", 10, "https://http2.mlstatic.com/D_NQ_NP_936670-MLA43542862231_092020-O.jpg"),
      new Libro(4, 5, "Libro4", "Tapa blanda", "Dan Brown", 25, "https://smash-images.photobox.com/optimised/57243ba7ff5316203b025e21f2959e92c8cb0bec_file_mobile_Photo-books-Hero-banner-range-page-5760x4512.jpg"),
      new Libro(6, 7, "Libro5", "Tapa dura", "Autor 5", 12, "https://lamenteesmaravillosa.com/wp-content/uploads/2016/01/libro-abierto-420x263.jpg")
    ]
  }


  ngOnInit(): void { }

  addLibro(titulo: HTMLInputElement, tipoLibro: HTMLInputElement, autor: HTMLInputElement, precio: HTMLInputElement, Photo: HTMLInputElement, id_libro: HTMLInputElement) {

    this.libros.push(new Libro(Number(id_libro.value), 0, titulo.value, tipoLibro.value, autor.value, Number(precio.value), Photo.value))

  }
}
