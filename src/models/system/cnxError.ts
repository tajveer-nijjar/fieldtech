export default class CnxError extends Error {
  /** The status code represented by this error. */
  statusCode = -1;
  /** Constructs a new instance of CnxError
   *
   * @param {string} errorMessage A descriptive error message.
   * @param {number} statusCode The status code represented by this error.
   */
  constructor(errorMessage: string, statusCode: number) {
    super(errorMessage);

    if (statusCode != null) {
      this.statusCode = statusCode;
    }
  }
}
