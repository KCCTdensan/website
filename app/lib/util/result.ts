type Ok<T> = {
  ok: true;
  value: T;
};

type Err<E> = {
  ok: false;
  error: E;
};

export type Result<T, E> = Ok<T> | Err<E>;

export const ok = <T>(value: T): Ok<T> => ({ ok: true, value });
export const err = <E>(error: E): Err<E> => ({ ok: false, error });

export const Result = {
  ok,
  err,
  map: <T, U, E>(result: Result<T, E>, fn: (value: T) => U): Result<U, E> => {
    if (result.ok) {
      return ok(fn(result.value));
    }

    return result;
  },
  mapErr: <T, E, F>(
    result: Result<T, E>,
    fn: (error: E) => F,
  ): Result<T, F> => {
    if (!result.ok) {
      return err(fn(result.error));
    }

    return result;
  },
  mapBoth: <T, U, E, F>(
    result: Result<T, E>,
    okFn: (value: T) => U,
    errFn: (error: E) => F,
  ): Result<U, F> => {
    if (result.ok) {
      return ok(okFn(result.value));
    }

    return err(errFn(result.error));
  },
  unwrap: <T, E>(result: Result<T, E>): T => {
    if (result.ok) {
      return result.value;
    }

    throw result.error;
  },
  unwrapAsync: async <T, E>(result: Result<T, E>): Promise<T> => {
    if (result.ok) {
      return result.value;
    }

    throw await result.error;
  },
};
