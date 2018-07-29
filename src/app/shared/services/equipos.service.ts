import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Equipo } from '../models/equipo.model';


@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  cambiosEquipos = new Subject<Equipo[]>();
  private equipos: Equipo[] = [];

  constructor() { }

  addEquipo(unEquipo: Equipo): void {
    this.equipos.push(unEquipo);
    this.cambiosEquipos.next(this.equipos.slice());
  }

  deleteEquipo(index: number): void {
    this.equipos.splice(index, 1);
    this.cambiosEquipos.next(this.equipos.slice());
  }
}
