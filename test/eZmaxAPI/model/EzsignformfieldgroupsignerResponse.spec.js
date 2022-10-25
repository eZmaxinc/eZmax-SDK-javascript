/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
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
    instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupsignerResponse();
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

  describe('EzsignformfieldgroupsignerResponse', function() {
    it('should create an instance of EzsignformfieldgroupsignerResponse', function() {
      // uncomment below and update the code to test EzsignformfieldgroupsignerResponse
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupsignerResponse();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.EzsignformfieldgroupsignerResponse);
    });

    it('should have the property pkiEzsignformfieldgroupsignerID (base name: "pkiEzsignformfieldgroupsignerID")', function() {
      // uncomment below and update the code to test the property pkiEzsignformfieldgroupsignerID
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupsignerResponse();
      //expect(instance).to.be();
    });

    it('should have the property fkiEzsignfoldersignerassociationID (base name: "fkiEzsignfoldersignerassociationID")', function() {
      // uncomment below and update the code to test the property fkiEzsignfoldersignerassociationID
      //var instance = new EZmaxApiDefinitionFull.EzsignformfieldgroupsignerResponse();
      //expect(instance).to.be();
    });

  });

}));
