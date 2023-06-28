import { withIronSessionApiRoute } from 'iron-session/next';
import { sessionOptions } from '@/providers/auth/iron-session-config.provider';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { SuccessResponseData } from '@/types';

/**
 * LogoutResponseData structure
 */
interface LogoutResponseData extends SuccessResponseData {
  data: { success: boolean};
}

/**
 * IronSessionApiRoute
 */
export default withIronSessionApiRoute(
  handler,
  sessionOptions
);

/**
 * Logout api handler
 * @param {NextApiRequest}                      request
 * @param {NextApiResponse<LogoutResponseData>} response
 * @returns {Promise<void>}
 */
async function handler(request: NextApiRequest, response: NextApiResponse<LogoutResponseData>): Promise<void> {
  request.session.destroy();
  response.send({
    data: { success: true }
  });
}