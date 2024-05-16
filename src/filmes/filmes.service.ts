import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { IFilme } from "./filme.model";
import { generateRandomId } from "../app/utils/generateRandomId";

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

    obterFilmes(): IFilme[] {
      return [
        {
          id: generateRandomId(),
          nome: 'Invocação do Mal 3'
        },
        {
          id: generateRandomId(),
          nome: 'Carros'
        }
      ]
    }

    obterFilmesApi(): Observable<IFilme[]> {
      return of(this.obterFilmes())
        .pipe(delay(1000));
    }
}
