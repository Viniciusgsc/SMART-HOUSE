export interface Request<B = any, P = any, Q = any> {
  body: B;
  params: P;
  query: Q;
}

export type Response<T> = Promise<{
  status: number;
  body: T;
}>;

export interface ReturnPaginate<T> {
  results: T[];
  current: number;
  pageSize: number;
  total: number;
}
export interface UseCase<B, P, Q, T> {
  execute(request: Request<B, P, Q>): Response<T>;
}
