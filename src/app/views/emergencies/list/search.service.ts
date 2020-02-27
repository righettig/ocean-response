import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(emergencyId: number, responseRadius: number, positionsReceivedInLast: number) {
    return this.http.get(environment.SEARCH_URL,
      {
        params: {
          emergencyId: emergencyId.toString(),
          responseRadius: responseRadius.toString(),
          positionsReceivedInLast: positionsReceivedInLast.toString()
        }
      }
    )
  }

}