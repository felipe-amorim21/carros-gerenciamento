import {
  ChangeDetectionStrategy,
  Component,
  Inject,
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
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { state } from '@angular/animations';

@Component({
  selector: 'app-carrosform',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    NgIf,
  ],
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './carrosform.component.html',
  styleUrl: './carrosform.component.scss',
})
export class CarrosformComponent implements OnInit {
  carro: Carro = new Carro(0, '', new Marca(0, '', []));
  marcas?: Marca[];
  selectedMarcaId?: number;

  constructor(
    private carroService: CarroService,
    private marcaService: MarcaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.marcaService.findAll().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
        this.loadCarro();
      },
    });
  }

  loadCarro() {
    let id = this.route.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    }
  }

  findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: (value) => {
        this.carro = value;
        this.selectedMarcaId = this.carro.marca.id;
        console.log('Carro encontrado:', this.carro);
      },
      error: (err) => {
        console.log('Error no método findById: ' + err);
      },
    });
  }

  onMarcaChange(id: number) {
    const marcaSelecionada = this.marcas?.find((marca) => marca.id === id);
    if (marcaSelecionada) {
      this.carro.marca = marcaSelecionada;
    }
  }

  onSubmit() {
    if (this.carro.id > 0) {
      this.carroService.update(this.carro, this.carro.id).subscribe({
        next: (carro) => {
          console.log('Carro atualizado com sucesso: ' + carro.nome);
          this.router.navigate(['admin/carros'], {
            state: { carroEditado: this.carro },
          });
        },
        error: (err) => {
          console.log('Error ao atualizar carro: ' + err);
        },
      });
    } else {
      this.carroService.save(this.carro).subscribe({
        next: (carro) => {
          console.log('Carro criado: ', carro);
          this.router.navigate(['admin/carros'], {
            state: { carroNovo: this.carro },
          });
        },
      });
    }
  }
}
