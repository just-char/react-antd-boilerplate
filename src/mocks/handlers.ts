import { rest } from 'msw';

export const handlers = [
  rest.get('/mock/loading', (_, res, ctx) => {
    return res(ctx.delay(3000), ctx.json({ status: true }));
  }),
  rest.get('/mock/error', (_, res, ctx) => {
    return res(ctx.status(500));
  }),
];
