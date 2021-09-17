# Atlas Seeder

## What Problem Does This Solve?

This app will seed any Atlas instance using data that's store in your local MongoDB. All we have to do is spin up the server and hit a route. ✨

## Girections

`clone`, `npm i`, etc.

1. Create a `.env` with the appropriate properties as referenced in [`config.js`](https://github.com/manavm1990/mongo-atlas-seeding-back/blob/master/app/config.js)
2. Spin up a server with `npm start`.
3. `GET` the following path from the server: `/api/seed`. For example: http://localhost:3000/api/seed

[Video demo](https://vimeo.com/607800899/72337ad8d5)
