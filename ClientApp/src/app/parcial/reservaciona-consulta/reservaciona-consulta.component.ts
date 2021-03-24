import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import { PersonaService } from '../../services/persona.service';


@Component({
  selector: 'app-reservacion-consulta',
  templateUrl: './reservaciona-consulta.component.html',
  styleUrls: ['./reservaciona-consulta.component.css']
})
export class ReservacionaConsultaComponent implements OnInit {
  personas: Persona[];
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personas = this.personaService.get();
  }

}