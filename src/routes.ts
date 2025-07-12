import { Router } from 'express';

import { paramValidatorMiddleware } from './middlewares';

import {
  createShortURL,
  deleteShortURL,
  getURLStatistics,
  retrieveOriginalURL,
  updateShortURL,
} from './controllers';

const router = Router();

router.post('/', createShortURL);

router.get('/:shortCode', paramValidatorMiddleware, retrieveOriginalURL);
router.get('/:shortCode/stats', paramValidatorMiddleware, getURLStatistics);

router.put('/:shortCode', paramValidatorMiddleware, updateShortURL);

router.delete('/:shortCode', paramValidatorMiddleware, deleteShortURL);

export default router;
