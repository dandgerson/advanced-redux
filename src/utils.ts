export const delayedFetch = (url: string, delay?: number): Promise<Response> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(fetch(url)), delay ?? 300);
  });
