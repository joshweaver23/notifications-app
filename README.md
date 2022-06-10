## Introduction

For this exercise, I focussed on creating an application that would be easy to setup and run. I did not focus on, but acknowledge the importance of, design and UI, testing, authentication, etc.

## Setting up and Running the App

### Notice

This app assumes that you have docker installed and running locally. If you do not, but would like to run the app, please see [here](https://www.docker.com/get-started/) for docker installation. I know this was not a requirement, and apologize if this is an inconvenience.

### Running the entire App in Docker

I wanted to create an easy to setup experience that would work on any machine. Docker is a great tool to achieve this with little configuration. Docker also allowed me to create a data store that would persist (locally) through stopping and restarting the application.

After pulling the repository, from the root directory run:

`docker-compose build`

And after this completes, run:

`docker-compose up`

You should now have the application running. The web client can be accessed at `localhost:3000`. The api layer can be accessed at `localhost:9000`. I believe the DB should be initialized with a couple of notifications; however, if this is not the case, please see the next step "Add Notifications to DB."

### Add Notifications to DB

This may be needed so that the client has messages to display. Note: this can also be done with postman if desired.

```
curl -d '{"userId": 1, "subject": "You'\''ve reached a new goal!", "message": "Now might be a great time to share the good news."}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
curl -d '{"userId": 1, "subject": "Have you shared any progress in a while?", "message": "Sharing the progress of your campaigns can help build and maintain engagement with donors."}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
```

### Test Get Notifications from DB

This is only required if you would like to test that the above calls worked.

`curl http://localhost:9000/notifications/1`
