import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { FilmeService } from "../filmes.service";
import { filmeActions } from "./filme.actions";

export const buscarFilmeEffect = createEffect(
  (actions$ = inject(Actions), filmeService = inject(FilmeService)) => {
    return actions$
      .pipe(
        ofType(filmeActions.carregarFilmes),
        tap(() => console.log('Passou pelo Effect')),
        switchMap(() => filmeService.obterFilmesApi()
          .pipe(
            map(filmes => filmeActions.filmesCarregadosComSucesso({ filmes }))
          )
        )
      )
  }, { functional: true }
)
