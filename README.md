## Introduction

For this exercise, I focussed on creating an application that would be easy to setup and run. I did not focus on, but acknowledge the importance of, design and UI, testing.

## Setting up and Running the App

### Notice

This app assumes that you have docker installed and running locally. If you do not, but would like to run the app, please see [here](https://www.docker.com/get-started/) for docker installation. I know this was not a requirement, and apologize if this is an inconvenience.

### Running the entire App in Docker

I wanted to create an easy to setup experience that would work on any machine. Docker is a great tool to achieve this with little configuration. Docker also allowed me to create a data store that would persist (locally) through stopping and restarting the application.

### Add Notifications to DB

This is important so that the client has messages to display. Note: this can also be done with postman if desired.

```
curl -d '{"subject": "this is a test", "message": "test message"}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
curl -d '{"subject": "this is another test", "message": "test message 2"}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
curl -d '{"subject": "this is another  test", "message": "test message 3"}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
curl -d '{"subject": "this is another  test", "message": "test message 4"}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
curl -d '{"subject": "this is another  test", "message": "test message 5"}' -H "Content-Type: application/json" -X POST http://localhost:9000/notifications
```

### Test Get Notifications from DB

This is only required if you would like to test that the above calls worked.

`curl http://localhost:9000/notifications`
