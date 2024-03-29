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
    instance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
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
    describe('ezsignfolderArchiveV1', function() {
      it('should call ezsignfolderArchiveV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderArchiveV1
        //instance.ezsignfolderArchiveV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderBatchDownloadV1', function() {
      it('should call ezsignfolderBatchDownloadV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderBatchDownloadV1
        //instance.ezsignfolderBatchDownloadV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
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
    describe('ezsignfolderCreateObjectV2', function() {
      it('should call ezsignfolderCreateObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderCreateObjectV2
        //instance.ezsignfolderCreateObjectV2(function(error) {
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
    describe('ezsignfolderDisposeEzsignfoldersV1', function() {
      it('should call ezsignfolderDisposeEzsignfoldersV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderDisposeEzsignfoldersV1
        //instance.ezsignfolderDisposeEzsignfoldersV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderDisposeV1', function() {
      it('should call ezsignfolderDisposeV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderDisposeV1
        //instance.ezsignfolderDisposeV1(function(error) {
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
    describe('ezsignfolderGetActionableElementsV1', function() {
      it('should call ezsignfolderGetActionableElementsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetActionableElementsV1
        //instance.ezsignfolderGetActionableElementsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetCommunicationCountV1', function() {
      it('should call ezsignfolderGetCommunicationCountV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetCommunicationCountV1
        //instance.ezsignfolderGetCommunicationCountV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderGetCommunicationListV1', function() {
      it('should call ezsignfolderGetCommunicationListV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetCommunicationListV1
        //instance.ezsignfolderGetCommunicationListV1(function(error) {
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
    describe('ezsignfolderGetEzsignsignaturesAutomaticV1', function() {
      it('should call ezsignfolderGetEzsignsignaturesAutomaticV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetEzsignsignaturesAutomaticV1
        //instance.ezsignfolderGetEzsignsignaturesAutomaticV1(function(error) {
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
    describe('ezsignfolderGetObjectV2', function() {
      it('should call ezsignfolderGetObjectV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderGetObjectV2
        //instance.ezsignfolderGetObjectV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderImportEzsignfoldersignerassociationsV1', function() {
      it('should call ezsignfolderImportEzsignfoldersignerassociationsV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderImportEzsignfoldersignerassociationsV1
        //instance.ezsignfolderImportEzsignfoldersignerassociationsV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderImportEzsigntemplatepackageV1', function() {
      it('should call ezsignfolderImportEzsigntemplatepackageV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderImportEzsigntemplatepackageV1
        //instance.ezsignfolderImportEzsigntemplatepackageV1(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderReorderV1', function() {
      it('should call ezsignfolderReorderV1 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderReorderV1
        //instance.ezsignfolderReorderV1(function(error) {
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
    describe('ezsignfolderSendV2', function() {
      it('should call ezsignfolderSendV2 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderSendV2
        //instance.ezsignfolderSendV2(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('ezsignfolderSendV3', function() {
      it('should call ezsignfolderSendV3 successfully', function(done) {
        //uncomment below and update the code to test ezsignfolderSendV3
        //instance.ezsignfolderSendV3(function(error) {
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
