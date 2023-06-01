// A faulty API route to test Sentry's error monitoring
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  throw new Error('Sentry Example API Route Error');
  response.status(200).json({ name: 'John Doe' });
}
