import { Action } from "@ngrx/store";
import { MosDataCellsModel, MosDataModel } from "../../models/mos-data.model";


export enum MosDataActionTypes {
  LoadMosData = '[MosData] Load Mos Data',
  MosDataLoadedSuccess = '[MosData] Mos Data Loaded Success',
  MosDataLoadedError = '[MosData] Mos Data Loaded Error',

  SelectLibrary = '[SelectLibrary] SelectLibrary',
  SelectLibrarySuccess = '[SelectLibrary] SelectLibrary Success',
  SelectLibraryError = '[SelectLibrary] SelectLibrary Error',
}

export class LoadMosData implements Action {
    readonly type = MosDataActionTypes.LoadMosData;

    constructor(public payload: { categoryId: number, query: string }) {}
}

export class MosDataLoadedSuccess implements Action {
    readonly type = MosDataActionTypes.MosDataLoadedSuccess;

    constructor(public payload: { mosData: Array<MosDataCellsModel> }) {}
}

export class MosDataLoadedError implements Action {
    readonly type = MosDataActionTypes.MosDataLoadedError;
}

export class SelectLibrary implements Action {
  readonly type = MosDataActionTypes.SelectLibrary;

  constructor(public payload: { id: number }) {}
}

export class SelectLibrarySuccess implements Action {
  readonly type = MosDataActionTypes.SelectLibrarySuccess;

  constructor(public payload: { library: MosDataModel }) {}
}

export class SelectLibraryError implements Action {
  readonly type = MosDataActionTypes.SelectLibraryError;
}

export type MosDataUnion =
  LoadMosData
  | MosDataLoadedSuccess
  | MosDataLoadedError
  | SelectLibrary
  | SelectLibrarySuccess
  | SelectLibraryError;
