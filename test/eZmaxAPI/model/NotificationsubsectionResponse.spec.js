/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/eZmaxAPI/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/eZmaxAPI/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.EZmaxApiDefinitionFull);
  }
}(this, function(expect, EZmaxApiDefinitionFull) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NotificationsubsectionResponse', function() {
    it('should create an instance of NotificationsubsectionResponse', function() {
      // uncomment below and update the code to test NotificationsubsectionResponse
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.NotificationsubsectionResponse);
    });

    it('should have the property pkiNotificationsubsectionID (base name: "pkiNotificationsubsectionID")', function() {
      // uncomment below and update the code to test the property pkiNotificationsubsectionID
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiNotificationsectionID (base name: "fkiNotificationsectionID")', function() {
      // uncomment below and update the code to test the property fkiNotificationsectionID
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property objNotificationsubsectionName (base name: "objNotificationsubsectionName")', function() {
      // uncomment below and update the code to test the property objNotificationsubsectionName
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property sNotificationsectionNameX (base name: "sNotificationsectionNameX")', function() {
      // uncomment below and update the code to test the property sNotificationsectionNameX
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be();
    });

    it('should have the property sNotificationsubsectionNameX (base name: "sNotificationsubsectionNameX")', function() {
      // uncomment below and update the code to test the property sNotificationsubsectionNameX
      //var instance = new EZmaxApiDefinitionFull.NotificationsubsectionResponse();
      //expect(instance).to.be();
    });

  });

}));
