import { inject, Injectable } from "@angular/core";
import { environment } from "../../../environment";
import { HttpClient } from "@angular/common/http";
import { MosDataModel } from "../models/mos-data.model";
import { Observable } from "rxjs";
import { dataMosBaseUrl } from "./api.config";

@Injectable({providedIn: 'root', })
export class MosDataService {
  private readonly env = environment;
  private readonly http: HttpClient = inject(HttpClient);

  public getMosDataByIdAndQuery(categoryId: number, query: string): Observable<Array<MosDataModel>> {
    const url = `${dataMosBaseUrl}datasets/${categoryId}/rows?q=${query}&api_key=${this.env.apiKey}`;
    return this.http.get<Array<MosDataModel>>(url);
  }

  public getLibraryById(id: number): Observable<MosDataModel> {
    const url = `${dataMosBaseUrl}datasets/526/rows?q=${id}&api_key=${this.env.apiKey}`;
    return this.http.get<MosDataModel>(url);
  }
}
