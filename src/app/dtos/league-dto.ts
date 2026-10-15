import {SessionDTO} from './session-dto';

export interface LeagueDTO {
  id: string,
  name: string,
  description?: string,
  interval: number,
  start: Date,
  end: Date,
  practice?: Event,
  qualify?: Event,
  race?: Event,
  currentTrackId: string,
  currentClassIds: string[],
  sessions: SessionDTO[]
}

interface Event {
  sessionName: string,
  durationInMinutes: number,
  laps: number
}
