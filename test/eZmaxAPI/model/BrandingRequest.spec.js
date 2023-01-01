/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
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
    instance = new EZmaxApiDefinitionFull.BrandingRequest();
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

  describe('BrandingRequest', function() {
    it('should create an instance of BrandingRequest', function() {
      // uncomment below and update the code to test BrandingRequest
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be.a(EZmaxApiDefinitionFull.BrandingRequest);
    });

    it('should have the property pkiBrandingID (base name: "pkiBrandingID")', function() {
      // uncomment below and update the code to test the property pkiBrandingID
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property objBrandingDescription (base name: "objBrandingDescription")', function() {
      // uncomment below and update the code to test the property objBrandingDescription
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property eBrandingLogo (base name: "eBrandingLogo")', function() {
      // uncomment below and update the code to test the property eBrandingLogo
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property sBrandingBase64 (base name: "sBrandingBase64")', function() {
      // uncomment below and update the code to test the property sBrandingBase64
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColortext (base name: "iBrandingColortext")', function() {
      // uncomment below and update the code to test the property iBrandingColortext
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColortextlinkbox (base name: "iBrandingColortextlinkbox")', function() {
      // uncomment below and update the code to test the property iBrandingColortextlinkbox
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColortextbutton (base name: "iBrandingColortextbutton")', function() {
      // uncomment below and update the code to test the property iBrandingColortextbutton
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColorbackground (base name: "iBrandingColorbackground")', function() {
      // uncomment below and update the code to test the property iBrandingColorbackground
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColorbackgroundbutton (base name: "iBrandingColorbackgroundbutton")', function() {
      // uncomment below and update the code to test the property iBrandingColorbackgroundbutton
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property iBrandingColorbackgroundsmallbox (base name: "iBrandingColorbackgroundsmallbox")', function() {
      // uncomment below and update the code to test the property iBrandingColorbackgroundsmallbox
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

    it('should have the property bBrandingIsactive (base name: "bBrandingIsactive")', function() {
      // uncomment below and update the code to test the property bBrandingIsactive
      //var instance = new EZmaxApiDefinitionFull.BrandingRequest();
      //expect(instance).to.be();
    });

  });

}));
