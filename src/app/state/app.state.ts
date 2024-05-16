import { FilmeState } from "../../filmes/state/filme.reducer";
import { LivroState } from "../../livros/state/livro.reducer";

export interface IAppState {
  livros: LivroState,
  filmes: FilmeState
}
