import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient) {
  }

  search(emergencyId: number, responseRadius: number, positionsReceivedInLast: number) {
    return this.http.get("http://localhost:3120/api/search",
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