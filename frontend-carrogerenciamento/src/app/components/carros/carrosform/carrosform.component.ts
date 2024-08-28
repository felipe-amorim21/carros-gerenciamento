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
export class CarrosformComponent {
  @Input('carro') carro: Carro = new Carro(0, '', null);
  marcas?: Marca[];

  constructor(
    private carroService: CarroService,
    private marcaService: MarcaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.marcaService.findAll().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
      },
    });
    let id = this.route.snapshot.params['id'];
    if (id > 0) {
      this.findById(id);
    } else {
      if (this.carro.id > 0) {
        this.findById(id);
      }
    }
  }
  findById(id: number) {
    this.carroService.findById(id).subscribe({
      next: (value) => {
        this.carro = value;
      },
      error: (err) => {
        console.log('Error no método findById: ' + err);
      },
    });
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
    }
  }
}
