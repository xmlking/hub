DIY for Angular
===============
Do-it-yourself guide to setup new Angular app.

### Install Prerequisites
```bash
# install Node (> 7.8.0) with NVM
nvm install node 7.8.0

# install yarn a better package manager then NPM
brew update
# brew install yarn
brew install yarn --ignore-dependencies

#  maintain brew
brew cleanup

# install typescript
yarn global add typescript
yarn global add @angular/cli
yarn global add angular-cli-ghpages
ng set --global packageManager=yarn
# ts-node optionals. needed for server-side typescript
yarn global add ts-node



# check/maintain
yarn --version
yarn global ls
yarn global bin
yarn global upgrade
yarn help cache
yarn cache ls
yarn cache dir
yarn cache clean
yarn config list
```

> Every time you upgrade Yarn version, you have to remove all global modules and re-add them.

### Project Scaffolding (Optional)
> these steps below are for setting up a new project from the scratch.
```bash
# create a new angular project `hub`
ng set --global packageManager=yarn
ng new hub   --routing=true --style=scss
cd hub
```

#### Addons
```bash
yarn add web-animations-js
yarn add bootstrap@next
yarn add @ng-bootstrap/ng-bootstrap
yarn add font-awesome
yarn add web3
yarn add angular2-jwt
yarn add ng2-toasty
yarn add angular2-moment

yarn add eth-lightwallet
yarn add hooked-web3-provider
yarn add ipfs-api
yarn add uport-lib

# check/maintain
yarn outdated
```

#### Analysis Tools
1. webpack-bundle-analyzer - Visualization 
2. ngrev -  Visualization
3. Language Service - code check
4. codelyzer - Style Guide 
5. ngd - Docs 
6. Augury - Debug
7. store-devtools - ngrx

#### Artifact Scaffolding
```bash
# scaffold `home` module with `routes`
ng g module home --routing   --dry-run

ng g module home/welcome --routing   --dry-run
ng g component home/components/footer --dry-run
ng g module home/blog --routing   --dry-run

ng g component shared/components/backButton  --dry-run
ng g component shared/components/SmoothieChart  --dry-run
ng g service SocketIo core/services/SocketIo --dry-run  

ng g component shared/header --dry-run
ng g component shared/footer --dry-run

# scaffold `dashboard` module and sub components
ng g module dashboard lazy --routing   --dry-run
ng g class dashboard/provider model  --dry-run
ng g interface dashboard/payer model  --dry-run
ng g component dashboard/components/BalanceHistory --dry-run
ng g component dashboard/components/HeartRate --dry-run
ng g service dashboard/components/Battery-Level/BatteryLevel --dry-run
# scaffold `doctor` sub-module and sub components under `dashboard`
ng g module dashboard/doctor lazy --routing   --dry-run
ng g component dashboard/doctor/components/ActiveUsers --dry-run
ng g service dashboard/components/Heart-Rate/HeartRate --dry-run

ng g component doctor/components/charts --skip-import --dry-run
ng g component doctor/components/pie-grid --skip-import --dry-run
ng g component dashboard/components/Popup --skip-impor --dry-run

# scaffold `about` lazy module with `routes`
ng g module about lazy --routing   --dry-run

ng g module 404 lazy --routing   --dry-run

ng g service core/ethereum   --dry-run

ng g module admin lazy --routing   --dry-run
ng g component home/login --dry-run
ng g module core
```


#### Upgrade angular-cli
When upgrading to newer versions for `angular-cli` , always clean install
```bash
npm global remove angular-cli
npm cache clean
yarn global add angular-cli@latest
```

#### Tips
```
# with --dry-run, you can see what ng command will generate before actually creating them.
ng g module code --dry-run
# get more help for specific ng command
ng generate module --help
```

### Run
```bash
npm start -- -open
```


### Using ngrev with Angular CLI

1. Open the Angular’s application directory.
2. Make sure the dependencies are installed.
3. Open ngrev.
4. Click on Select Project and select [YOUR_CLI_APP]/src/tsconfig.app.json.

#### FAQ
Core, Shared and Feature modules?

As far as I understand there are three recommended types of modules: core, feature and shared.

If a module exports some declarations (components, directives and pipes) and many modules will import this module, then this module should be a shared module (in shared directory).

If a module expors some declarations (components, directives and pipes) and only the root module will import this module, then this module should be a core module (in core directory).
The core module contains providers for global services and can be guarded against being loaded from lazy loaded modules (as shown in your link) because this can easily cause bugs where lazy loaded modules get their own instance for global services (which is against the intention).


shared module - This is mostly for convenience where several modules are exported so they can be made available at once in components that want to use them all (common pipes, components, and directives you probably want to use together in many other moduls).

### Issues 
#### ng e2e
```bash
node_modules/.bin/webdriver-manager update --ignore_ssl
ng e2e -wu false
```

