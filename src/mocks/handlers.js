import { rest } from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    )
  }),

  rest.get('https://api.airtable.com/v0/appvzE7WewgSrHiFm/movies/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        records: [
          {
            id: 1,
            fields: {
              name: 'Miś',
              description: 'Super film',
            }
          }, {
            id: 2,
            fields: {
              name: 'Killer',
              description: 'Jurek K',
            }
          }
      ]})
    );
  }),

  rest.get('https://api.airtable.com/v0/appvzE7WewgSrHiFm/movies/123', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        fields: {
          name: 'Miś powrót',
          description: 'Super film',
        }
      })
    );
  }),
]
