import { HttpHeaders } from "@angular/common/http";

export const dataMosBaseUrl = 'https://apidata.mos.ru/v1/';

export function getHeaders(): HttpHeaders {
	return new HttpHeaders({'content-type': 'application/json', 'cache-control': 'no-cache'});
}
