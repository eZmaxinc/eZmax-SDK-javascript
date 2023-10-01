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
import BillingentityexternalAutocompleteElementResponse from './BillingentityexternalAutocompleteElementResponse';

/**
 * The BillingentityexternalGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/BillingentityexternalGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class BillingentityexternalGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>BillingentityexternalGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/billingentityexternal/getAutocomplete
     * @alias module:eZmaxAPI/model/BillingentityexternalGetAutocompleteV2ResponseMPayload
     * @param a_objBillingentityexternal {Array.<module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse>} An array of Billingentityexternal autocomplete element response.
     */
    constructor(a_objBillingentityexternal) { 
        
        BillingentityexternalGetAutocompleteV2ResponseMPayload.initialize(this, a_objBillingentityexternal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objBillingentityexternal) { 
        obj['a_objBillingentityexternal'] = a_objBillingentityexternal;
    }

    /**
     * Constructs a <code>BillingentityexternalGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityexternalGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityexternalGetAutocompleteV2ResponseMPayload} The populated <code>BillingentityexternalGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityexternalGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objBillingentityexternal')) {
                obj['a_objBillingentityexternal'] = ApiClient.convertToType(data['a_objBillingentityexternal'], [BillingentityexternalAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityexternalGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityexternalGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityexternalGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objBillingentityexternal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objBillingentityexternal'])) {
                throw new Error("Expected the field `a_objBillingentityexternal` to be an array in the JSON data but got " + data['a_objBillingentityexternal']);
            }
            // validate the optional field `a_objBillingentityexternal` (array)
            for (const item of data['a_objBillingentityexternal']) {
                BillingentityexternalAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Billingentityexternal autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse>}
     */
    getAObjBillingentityexternal() {
        return this.a_objBillingentityexternal;
    }

    /**
     * Sets An array of Billingentityexternal autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse>} a_objBillingentityexternal An array of Billingentityexternal autocomplete element response.
     */
    setAObjBillingentityexternal(a_objBillingentityexternal) {
        this['a_objBillingentityexternal'] = a_objBillingentityexternal;
    }

}

BillingentityexternalGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objBillingentityexternal"];

/**
 * An array of Billingentityexternal autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse>} a_objBillingentityexternal
 */
BillingentityexternalGetAutocompleteV2ResponseMPayload.prototype['a_objBillingentityexternal'] = undefined;






export default BillingentityexternalGetAutocompleteV2ResponseMPayload;

