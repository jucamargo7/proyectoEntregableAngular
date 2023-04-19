import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contenido-general',
  templateUrl: './contenido-general.component.html',
  styleUrls: ['./contenido-general.component.css']
})
export class ContenidoGeneralComponent implements OnInit{
public listaAlumnos = ['Miguel Cervantes', 'Daniel Navarro', 'Jaime Cárdenas', 'Natalia Camargo'];
ngOnInit(): void {
  
}

}
