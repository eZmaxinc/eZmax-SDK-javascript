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
    instance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatedocumentApi();
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

  describe('ObjectEzsigntemplatedocumentApi', function() {
    describe('ezsigntemplatedocumentCreateObjectV1', function() {
      it('should call ezsigntemplatedocumentCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentCreateObjectV1
        //instance.ezsigntemplatedocumentCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1', function() {
      it('should call ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1
        //instance.ezsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentEditEzsigntemplatesignaturesV1', function() {
      it('should call ezsigntemplatedocumentEditEzsigntemplatesignaturesV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentEditEzsigntemplatesignaturesV1
        //instance.ezsigntemplatedocumentEditEzsigntemplatesignaturesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentEditObjectV1', function() {
      it('should call ezsigntemplatedocumentEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentEditObjectV1
        //instance.ezsigntemplatedocumentEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentFlattenV1', function() {
      it('should call ezsigntemplatedocumentFlattenV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentFlattenV1
        //instance.ezsigntemplatedocumentFlattenV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1', function() {
      it('should call ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1
        //instance.ezsigntemplatedocumentGetEzsigntemplatedocumentpagesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1', function() {
      it('should call ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1
        //instance.ezsigntemplatedocumentGetEzsigntemplateformfieldgroupsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentGetEzsigntemplatesignaturesV1', function() {
      it('should call ezsigntemplatedocumentGetEzsigntemplatesignaturesV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentGetEzsigntemplatesignaturesV1
        //instance.ezsigntemplatedocumentGetEzsigntemplatesignaturesV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentGetObjectV2', function() {
      it('should call ezsigntemplatedocumentGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentGetObjectV2
        //instance.ezsigntemplatedocumentGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentGetWordsPositionsV1', function() {
      it('should call ezsigntemplatedocumentGetWordsPositionsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentGetWordsPositionsV1
        //instance.ezsigntemplatedocumentGetWordsPositionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsigntemplatedocumentPatchObjectV1', function() {
      it('should call ezsigntemplatedocumentPatchObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsigntemplatedocumentPatchObjectV1
        //instance.ezsigntemplatedocumentPatchObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
