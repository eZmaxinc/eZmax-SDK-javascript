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
import UsergroupAutocompleteElementResponse from './UsergroupAutocompleteElementResponse';

/**
 * The UsergroupGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class UsergroupGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/usergroup/getAutocomplete
     * @alias module:eZmaxAPI/model/UsergroupGetAutocompleteV2ResponseMPayload
     * @param a_objUsergroup {Array.<module:eZmaxAPI/model/UsergroupAutocompleteElementResponse>} An array of Usergroup autocomplete element response.
     */
    constructor(a_objUsergroup) { 
        
        UsergroupGetAutocompleteV2ResponseMPayload.initialize(this, a_objUsergroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUsergroup) { 
        obj['a_objUsergroup'] = a_objUsergroup;
    }

    /**
     * Constructs a <code>UsergroupGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupGetAutocompleteV2ResponseMPayload} The populated <code>UsergroupGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objUsergroup')) {
                obj['a_objUsergroup'] = ApiClient.convertToType(data['a_objUsergroup'], [UsergroupAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUsergroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUsergroup'])) {
                throw new Error("Expected the field `a_objUsergroup` to be an array in the JSON data but got " + data['a_objUsergroup']);
            }
            // validate the optional field `a_objUsergroup` (array)
            for (const item of data['a_objUsergroup']) {
                UsergroupAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Usergroup autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/UsergroupAutocompleteElementResponse>}
     */
    getAObjUsergroup() {
        return this.a_objUsergroup;
    }

    /**
     * Sets An array of Usergroup autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/UsergroupAutocompleteElementResponse>} a_objUsergroup An array of Usergroup autocomplete element response.
     */
    setAObjUsergroup(a_objUsergroup) {
        this['a_objUsergroup'] = a_objUsergroup;
    }

}

UsergroupGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objUsergroup"];

/**
 * An array of Usergroup autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/UsergroupAutocompleteElementResponse>} a_objUsergroup
 */
UsergroupGetAutocompleteV2ResponseMPayload.prototype['a_objUsergroup'] = undefined;






export default UsergroupGetAutocompleteV2ResponseMPayload;

