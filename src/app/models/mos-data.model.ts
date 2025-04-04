export interface MosDataModel {
  ShortName: string;
  FullName: string
  ObjectAddress: Array<ObjectAddress>;
  Category: string;
  ChiefName: string;
  ChiefPosition: string;
  PublicPhone: Array<{ PublicPhone: string }>;
  Email: Array<{ Email: string }>;
  WebSite: string;
  NumOfSeats: number;
  NumOfReaders: number;
  NumOfVisitors: number;
}

export interface MosDataCellsModel {
  Cells: MosDataModel;
  Number: number;
  global_id: number;
}

export interface ObjectAddress {
  Address: string;
}

export enum CategoryIds {
  Libraries = 526,
}
