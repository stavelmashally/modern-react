/* eslint-disable no-promise-executor-return */
// export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function delayFn<T>(fn: (...args: any[]) => Promise<T> | T, ms: number) {
  const delayPromise = new Promise(r => setTimeout(r, ms));

  const [res] = await Promise.all([fn(), delayPromise]);

  return res;
}
