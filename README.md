### Welcome to URL shortner

Starter Template From [`typescript-express-starter`](https://www.npmjs.com/package/typescript-express-starter)


Tools & Technologies Used - `Node, Typescript, Express, Typegoose(mongoose) - MongoDB, Jest, Swagger`

### Steps to run project -

- Create `.env.development.local` file in the root directory of the repository.
- Add following credentials in the file
```yaml
# PORT
PORT = 3000

# DATABASE
DB_HOST = db-host
DB_DATABASE = db-link

# TOKEN
SECRET_KEY = secretKey

# LOG
LOG_FORMAT = dev
LOG_DIR = ../logs

# CORS
ORIGIN = *
CREDENTIALS = true
```

- then run `npm run dev` in the command line.
- view all the api's at `http://localhost:3000/api-docs`


### Future Improvements

- Add user account support to reduce phishing links creation.
- Use of caching to reduce load on databases.
