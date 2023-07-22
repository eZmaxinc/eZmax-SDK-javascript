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
import PeriodAutocompleteElementResponse from './PeriodAutocompleteElementResponse';

/**
 * The PeriodGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/PeriodGetAutocompleteV2ResponseMPayload
 * @version 1.1.18
 */
class PeriodGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>PeriodGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/period/getAutocomplete
     * @alias module:eZmaxAPI/model/PeriodGetAutocompleteV2ResponseMPayload
     */
    constructor() { 
        
        PeriodGetAutocompleteV2ResponseMPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PeriodGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PeriodGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PeriodGetAutocompleteV2ResponseMPayload} The populated <code>PeriodGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PeriodGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objPeriod')) {
                obj['a_objPeriod'] = ApiClient.convertToType(data['a_objPeriod'], [PeriodAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PeriodGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PeriodGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        if (data['a_objPeriod']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objPeriod'])) {
                throw new Error("Expected the field `a_objPeriod` to be an array in the JSON data but got " + data['a_objPeriod']);
            }
            // validate the optional field `a_objPeriod` (array)
            for (const item of data['a_objPeriod']) {
                PeriodAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Period autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/PeriodAutocompleteElementResponse>}
     */
    getAObjPeriod() {
        return this.a_objPeriod;
    }

    /**
     * Sets An array of Period autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/PeriodAutocompleteElementResponse>} a_objPeriod An array of Period autocomplete element response.
     */
    setAObjPeriod(a_objPeriod) {
        this['a_objPeriod'] = a_objPeriod;
    }

}



/**
 * An array of Period autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/PeriodAutocompleteElementResponse>} a_objPeriod
 */
PeriodGetAutocompleteV2ResponseMPayload.prototype['a_objPeriod'] = undefined;






export default PeriodGetAutocompleteV2ResponseMPayload;

