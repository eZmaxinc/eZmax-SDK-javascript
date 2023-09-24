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

import ApiClient from '../ApiClient';
import EzsigntsarequirementAutocompleteElementResponse from './EzsigntsarequirementAutocompleteElementResponse';

/**
 * The EzsigntsarequirementGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class EzsigntsarequirementGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntsarequirementGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/ezsigntsarequirement/getAutocomplete
     * @alias module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload
     * @param a_objEzsigntsarequirement {Array.<module:eZmaxAPI/model/EzsigntsarequirementAutocompleteElementResponse>} An array of Ezsigntsarequirement autocomplete element response.
     */
    constructor(a_objEzsigntsarequirement) { 
        
        EzsigntsarequirementGetAutocompleteV2ResponseMPayload.initialize(this, a_objEzsigntsarequirement);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntsarequirement) { 
        obj['a_objEzsigntsarequirement'] = a_objEzsigntsarequirement;
    }

    /**
     * Constructs a <code>EzsigntsarequirementGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntsarequirementGetAutocompleteV2ResponseMPayload} The populated <code>EzsigntsarequirementGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntsarequirementGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntsarequirement')) {
                obj['a_objEzsigntsarequirement'] = ApiClient.convertToType(data['a_objEzsigntsarequirement'], [EzsigntsarequirementAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntsarequirementGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntsarequirementGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntsarequirementGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntsarequirement']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntsarequirement'])) {
                throw new Error("Expected the field `a_objEzsigntsarequirement` to be an array in the JSON data but got " + data['a_objEzsigntsarequirement']);
            }
            // validate the optional field `a_objEzsigntsarequirement` (array)
            for (const item of data['a_objEzsigntsarequirement']) {
                EzsigntsarequirementAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Ezsigntsarequirement autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/EzsigntsarequirementAutocompleteElementResponse>}
     */
    getAObjEzsigntsarequirement() {
        return this.a_objEzsigntsarequirement;
    }

    /**
     * Sets An array of Ezsigntsarequirement autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/EzsigntsarequirementAutocompleteElementResponse>} a_objEzsigntsarequirement An array of Ezsigntsarequirement autocomplete element response.
     */
    setAObjEzsigntsarequirement(a_objEzsigntsarequirement) {
        this['a_objEzsigntsarequirement'] = a_objEzsigntsarequirement;
    }

}

EzsigntsarequirementGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objEzsigntsarequirement"];

/**
 * An array of Ezsigntsarequirement autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/EzsigntsarequirementAutocompleteElementResponse>} a_objEzsigntsarequirement
 */
EzsigntsarequirementGetAutocompleteV2ResponseMPayload.prototype['a_objEzsigntsarequirement'] = undefined;






export default EzsigntsarequirementGetAutocompleteV2ResponseMPayload;

