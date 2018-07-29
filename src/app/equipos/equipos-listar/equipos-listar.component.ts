import { Component, OnInit, OnDestroy } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Equipo } from '../../shared/models/equipo.model';
import { EquiposService } from '../../shared/services/equipos.service';

@Component({
  selector: 'app-equipos-listar',
  templateUrl: './equipos-listar.component.html',
  styleUrls: ['./equipos-listar.component.scss']
})
export class EquiposListarComponent implements OnInit, OnDestroy {
  faTrash = faTrash;  // Fontawesome icon
  subscription: Subscription;
  equipos: Equipo[];
  indexEquipo = -1;

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

  equipoSeleccion(index: number) {
    if (this.indexEquipo !== index) {
      this.indexEquipo = index;
    } else { this.indexEquipo = -1; }
  }

  borrarEquipo(): void {
    this.equiposService.deleteEquipo(this.indexEquipo);
    this.getEquipos();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
