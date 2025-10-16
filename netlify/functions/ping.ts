import { Handler } from '@netlify/functions';
export const handler: Handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({ message: 'Board API Ping Success ✅' }),
});