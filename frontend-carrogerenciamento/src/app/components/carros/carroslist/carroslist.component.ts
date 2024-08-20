import { Component, Inject, Input, OnInit } from '@angular/core';
import { CarroService } from '../../../services/carro.service';
import { Carro } from '../../../models/carro';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent implements OnInit {
  @Input() carros: Carro[] = [];
  // carroService = Inject(CarroService);
  displayedColumns: string[] = ['id', 'nome', 'marca', 'acessorio'];

  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.carroService.findAll().subscribe({
      next: (carros: Carro[]) => {
        console.log('Carros recebidos:', carros);
        this.carros = carros;
      },
      error: (error: any) => {
        alert('Ocorreu um erro ao renderizar carroList');
        console.log(error);
      },
    });
  }
}
