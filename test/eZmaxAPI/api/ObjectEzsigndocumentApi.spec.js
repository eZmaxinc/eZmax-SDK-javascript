/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
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
    factory(root.expect, root.EZmaxApiDefinition);
  }
}(this, function(expect, EZmaxApiDefinition) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new EZmaxApiDefinition.ObjectEzsigndocumentApi();
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

  describe('ObjectEzsigndocumentApi', function() {
    describe('ezsigndocumentApplyEzsigntemplateV1', function() {
      it('should call ezsigndocumentApplyEzsigntemplateV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentApplyEzsigntemplateV1
        //instance.ezsigndocumentApplyEzsigntemplateV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentApplyEzsigntemplateV2', function() {
      it('should call ezsigndocumentApplyEzsigntemplateV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentApplyEzsigntemplateV2
        //instance.ezsigndocumentApplyEzsigntemplateV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentCreateObjectV1', function() {
      it('should call ezsigndocumentCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentCreateObjectV1
        //instance.ezsigndocumentCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentDeleteObjectV1', function() {
      it('should call ezsigndocumentDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentDeleteObjectV1
        //instance.ezsigndocumentDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetDownloadUrlV1', function() {
      it('should call ezsigndocumentGetDownloadUrlV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetDownloadUrlV1
        //instance.ezsigndocumentGetDownloadUrlV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetEzsignpagesV1', function() {
      it('should call ezsigndocumentGetEzsignpagesV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetEzsignpagesV1
        //instance.ezsigndocumentGetEzsignpagesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetFormDataV1', function() {
      it('should call ezsigndocumentGetFormDataV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetFormDataV1
        //instance.ezsigndocumentGetFormDataV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetObjectV1', function() {
      it('should call ezsigndocumentGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetObjectV1
        //instance.ezsigndocumentGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigndocumentGetWordsPositionsV1', function() {
      it('should call ezsigndocumentGetWordsPositionsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigndocumentGetWordsPositionsV1
        //instance.ezsigndocumentGetWordsPositionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
