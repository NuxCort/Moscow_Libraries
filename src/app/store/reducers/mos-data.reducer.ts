import { MosDataCellsModel, MosDataModel } from '../../models/mos-data.model';
import { MosDataActionTypes } from '../actions/mos-data.actions';

export interface State {
  mosData: Array<MosDataCellsModel>;
  loaded: boolean;
  categoryId: number;
  query: string;
  id: number,
  library: MosDataModel | null
}

export const initialState: State = {
  mosData: [],
  loaded: false,
  categoryId: 0,
  query: "",
  id: 0,
  library: null
};

export function mosDataReducer(state: State = initialState, action: any) {
  switch (action.type) {
    case MosDataActionTypes.LoadMosData:
      return {
        ...state,
        loaded: false,
        categoryId: action.payload.categoryId,
        query: action.payload.query
      };
    case MosDataActionTypes.MosDataLoadedSuccess:
      return {
        ...state,
        loaded: true,
        mosData: action.payload.mosData,
      };
    case MosDataActionTypes.MosDataLoadedError:
      return {
        ...state,
        loaded: false,
      };
    case MosDataActionTypes.SelectLibrary:
      return {
        ...state,
        loaded: false,
        id: action.payload.id
      };
    case MosDataActionTypes.SelectLibrarySuccess:
      return {
        ...state,
        loaded: true,
        library: action.payload.library,
      };
    case MosDataActionTypes.SelectLibraryError:
      return {
        ...state,
        loaded: false,
      };

    default:
      return state;
  }
}

export const selectAllMosData = (state: State) => state.mosData;
export const selectLibrary = (state: State) => state.mosData;
