# ui.prototype

1. [Overview](#1-overview)
2. [Gulp.js](#2-gulpjs)
  1. [Notable Plugins](#21-notable-plugins) 
3. [Building](#3-building)
  1. [What Does the Build Do?](#31-what-does-the-build-do)
  2. [For Frontend Developers](#32-for-frontend-developers)
4. [Maintaining this Module (Developer Notes)](#4-maintaining-this-module-developer-notes)
  1. [Component JavaScript/Styles](#41-component-javascriptstyles)
  2. [Client Library JavaScript/Styles](#42-client-library-javascriptstyles)
  3. [Adding a New Frontend Component](#43-adding-a-new-frontend-component)
5. [Further Reading](#5-further-reading)

## 1. Overview

This directory contains a hybrid gulp.js/Maven project. gulp.js is the primary build tool used here. However, Maven (via `mvn clean install`) can also be used to build this project. Behind the scenes, Maven will invoke gulp. 

In this way, the module achieves the best of both worlds. It supports the familiar Java friendly Maven build process while also allowing frontend developers to use the frameworks and tooling suited to frontend development.

## 2. Gulp.js

As mentioned, gulp is the underlying build tool. For insight into the each gulp plugin, check the `build-tasks` directory.

### 2.1. Notable Plugins

* gulp-bower: front-end frameworks dependency management
* browserify: JavaScript module dependency management
* gulp-sass: build Sass styles into CSS
* assemble: build handlebar template files into static html mockups
* iron-fe: front-end to AEM bridge plugin which handles mapping of front-end components (css, js) to AEM components and client libraries.

## 3. Building

Like all project modules, you rarely want to build this module independently. It is recommend you build at the parent pom.xml level.
```
cd ..
mvn clean install
```

### 3.1. What Does the Build Do?

At a high level, building this module performs the following:

1. Compile all Sass files into a single `pagelibs.bundle.css`
2. Compile all JavaScript files into a single `pagelibs.bundle.js`
3. Copy the compiled CSS and JavaScript to the appropriate location inside `ui.apps/src/main/content/jcr_root/etc/clientlibs/pagelibs`

### 3.2. For Frontend Developers

Frontend developers that wish to use gulp.js can perform the following steps.

Prerequisites:
* Node and npm installed globally
* gulp installed globally (`npm install -g gulp`)
* iron-fe installed globally (`npm install -g iron-fe`)

Steps:
- cd into the `ui.prototype` directory
- run `gulp` command

## 4. Maintaining this Module (Developer Notes)

This module contains the frontend code for AEM client libraries and components. 

The expectation is that this module is owned, maintained, and updated by a developer well versed in frontend technologies and best practices. 

However, as mentioned in the [build](#3-building) section, a Java developer will be able to build this project without any assistance from frontend.

There are two types of "objects" in this module.

### 4.1. Component JavaScript/Styles

`ui.prototype/components` contains component specific JavaScript and styles. 

If changes to an existing component are required, find the corresponding directory for the component and update the Sass and/or JavaScript files.

At build time, the Sass files are converted into CSS and JavaScript files converted into browser compatible JS.

### 4.2. Client Library JavaScript/Styles

`ui.prototype/client-libraries/pagelibs` loads and bundles all [component](#41-component-javascriptstyles) JavaScript and styles into a single JS and CSS file. Its AEM sibling is `ui.prototype/src/main/content/jcr_root/etc/clientlibs/pagelibs`.

Typically a developer will not have to make changes to these files. The only time when changes may be necessary are if foundational (cross component) styling or JavaScript needs to be updated.

### 4.3. Adding a New Frontend Component

This project uses [Iron (Fe)](https://www.npmjs.com/package/iron-fe), a gulp plugin, to automate the process of creating new component's starter Sass and JavaScript files.

Below is an example of creating a new frontend 'text' component.

**Prerequisites**
* Install gulp globally (if not already): npm install -g gulp
* Install iron globally (if not already): npm install -g iron-fe

Below should be run from the root of the project (you should be one level above `ui.prototype`)

```
~/Documents/cq-workspace/ui.prototype$D iron
   **********  *********     ********   ****   ***
      ****     ***   ***    ***    ***  *****  ***
      ****     ***   ***    ***    ***  *** ** ***
      ****     *** ***      ***    ***  *** ** ***
      ****     ***    ***   ***    ***  ***  *****
   **********  ***    ****   ********   ***   ****
? What do you want to create? Component

? What is the name of this component? text

? Which client library or client libraries do you want this component to be a part of? pagelibs

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See `npm help json` for definitive documentation on these fields
and exactly what they do.
Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.

name: (text)
version: (1.0.0)
description:
entry point: (text.js)
test command:
git repository:
keywords:
author:
license: (ISC)

About to write to ~/Documents/cq-workspace/acme/ui.prototype/components/text/package.json:
{
  "name": "text",
  "version": "1.0.0",
  "description": "",
  "main": "text.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

Is this ok? (yes)
```

## 5. Further Reading
* [Adobe Documentation: AEM Client-Side Libraries](https://docs.adobe.com/docs/en/aem/6-1/develop/the-basics/clientlibs.html)

