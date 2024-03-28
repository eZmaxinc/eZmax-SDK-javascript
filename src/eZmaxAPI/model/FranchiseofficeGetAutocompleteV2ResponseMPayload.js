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
import FranchiseofficeAutocompleteElementResponse from './FranchiseofficeAutocompleteElementResponse';

/**
 * The FranchiseofficeGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/FranchiseofficeGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class FranchiseofficeGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>FranchiseofficeGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/franchiseoffice/getAutocomplete
     * @alias module:eZmaxAPI/model/FranchiseofficeGetAutocompleteV2ResponseMPayload
     * @param a_objFranchiseoffice {Array.<module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse>} An array of Franchiseoffice autocomplete element response.
     */
    constructor(a_objFranchiseoffice) { 
        
        FranchiseofficeGetAutocompleteV2ResponseMPayload.initialize(this, a_objFranchiseoffice);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objFranchiseoffice) { 
        obj['a_objFranchiseoffice'] = a_objFranchiseoffice;
    }

    /**
     * Constructs a <code>FranchiseofficeGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchiseofficeGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchiseofficeGetAutocompleteV2ResponseMPayload} The populated <code>FranchiseofficeGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchiseofficeGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objFranchiseoffice')) {
                obj['a_objFranchiseoffice'] = ApiClient.convertToType(data['a_objFranchiseoffice'], [FranchiseofficeAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FranchiseofficeGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FranchiseofficeGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FranchiseofficeGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objFranchiseoffice']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objFranchiseoffice'])) {
                throw new Error("Expected the field `a_objFranchiseoffice` to be an array in the JSON data but got " + data['a_objFranchiseoffice']);
            }
            // validate the optional field `a_objFranchiseoffice` (array)
            for (const item of data['a_objFranchiseoffice']) {
                FranchiseofficeAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Franchiseoffice autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse>}
     */
    getAObjFranchiseoffice() {
        return this.a_objFranchiseoffice;
    }

    /**
     * Sets An array of Franchiseoffice autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse>} a_objFranchiseoffice An array of Franchiseoffice autocomplete element response.
     */
    setAObjFranchiseoffice(a_objFranchiseoffice) {
        this['a_objFranchiseoffice'] = a_objFranchiseoffice;
    }

}

FranchiseofficeGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objFranchiseoffice"];

/**
 * An array of Franchiseoffice autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse>} a_objFranchiseoffice
 */
FranchiseofficeGetAutocompleteV2ResponseMPayload.prototype['a_objFranchiseoffice'] = undefined;






export default FranchiseofficeGetAutocompleteV2ResponseMPayload;

