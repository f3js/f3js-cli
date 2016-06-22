#! /usr/bin/env node
"use strict";var _=require("underscore"),projects=require("./connector/api/projects");projects.list(function(a){a&&_.each(a,function(a){console.log("id",a.id)})});/*! f3js-cli - v0.0.2 - 2016-06-23 */
