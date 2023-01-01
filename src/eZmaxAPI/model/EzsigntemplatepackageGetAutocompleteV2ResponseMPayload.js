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

import ApiClient from '../ApiClient';
import EzsigntemplatepackageAutocompleteElementResponse from './EzsigntemplatepackageAutocompleteElementResponse';

/**
 * The EzsigntemplatepackageGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatepackageGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackageGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsigntemplatepackage/getAutocomplete
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2ResponseMPayload
     * @param a_objEzsigntemplatepackage {Array.<module:eZmaxAPI/model/EzsigntemplatepackageAutocompleteElementResponse>} An array of Ezsigntemplatepackage autocomplete element response.
     */
    constructor(a_objEzsigntemplatepackage) { 
        
        EzsigntemplatepackageGetAutocompleteV2ResponseMPayload.initialize(this, a_objEzsigntemplatepackage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackage) { 
        obj['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageGetAutocompleteV2ResponseMPayload} The populated <code>EzsigntemplatepackageGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplatepackage')) {
                obj['a_objEzsigntemplatepackage'] = ApiClient.convertToType(data['a_objEzsigntemplatepackage'], [EzsigntemplatepackageAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatepackageGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatepackageGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatepackageGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntemplatepackage']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplatepackage'])) {
                throw new Error("Expected the field `a_objEzsigntemplatepackage` to be an array in the JSON data but got " + data['a_objEzsigntemplatepackage']);
            }
            // validate the optional field `a_objEzsigntemplatepackage` (array)
            for (const item of data['a_objEzsigntemplatepackage']) {
                EzsigntemplatepackageAutocompleteElementResponse.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Ezsigntemplatepackage autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackageAutocompleteElementResponse>}
     */
    getAObjEzsigntemplatepackage() {
        return this.a_objEzsigntemplatepackage;
    }

    /**
     * Sets An array of Ezsigntemplatepackage autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackageAutocompleteElementResponse>} a_objEzsigntemplatepackage An array of Ezsigntemplatepackage autocomplete element response.
     */
    setAObjEzsigntemplatepackage(a_objEzsigntemplatepackage) {
        this['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

}

EzsigntemplatepackageGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objEzsigntemplatepackage"];

/**
 * An array of Ezsigntemplatepackage autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageAutocompleteElementResponse>} a_objEzsigntemplatepackage
 */
EzsigntemplatepackageGetAutocompleteV2ResponseMPayload.prototype['a_objEzsigntemplatepackage'] = undefined;






export default EzsigntemplatepackageGetAutocompleteV2ResponseMPayload;

