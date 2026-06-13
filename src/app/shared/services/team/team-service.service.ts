import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamResponse } from '../../../core/models/team-response';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly http = inject(HttpClient);

  getTeam(): Observable<TeamResponse> {
    return this.http.get<TeamResponse>('data/team.json');
  }
}
