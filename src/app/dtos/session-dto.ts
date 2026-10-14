import {SessionStatus} from '../enums/session-status';

export interface SessionDTO {
  id: string,
  start: Date,
  registrationIds: string[],
  status: SessionStatus,
  leagueId: string,
  trackId?: string
}
