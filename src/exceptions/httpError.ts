import { HTTP_STATUS } from "../helpers/httpStatus";

export class HttpError extends Error {
  public status: HTTP_STATUS;
  public message: string;

  constructor(status: HTTP_STATUS, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
