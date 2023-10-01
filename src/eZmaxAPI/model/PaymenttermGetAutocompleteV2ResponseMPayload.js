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
import PaymenttermAutocompleteElementResponse from './PaymenttermAutocompleteElementResponse';

/**
 * The PaymenttermGetAutocompleteV2ResponseMPayload model module.
 * @module eZmaxAPI/model/PaymenttermGetAutocompleteV2ResponseMPayload
 * @version 1.2.0
 */
class PaymenttermGetAutocompleteV2ResponseMPayload {
    /**
     * Constructs a new <code>PaymenttermGetAutocompleteV2ResponseMPayload</code>.
     * Payload for POST /2/object/paymentterm/getAutocomplete
     * @alias module:eZmaxAPI/model/PaymenttermGetAutocompleteV2ResponseMPayload
     * @param a_objPaymentterm {Array.<module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse>} An array of Paymentterm autocomplete element response.
     */
    constructor(a_objPaymentterm) { 
        
        PaymenttermGetAutocompleteV2ResponseMPayload.initialize(this, a_objPaymentterm);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objPaymentterm) { 
        obj['a_objPaymentterm'] = a_objPaymentterm;
    }

    /**
     * Constructs a <code>PaymenttermGetAutocompleteV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermGetAutocompleteV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermGetAutocompleteV2ResponseMPayload} The populated <code>PaymenttermGetAutocompleteV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermGetAutocompleteV2ResponseMPayload();

            if (data.hasOwnProperty('a_objPaymentterm')) {
                obj['a_objPaymentterm'] = ApiClient.convertToType(data['a_objPaymentterm'], [PaymenttermAutocompleteElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermGetAutocompleteV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermGetAutocompleteV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermGetAutocompleteV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objPaymentterm']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objPaymentterm'])) {
                throw new Error("Expected the field `a_objPaymentterm` to be an array in the JSON data but got " + data['a_objPaymentterm']);
            }
            // validate the optional field `a_objPaymentterm` (array)
            for (const item of data['a_objPaymentterm']) {
                PaymenttermAutocompleteElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns An array of Paymentterm autocomplete element response.
     * @return {Array.<module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse>}
     */
    getAObjPaymentterm() {
        return this.a_objPaymentterm;
    }

    /**
     * Sets An array of Paymentterm autocomplete element response.
     * @param {Array.<module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse>} a_objPaymentterm An array of Paymentterm autocomplete element response.
     */
    setAObjPaymentterm(a_objPaymentterm) {
        this['a_objPaymentterm'] = a_objPaymentterm;
    }

}

PaymenttermGetAutocompleteV2ResponseMPayload.RequiredProperties = ["a_objPaymentterm"];

/**
 * An array of Paymentterm autocomplete element response.
 * @member {Array.<module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse>} a_objPaymentterm
 */
PaymenttermGetAutocompleteV2ResponseMPayload.prototype['a_objPaymentterm'] = undefined;






export default PaymenttermGetAutocompleteV2ResponseMPayload;

