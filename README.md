# Banckend API for P2-Weather-App

_FOLDERS AND FILES DO NOT USE CHINESE_

## DESC

This is weather backend application

# Q&A:

.gitignore file cannot create?
MAC: COMMAND LINE: touch .gitignore

## Steps

1. npm init (this will create a package.json)
2. npm install axios body-parser cors dotenv express express-ra
   te-limit express-validator mongoose nodemon --save (check package.json, check node_modules)
3. create folder structure (see below)
4. Add code under root index.js
5. Add code under loaders
6. Add code under app

# Folder Structure

- app (application)

  - config (if env changes it will change, eg: PORT, url)
  - controller (handle request and response / req,res)
  - middleware (filter request and response and return status code/ http header, eg:auth,login)
  - routes (backend-url / entry point of application )
  - services (business-logic, third-party[API] )
  - validation (before enter controller it need to validate the result)
  - model (connect to DB)

- loaders (application init)

  - index.js (entry point for loaders / entry file)
  - express.js (framework init)
  - mongoose.js (database)

- .env (this will change when environment changes)

- .gitignore (as it what files should git ignore/file do not commit to git)

- index.js(entry file/code start here)

- package.json (this is when we run npm init)

- README.md (explain what the project is and how to run)

---

### Flow of app

---

Root index.js -> loaders/index.js -> express.js -> mongoose.js -> app/routes/vi/api.js

//using loaders can be easier to change framwork in the future, other wise is too hard to change

api
routes -> middleware(not all api endpoint need) -> validation -> controller -> services -> model

---

(config can be used anywhere in the application)
