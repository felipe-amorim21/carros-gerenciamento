import { Component, Inject, Input, OnInit } from '@angular/core';
import { CarroService } from '../../../services/carro.service';
import { Carro } from '../../../models/carro';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent implements OnInit {
  adicionarCarro(_t57: any) {
    throw new Error('Method not implemented.');
  }

  @Input() carros: Carro[] = [];
  // carroService = Inject(CarroService);
  displayedColumns: string[] = ['id', 'nome', 'marca', 'acessorio', 'acoes'];

  constructor(private carroService: CarroService) {}

  ngOnInit(): void {
    this.findAll();
  }
  deletarCarro(carro: Carro) {
    this.carroService.deleteById(carro.id).subscribe({
      next: () => {
        this.findAll();
      },
      error: (err) => {
        console.log(err);
        alert('Ocorreu um erro ao deletar o carro com id: ' + carro.id);
      },
    });
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
