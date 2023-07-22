/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
    instance = new EZmaxApiDefinitionFull.CommonReportsection();
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

  describe('CommonReportsection', function() {
    it('should create an instance of CommonReportsection', function() {
      // uncomment below and update the code to test CommonReportsection
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.CommonReportsection);
    });

    it('should have the property a_objReportsubsection (base name: "a_objReportsubsection")', function() {
      // uncomment below and update the code to test the property a_objReportsubsection
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be();
    });

    it('should have the property a_objReportcolumn (base name: "a_objReportcolumn")', function() {
      // uncomment below and update the code to test the property a_objReportcolumn
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be();
    });

    it('should have the property eReportsectionHorizontalalignment (base name: "eReportsectionHorizontalalignment")', function() {
      // uncomment below and update the code to test the property eReportsectionHorizontalalignment
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be();
    });

    it('should have the property iReportsectionColumncount (base name: "iReportsectionColumncount")', function() {
      // uncomment below and update the code to test the property iReportsectionColumncount
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be();
    });

    it('should have the property iReportsectionWidth (base name: "iReportsectionWidth")', function() {
      // uncomment below and update the code to test the property iReportsectionWidth
      //var instance = new EZmaxApiDefinitionFull.CommonReportsection();
      //expect(instance).to.be();
    });

  });

}));
