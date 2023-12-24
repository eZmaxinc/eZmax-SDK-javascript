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
    instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
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

  describe('AttachmentlogResponseCompound', function() {
    it('should create an instance of AttachmentlogResponseCompound', function() {
      // uncomment below and update the code to test AttachmentlogResponseCompound
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.AttachmentlogResponseCompound);
    });

    it('should have the property fkiAttachmentID (base name: "fkiAttachmentID")', function() {
      // uncomment below and update the code to test the property fkiAttachmentID
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property fkiUserID (base name: "fkiUserID")', function() {
      // uncomment below and update the code to test the property fkiUserID
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property dtAttachmentlogDatetime (base name: "dtAttachmentlogDatetime")', function() {
      // uncomment below and update the code to test the property dtAttachmentlogDatetime
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property eAttachmentlogType (base name: "eAttachmentlogType")', function() {
      // uncomment below and update the code to test the property eAttachmentlogType
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be();
    });

    it('should have the property sAttachmentlogDetail (base name: "sAttachmentlogDetail")', function() {
      // uncomment below and update the code to test the property sAttachmentlogDetail
      //var instance = new EZmaxApiDefinitionFull.AttachmentlogResponseCompound();
      //expect(instance).to.be();
    });

  });

}));
