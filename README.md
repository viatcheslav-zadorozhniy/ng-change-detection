# Angular change detection in-depth

## Table of contents
- [Description](#description)
  - [What it is?](#what-it-is)
  - [How does it work?](#how-does-it-work)
  - [How does it trigger?](#how-does-it-trigger)
  - [Optimization](#optimization)
- [Demo](#demo)
  - [Details](#details)
  - [Installation](#installation)


## Description

### What is it?
[Change detection](https://angular.io/guide/change-detection) is the process through which Angular checks to see whether your application state has changed, and if any DOM needs to be updated.

### How does it work?
[NgZone](https://angular.io/guide/zone) (Angular execution context) is used to detect changes automatically. It is done using [zone.js](https://www.npmjs.com/package/zone.js) which patches standard [web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

### How does it trigger?
It can be triggered manually (using [ChangeDetectorRef](https://angular.io/api/core/ChangeDetectorRef)) or automatically through an asynchronous event ([more details](https://angular.io/guide/zone#when-apps-update-html)).

### Optimization
At a high level, Angular walks your components from top to bottom, looking for changes.

Change detection is highly optimized and performant, but it can still cause slowdowns if the application performs it too frequently.

Optimization tips:
- Use the [OnPush](https://angular.io/guide/change-detection-skipping-subtrees) strategy.
- Use [Angular Pipes](https://angular.io/api/core/Pipe) for referentially transparent expressions.
- Run outside of [NgZone](https://angular.io/guide/zone) async tasks that are not affecting the app view.
- Resolve [zone pollution](https://angular.io/guide/change-detection-zone-pollution) (use [Angular DevTools](https://angular.io/guide/devtools) to detect it).
- Configure [zone.js](https://github.com/angular/angular/blob/main/packages/zone.js/lib/zone.configurations.api.ts).


## Demo

### Details
- [Pipe](./src/app/pipes/user-hash.pipe.ts) vs [component method](./src/app/shared/user/user.component.ts) ([usage](./src/app/shared/user/user.component.html)).
- [Async tasks](./src/app/shared/async-task-button/async-task-button.component.ts).
- [onProperty APIs](./src/app/shared/onclick-button/onclick-button.component.ts).
- [Zone pollution](./src/app/app.component.html).
- [Zone configuration](./src/zone-config.js).
- Noop [NgZone](https://angular.io/guide/zone) ([module based](./src/main.ts) / [standalone](./src/main-standalone.ts)).

### Installation
```
yarn install --frozen-lockfile
```
