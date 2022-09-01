import { Request, Response } from 'express'

import ApiError from '../helpers/apiError'
import logger from '../util/logger'

export default function (error: ApiError, req: Request, res: Response) {
  if (error.source) {
    logger.error(error.source)
  }

  res.status(error.statusCode).json({
    status: 'error.status' || 500,
    statusCode: error.statusCode,
    message: error.message,
  })
}
