API Server 
==========
API Server and IoT Gateway to send data over WebSocket and store in influxDB.

###Prerequisites
```bash
# install Node (> 7.6.0) with NVM
nvm install node 7.6.0

# install yarn, a better package manager then NPM
brew update
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

###Test
testing tool for **socket.io**

http://amritb.github.io/socketio-client-tool/

Connect URL: localhost:3000/iot
