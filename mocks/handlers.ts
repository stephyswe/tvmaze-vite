/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import { rest } from 'msw';

import { showsData } from './fixtures/shows';

export const handlers = [
  rest.get('http://localhost:3000/api/docs_list', async (req, res, ctx) => {
    const data = [
      { name: 'MSW', url: 'https://mswjs.io/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    ];

    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get('https://api.tvmaze.com/search/shows', async (req, res, ctx) => {
    const query = req.url.searchParams.get('q');
    console.log('query', query);
    const data = showsData;

    return res(ctx.status(200), ctx.json(data));
  }),
];
