/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
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
    instance = new EZmaxApiDefinitionFull.WebsocketResponseInformationV1();
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

  describe('WebsocketResponseInformationV1', function() {
    it('should create an instance of WebsocketResponseInformationV1', function() {
      // uncomment below and update the code to test WebsocketResponseInformationV1
      //var instance = new EZmaxApiDefinitionFull.WebsocketResponseInformationV1();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.WebsocketResponseInformationV1);
    });

    it('should have the property eWebsocketMessagetype (base name: "eWebsocketMessagetype")', function() {
      // uncomment below and update the code to test the property eWebsocketMessagetype
      //var instance = new EZmaxApiDefinitionFull.WebsocketResponseInformationV1();
      //expect(instance).to.be();
    });

    it('should have the property sWebsocketChannel (base name: "sWebsocketChannel")', function() {
      // uncomment below and update the code to test the property sWebsocketChannel
      //var instance = new EZmaxApiDefinitionFull.WebsocketResponseInformationV1();
      //expect(instance).to.be();
    });

    it('should have the property mPayload (base name: "mPayload")', function() {
      // uncomment below and update the code to test the property mPayload
      //var instance = new EZmaxApiDefinitionFull.WebsocketResponseInformationV1();
      //expect(instance).to.be();
    });

  });

}));
