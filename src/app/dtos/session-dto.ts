export interface SessionDTO {
  Id: string,
  Start: Date,
  RegistrationIds: string[],
  LeagueId: string,
  TrackId?: string
}
