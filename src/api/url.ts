const token = process.env.PUBLIC_PROJECT_TOKEN;
if (!token) {
  throw new Error('Missing PUBLIC_PROJECT_TOKEN');
}

export const baseUrl = (...paths: string[]) =>
  `https://${token}.mockapi.io/api/v1/${paths.join('/')}`;
