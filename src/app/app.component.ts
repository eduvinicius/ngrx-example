import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { LivroService } from '../livros/livro.service';
import { livroActions } from '../livros/state/livro.actions';
import { livrosSelector } from '../livros/state/livro.selectors';
import { filmesSelector } from '../filmes/state/filme.selector';
import { filmeActions } from '../filmes/state/filme.actions';
import { generateRandomId } from './utils/generateRandomId';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx-aula';

  livroService = inject(LivroService);
  store = inject(Store);

  livros$ = this.store.select(livrosSelector);
  livroInput = '';
  filmes$ = this.store.select(filmesSelector);
  filmesInput = '';

  ngOnInit(): void {
    this.store.dispatch(livroActions.carregarLivros());
    this.store.dispatch(filmeActions.carregarFilmes());
  }

  adicionar(){
    this.store.dispatch(livroActions.adicionarLivros(
      {
        id: 10,
        nome: this.livroInput
      }
    ))
  }

  adicionarFilme() {
    this.store.dispatch(filmeActions.adicionarFilmes(
      {
        id: generateRandomId(),
        nome: this.filmesInput
      }
    ))
  }

  // ngOnInit(): void {
  //   this.livros = this.livroService.obterLivros();
  // }

}
