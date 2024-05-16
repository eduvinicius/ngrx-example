import { createAction, props } from "@ngrx/store";
import { IFilme } from "../filme.model";

const carregarFilmes = createAction('[Filmes] Carregar Filmes');
const filmesCarregadosComSucesso = createAction(
  '[Filmes] Filmes Carregados Com Sucesso', props<{ filmes: IFilme[] }>()
)

const adicionarFilmes = createAction(
  '[Filmes] Adicionar Filmes', props<IFilme>()
)

export const filmeActions = {
  carregarFilmes,
  filmesCarregadosComSucesso,
  adicionarFilmes
}
