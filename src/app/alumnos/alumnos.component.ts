import { Component } from '@angular/core';

interface Alumno {
  nombre: string;
  sexo: string;
  notas: number[];
  notaFinal: number;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [];
  filtrado: string = '';
  aprobados: boolean = false;

  getAlumnosFiltrados(): Alumno[] {
    let alumnosFiltrados = this.alumnos;

    if (this.filtrado) {
      alumnosFiltrados = alumnosFiltrados.filter(alumno =>
        alumno.nombre.toLowerCase().includes(this.filtrado.toLowerCase())
      );
    }

    if (this.aprobados) {
      alumnosFiltrados = alumnosFiltrados.filter(alumno =>
        alumno.notaFinal > 6
      );
    }

    return alumnosFiltrados;
  }

  agregarAlumno(nombre: string, sexo: string, notas: string[]): void {
    const notasNumericas: number[] = notas.map(nota => parseFloat(nota));
    const notaFinal = this.calcularNotaFinal(notasNumericas).toFixed(2);
    const alumno: Alumno = {
      nombre,
      sexo,
      notas: notasNumericas,
      notaFinal: parseFloat(notaFinal)
    };
  
    this.alumnos.push(alumno);
  }
  
  private calcularNotaFinal(notas: number[]): number {
    const sum = notas.reduce((a, b) => a + b, 0);
    const promedio = sum / notas.length;
    return promedio;
  }
  borrarAlumno(index: number): void {
    this.alumnos.splice(index, 1);
  }

  
}

