import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../shared/models/equipo.model';
import { EquiposService } from '../../shared/services/equipos.service';
import { Subscription } from 'rxjs';
import { isArray } from 'util';

@Component({
  selector: 'app-partidos-generador',
  templateUrl: './partidos-generador.component.html',
  styleUrls: ['./partidos-generador.component.scss']
})
export class PartidosGeneradorComponent implements OnInit {
  equipos: Equipo[] = [];
  subscription: Subscription;
  rondas: string[][] = [];

  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
    this.getEquipos();
  }

  getEquipos(): void {
    this.subscription = this.equiposService.cambiosEquipos
      .subscribe((equipos: Equipo[]) => {
        this.equipos = equipos;
      });
  }

  generarGrupos() {
    const cantidadEquipos = this.equipos.length;
    const totalRondas = this.equipos.length - 1;
    const partidosPorRonda = this.equipos.length / 2;
    const equiposRondas = this.equipos.slice();

    this.rondas = [];

    for (let j = 0; j < totalRondas; j++) {
      this.rondas[j] = [];

      for (let i = 0; i < partidosPorRonda; i++) {
        this.rondas[j][i] = equiposRondas[i].nombre + '-' + equiposRondas[cantidadEquipos - 1 - i].nombre;
      }

      equiposRondas.splice(1, 0, equiposRondas.pop());
    }
  }
}
