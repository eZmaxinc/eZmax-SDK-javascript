/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
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
    instance = new EZmaxApiDefinitionFull.ObjectEzsignbulksendApi();
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

  describe('ObjectEzsignbulksendApi', function() {
    describe('ezsignbulksendCreateEzsignbulksendtransmissionV1', function() {
      it('should call ezsignbulksendCreateEzsignbulksendtransmissionV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendCreateEzsignbulksendtransmissionV1
        //instance.ezsignbulksendCreateEzsignbulksendtransmissionV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendCreateObjectV1', function() {
      it('should call ezsignbulksendCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendCreateObjectV1
        //instance.ezsignbulksendCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendDeleteObjectV1', function() {
      it('should call ezsignbulksendDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendDeleteObjectV1
        //instance.ezsignbulksendDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendEditObjectV1', function() {
      it('should call ezsignbulksendEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendEditObjectV1
        //instance.ezsignbulksendEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetCsvTemplateV1', function() {
      it('should call ezsignbulksendGetCsvTemplateV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetCsvTemplateV1
        //instance.ezsignbulksendGetCsvTemplateV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetEzsignbulksendtransmissionsV1', function() {
      it('should call ezsignbulksendGetEzsignbulksendtransmissionsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetEzsignbulksendtransmissionsV1
        //instance.ezsignbulksendGetEzsignbulksendtransmissionsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetFormsDataV1', function() {
      it('should call ezsignbulksendGetFormsDataV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetFormsDataV1
        //instance.ezsignbulksendGetFormsDataV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetListV1', function() {
      it('should call ezsignbulksendGetListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetListV1
        //instance.ezsignbulksendGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetObjectV1', function() {
      it('should call ezsignbulksendGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetObjectV1
        //instance.ezsignbulksendGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendGetObjectV2', function() {
      it('should call ezsignbulksendGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendGetObjectV2
        //instance.ezsignbulksendGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignbulksendReorderV1', function() {
      it('should call ezsignbulksendReorderV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignbulksendReorderV1
        //instance.ezsignbulksendReorderV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
