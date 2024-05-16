import { IAppState } from "../../app/state/app.state";

export const filmesSelector = (appState: IAppState) => appState.filmes.filmes;
