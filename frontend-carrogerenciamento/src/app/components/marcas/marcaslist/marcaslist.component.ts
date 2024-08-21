import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../../services/marca.service';
import { Marca } from '../../../models/marca';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-marcaslist',
  standalone: true,
  imports: [NgFor],
  templateUrl: './marcaslist.component.html',
  styleUrl: './marcaslist.component.scss',
})
export class MarcaslistComponent implements OnInit {
  marcas: Marca[] = [];

  constructor(private marcaService: MarcaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.marcaService.findAll().subscribe({
      next: (marcas: Marca[]) => {
        console.log('Marcas recebidas: ', marcas);
        this.marcas = marcas;
      },
      error: (error: any) => {
        console.log(error);
        alert('Ocorreu um erro ao renderizar marcaList');
      },
    });
  }
}
