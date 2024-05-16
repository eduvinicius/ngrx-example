import { ActionReducerMap } from "@ngrx/store";
import { livroReducer } from "../../livros/state/livro.reducer";
import { IAppState } from "./app.state";
import { filmeReducer } from "../../filmes/state/filme.reducer";

export const appReducers: ActionReducerMap<IAppState> = {
  livros: livroReducer,
  filmes: filmeReducer
}
