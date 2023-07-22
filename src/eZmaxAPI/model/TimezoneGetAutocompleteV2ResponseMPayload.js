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

import ApiClient from '../ApiClient';
import TimezoneAutocompleteElementResponse from './TimezoneAutocompleteElementResponse';

/**
 * The TimezoneGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/TimezoneGetAutocompleteV2ResponseMPayload
 * @version 1.1.18
 */
class TimezoneGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>TimezoneGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/timezone/getAutocomplete
     * @alias module:eZmaxAPI/model/TimezoneGetAutocompleteV2ResponseMPayload
     * @param a_objTimezone {Array.<module:eZmaxAPI/model/TimezoneAutocompleteElementResponse>} An array of Timezone autocomplete element response.
     */
    constructor(a_objTimezone) { 
        
        TimezoneGetAutocompleteV2ResponseMPayload.initialize(this, a_objTimezone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objTimezone) { 
        obj['a_objTimezone'] = a_objTimezone;
    }

    /**
     * Constructs a <code>TimezoneGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/TimezoneGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/TimezoneGetAutocompleteV2ResponseMPayload} The populated <code>TimezoneGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objTimezone')) {
                obj['a_objTimezone'] = ApiClient.convertToType(data['a_objTimezone'], [TimezoneAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TimezoneGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TimezoneGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TimezoneGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objTimezone']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objTimezone'])) {
                throw new Error("Expected the field `a_objTimezone` to be an array in the JSON data but got " + data['a_objTimezone']);
            }
            // validate the optional field `a_objTimezone` (array)
            for (const item of data['a_objTimezone']) {
                TimezoneAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Timezone autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/TimezoneAutocompleteElementResponse>}
     */
    getAObjTimezone() {
        return this.a_objTimezone;
    }

    /**
     * Sets An array of Timezone autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/TimezoneAutocompleteElementResponse>} a_objTimezone An array of Timezone autocomplete element response.
     */
    setAObjTimezone(a_objTimezone) {
        this['a_objTimezone'] = a_objTimezone;
    }

}

TimezoneGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objTimezone"];

/**
 * An array of Timezone autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/TimezoneAutocompleteElementResponse>} a_objTimezone
 */
TimezoneGetAutocompleteV2ResponseMPayload.prototype['a_objTimezone'] = undefined;






export default TimezoneGetAutocompleteV2ResponseMPayload;

