This is a small proof of concept API I built using NFL standings and draft data. I've implemented this, and similar APIs with other frameworks, into a couple of frontend frameworks for local prototypes (I expect at least one of these will land in my github soon). This is not ready for production so I am handwaving Authentication and Authorization for now. If this API was to ever see production it would serve as the backend for a private project of mine and not be publicly accessible.

The first push to this repo is in March of 2024 but I wrote the first code for this project in January 2024. This hands-on time with Nest was really positive and Nest is maybe my favorite new (to me) tech I've touched in the last year. Astro is far ahead in the lead overall, but this experience building an API with Nest was a really good one.

I am using a Postgres database for the team history and draft data and MongoDB for the Glossary items. I have some ambition to use something like neo4j for some graph data I am still building. That will come much later in the timeline, though, I hope to implement a POC sooner.

Oh it has Swagger docs too at the api root `/api`

Some things I would like to circle back to here as time allows:

* Authentication and Authorization
* Error/logging middleware
* Expand Glossary routes
* Do some code review and make modules/services/controllers/entities consistent
* Create real DTOs to support future CUD operations (R being basically complete)
* Expand test coverage (translation: write any tests at all)

I pulled data from (here)[https://github.com/nflverse/nfldata/tree/master/data]. You can utilize that to build your own local database and try to run if that is your jam.

For development I run `npm run start`