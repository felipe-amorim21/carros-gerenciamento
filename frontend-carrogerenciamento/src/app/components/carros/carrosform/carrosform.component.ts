import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarroService } from '../../../services/carro.service';
import { MarcaService } from '../../../services/marca.service';
import { Marca } from '../../../models/marca';
import { FormsModule } from '@angular/forms';
import { Carro } from '../../../models/carro';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-carrosform',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgFor,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './carrosform.component.html',
  styleUrl: './carrosform.component.scss',
})
export class CarrosformComponent implements OnInit {
  constructor(
    private carroService: CarroService,
    private marcaService: MarcaService,
    private activatedRouter: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  @Input('carro') carro: Carro = new Carro(0, '', null);
  marcas: Marca[] = [];
  @Input('marca') marcaSelecionada: Marca = new Marca(0, '', []);

  ngOnInit(): void {
    this.marcaService.findAll().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
        if (this.carro.marca) {
          this.marcaSelecionada = this.marcas.find(
            (m) => m.id === this.carro.marca.id
          )!;
        }
      },
      error: (err) => {
        console.log(err);
        alert('Ocorreu um erro trazer a lista de marcas');
      },
    });

    let id = this.activatedRouter.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  onSubmit(): void {
    // Lógica para enviar o formulário
    console.log(this.carro, this.marcaSelecionada);
  }

  findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: (carro) => {
        this.carro = carro;
        console.log('Carro recebido:', carro);
        this.marcaSelecionada = carro.marca;
        this.marcaSelecionada = this.marcas.find(
          (m) => m.id === carro.marca.id
        )!;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
