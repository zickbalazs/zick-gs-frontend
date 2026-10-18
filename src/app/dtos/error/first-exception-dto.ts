export interface FirstExceptionDto {
  code: number,
  message: {
    detail: string
  }|null
}
