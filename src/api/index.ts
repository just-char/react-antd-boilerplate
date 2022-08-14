import { service } from '@/lib/service';

import type { LoadingRes } from './types';

export const getLoading = (): Promise<LoadingRes> => {
  return service.get('/loading');
};

export const getError = (): Promise<void> => {
  return service.get('/error');
};
