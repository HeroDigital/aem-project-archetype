# ui.prototype

1. [Overview](#1-overview)
2. [Gulp.js](#2-gulpjs)
  1. [Notable Plugins](#21-notable-plugins)
3. [Building](#3-building)
  1. [What Does the Build Do?](#31-what-does-the-build-do)
4. [Maintaining this Module (Developer Notes)](#4-maintaining-this-module-developer-notes)
  1. [Frontend Developer Environment](#41-frontend-developer-environment)
  2. [Component JavaScript/Styles](#42-component-javascriptstyles)
  3. [Client Library JavaScript/Styles](#43-client-library-javascriptstyles)
  4. [Adding a New Frontend Component](#44-adding-a-new-frontend-component)
5. [Further Reading](#5-further-reading)

## 1. Overview

This directory contains a hybrid gulp.js/Maven project. gulp.js is the primary build tool used here. However, Maven (via `mvn clean install`) can also be used to build this project. Behind the scenes, Maven will invoke gulp.

In this way, the module achieves the best of both worlds. It supports the familiar Java friendly Maven build process while also allowing frontend developers to use the frameworks and tooling suited to frontend development.

## 2. Gulp.js

As mentioned, gulp is the underlying build tool. For insight into the each gulp plugin, check `gulpfile.babel.js` and the `build-tasks` directory.

### 2.1. Notable Dependencies

* browserify: JavaScript module system management
* gulp-sass: build Sass styles into CSS
* assemble: build handlebar template files into static html mockups
* generator-aem-fe: scaffolding for new components (creates starter files)

## 3. Building

Building this project can be done via Maven or Gulp.

1. Maven: `mvn clean install`, ran from root of project
2. Gulp: `gulp`, ran from within ui.prototype

These are equivalent because `mvn` simply invokes `gulp`.

### 3.1. What Does the Maven/Gulp Build Do?

At a high level, building this module performs the following:

1. Compile all Sass files into a single `pagelibs.bundle.css`
2. Compile all JavaScript files into a single `pagelibs.bundle.js`
3. Copy font files over to AEM client library.

All of these files are placed in `ui.apps/src/main/content/jcr_root/etc/clientlibs/pagelibs`, the AEM client library.

## 4. Maintaining this Module (Developer Notes)

This module contains the frontend code for AEM client libraries and components.

The expectation is that this module is owned, maintained, and updated by a developer well versed in frontend technologies and best practices.

However, as mentioned in the [build](#3-building) section, a Java developer will be able to build this project without any assistance from frontend.

### 4.1. Frontend Developer Environment

* Node and npm installed globally (recommended to you use [Node Version Manager](https://github.com/creationix/nvm))
* gulp installed globally (`npm install -g gulp`)
* yeoman installed globally (`npm install -g yo`)

### 4.2. Component JavaScript/Styles

`ui.prototype/components` contains component specific JavaScript and styles.

If changes to an existing component are required, find the corresponding directory for the component and update the Sass and/or JavaScript files.

At build time, the Sass files are converted into CSS and JavaScript files converted into browser compatible JS.

### 4.3. Client Library JavaScript/Styles

`ui.prototype/client-libraries/pagelibs` loads and bundles all [component](#42-component-javascriptstyles) JavaScript and styles into a single JS and CSS file. Its AEM sibling is `ui.prototype/src/main/content/jcr_root/etc/clientlibs/pagelibs`.

The only time when changes may be necessary are if foundational (cross component) styling or JavaScript needs to be updated.

### 4.4. Adding a New Frontend Component

This project uses [Yeoman](http://yeoman.io/), to automate the process of creating a new component's starter Sass and JavaScript files.

Below is an example of creating a new frontend 'testComponent' component.

**Prerequisites**
* Install gulp globally (if not already): `npm install -g gulp`
* Install yeoman globally (if not already): `npm install -g yo`
* Run `npm install` from within `ui.prototype`

```
~/Documents/cq-workspace/acme/ui.prototype yo aem-fe

     _-----_     ╭──────────────────────────╮
    |       |    │ Welcome to the exquisite │
    |--(o)--|    │     generator-aem-fe     │
   `---------´   │        generator!        │
    ( _´U`_ )    │  I create stub files for │
    /___A___\   /│    new AEM components.   │
     |  ~  |     ╰──────────────────────────╯
   __'.___.'__
 ´   `  |° ´ Y `

? Use lowerCamelCase for NPM module names (not recommended, legacy/deprecated)? Yes
? What is the name of the component (lowerCamelCase)? testComponent
? What is the name of the component (with-dashes-all-lowercase)? test-component
Updating client-libraries/pagelibs/pagelibs.components.js
Updating client-libraries/pagelibs/styles/pagelibs.components.scss
   create components/testComponent/styles/testComponent.scss
   create components/testComponent/testComponent.js
   create components/testComponent/testComponent.hbs
   create components/testComponent/package.json
```

## 5. Further Reading
* [Adobe Documentation: AEM Client-Side Libraries](https://docs.adobe.com/docs/en/aem/6-1/develop/the-basics/clientlibs.html)
* [Yeoman](http://yeoman.io/)
