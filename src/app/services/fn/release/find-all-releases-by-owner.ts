/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseReleaseResponse } from '../../models/page-response-release-response';

export interface FindAllReleasesByOwner$Params {
  page?: number;
  size?: number;
}

export function findAllReleasesByOwner(http: HttpClient, rootUrl: string, params?: FindAllReleasesByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseReleaseResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllReleasesByOwner.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseReleaseResponse>;
    })
  );
}

findAllReleasesByOwner.PATH = '/releases/owner';
