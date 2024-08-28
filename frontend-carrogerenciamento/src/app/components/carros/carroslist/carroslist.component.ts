import { Component, Inject, Input, OnInit } from '@angular/core';
import { CarroService } from '../../../services/carro.service';
import { Carro } from '../../../models/carro';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent implements OnInit {
  @Input() carros: Carro[] = [];
  // carroService = Inject(CarroService);
  displayedColumns: string[] = ['id', 'nome', 'marca', 'acessorio', 'acoes'];

  constructor(private carroService: CarroService, private router: Router) {
    let carroEditado = history.state.carroEditado;
    let carroNovo = history.state.carroNovo;

    if (carroNovo != null) {
      this.carros.push(carroNovo);
    }

    if (carroEditado != null) {
      let index = this.carros.findIndex((carro) => {
        return carro.id === carroEditado.id;
      });
      this.carros[index] = carroEditado;
    }
  }

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

  editarCarro(carro: Carro) {
    this.router.navigate([`/admin/carros/edit/${carro.id}`]);
  }

  criarCarro() {
    this.router.navigate(['admin/carros/edit']);
  }

  findAll() {
    this.carroService.findAll().subscribe({
      next: (carros: Carro[]) => {
        console.log('Carros recebidos:', carros);
        this.carros = carros;
      },
      error: (err: any) => {
        console.log(err);
        alert('Ocorreu um erro ao renderizar carroList');
      },
    });
  }
}
