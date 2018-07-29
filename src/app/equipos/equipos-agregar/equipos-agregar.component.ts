import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Equipo } from '../../shared/models/equipo.model';
import { EquiposService } from '../../shared/services/equipos.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-equipos-agregar',
  templateUrl: './equipos-agregar.component.html',
  styleUrls: ['./equipos-agregar.component.scss']
})
export class EquiposAgregarComponent implements OnInit {
  nombreEquipo = new FormControl('');

  constructor(private equiposService: EquiposService) { }

  ngOnInit() {
  }

  agregarEquipo() {
    if (this.nombreEquipo.valid && this.nombreEquipo.value.trim().length) {
      this.equiposService.addEquipo(new Equipo(this.nombreEquipo.value));
    }
    this.nombreEquipo = new FormControl('');
  }
}
