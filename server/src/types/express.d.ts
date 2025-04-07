
declare global {
  namespace Express {
    interface Request {
      userId: string;
      // Add other custom request properties here if needed
    }
  }
}