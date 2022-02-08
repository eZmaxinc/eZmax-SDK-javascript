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
    instance = new EZmaxApiDefinition.ObjectEzsignfolderApi();
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

  describe('ObjectEzsignfolderApi', function() {
    describe('ezsignfolderCreateObjectV1', function() {
      it('should call ezsignfolderCreateObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderCreateObjectV1
        //instance.ezsignfolderCreateObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderDeleteObjectV1', function() {
      it('should call ezsignfolderDeleteObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderDeleteObjectV1
        //instance.ezsignfolderDeleteObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderEditObjectV1', function() {
      it('should call ezsignfolderEditObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderEditObjectV1
        //instance.ezsignfolderEditObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetEzsigndocumentsV1', function() {
      it('should call ezsignfolderGetEzsigndocumentsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetEzsigndocumentsV1
        //instance.ezsignfolderGetEzsigndocumentsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetEzsignfoldersignerassociationsV1', function() {
      it('should call ezsignfolderGetEzsignfoldersignerassociationsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetEzsignfoldersignerassociationsV1
        //instance.ezsignfolderGetEzsignfoldersignerassociationsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetFormsDataV1', function() {
      it('should call ezsignfolderGetFormsDataV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetFormsDataV1
        //instance.ezsignfolderGetFormsDataV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetListV1', function() {
      it('should call ezsignfolderGetListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetListV1
        //instance.ezsignfolderGetListV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetObjectV1', function() {
      it('should call ezsignfolderGetObjectV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetObjectV1
        //instance.ezsignfolderGetObjectV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderSendV1', function() {
      it('should call ezsignfolderSendV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderSendV1
        //instance.ezsignfolderSendV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderUnsendV1', function() {
      it('should call ezsignfolderUnsendV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderUnsendV1
        //instance.ezsignfolderUnsendV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
