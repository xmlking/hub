API Server 
==========
API Server and IoT Gateway to send data over WebSocket and store in influxDB.

###Prerequisites
```bash
brew update
# install Node (>8.0.0)
brew install node

# install yarn, a better package manager then NPM
brew install yarn

# install typescript
yarn global add typescript
```

###Setup
```bash
cd server
yarn
```

###Build
```bash
yarn run build
```
###Run
```bash
yarn run start
```
#### Run json-server for testing
```bash
yarn run json-server
```


###Test

https://localhost:3000/api/users
https://localhost:3000/api/posts

testing tool for **socket.io**

http://amritb.github.io/socketio-client-tool/

Connect URL: wss://localhost:3000/iot
