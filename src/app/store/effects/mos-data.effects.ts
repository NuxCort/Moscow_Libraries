import { inject, Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import {
  LoadMosData,
  MosDataActionTypes,
  MosDataLoadedError,
  MosDataLoadedSuccess,
  SelectLibrary,
  SelectLibraryError,
  SelectLibrarySuccess,
} from '../actions/mos-data.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MosDataService } from '../../services/mos-data.service';
import { MosDataModel } from '../../models/mos-data.model';

@Injectable()
export class MosDataEffects {
  private readonly actions$: Actions = inject(Actions);
  private readonly mosDataService: MosDataService = inject(MosDataService);

  public readonly loadMosData$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(MosDataActionTypes.LoadMosData),
      mergeMap((action: LoadMosData) => {
        return this.mosDataService
          .getMosDataByIdAndQuery(action.payload.categoryId, action.payload.query)
          .pipe(
            map((mosData: any) => {
              const nestedMosData = mosData.map((item: any) => item);
              return new MosDataLoadedSuccess({mosData: nestedMosData});
            }),
            catchError(() => of(new MosDataLoadedError()))
          );
      })
    );
  });

  public readonly selectLibrary$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(MosDataActionTypes.SelectLibrary),
      mergeMap((action: SelectLibrary) => {
        return this.mosDataService
          .getLibraryById(action.payload.id)
          .pipe(
            map((library: any) => {
              return new SelectLibrarySuccess({library});
            }),
            catchError(() => of(new SelectLibraryError()))
          );
      })
    );
  });
}
