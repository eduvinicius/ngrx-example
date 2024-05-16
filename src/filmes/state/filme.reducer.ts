import { createReducer, on } from "@ngrx/store";
import { IFilme } from "../filme.model";
import { filmeActions } from "./filme.actions";

enum FilmeStatusEnum {
  loading = 'loading',
  pending = 'pending',
  error = 'error',
  success = 'success'
}


export interface FilmeState {
  filmes: IFilme[],
  error: '' | null,
  status: FilmeStatusEnum
}


const initialState: FilmeState = {
  filmes: [],
  error: null,
  status: FilmeStatusEnum.pending,
}

export const filmeReducer = createReducer(
  initialState,
  on(filmeActions.carregarFilmes, (stateAtual) => {
    return {
      ...stateAtual,
      status: FilmeStatusEnum.loading
    }
  }),
  on(filmeActions.filmesCarregadosComSucesso, (stateAtual, filmes) => {
    return {
      ...stateAtual,
      filmes: filmes.filmes,
      status: FilmeStatusEnum.success
    }
  }),
  on(filmeActions.adicionarFilmes, (stateAtual, filme) => {
    return {
      ...stateAtual,
      filmes: [...stateAtual.filmes, filme]
    }
  })
)
