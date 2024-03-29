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
import PaymenttermRequestCompound from './PaymenttermRequestCompound';

/**
 * The PaymenttermCreateObjectV1Request model module.
 * @module eZmaxAPI/model/PaymenttermCreateObjectV1Request
 * @version 1.1.18
 */
class PaymenttermCreateObjectV1Request {
    /**
     * Constructs a new <code>PaymenttermCreateObjectV1Request</code>.
     * Request for POST /1/object/paymentterm
     * @alias module:eZmaxAPI/model/PaymenttermCreateObjectV1Request
     * @param a_objPaymentterm {Array.<module:eZmaxAPI/model/PaymenttermRequestCompound>} 
     */
    constructor(a_objPaymentterm) { 
        
        PaymenttermCreateObjectV1Request.initialize(this, a_objPaymentterm);
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
     * Constructs a <code>PaymenttermCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermCreateObjectV1Request} The populated <code>PaymenttermCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermCreateObjectV1Request();

            if (data.hasOwnProperty('a_objPaymentterm')) {
                obj['a_objPaymentterm'] = ApiClient.convertToType(data['a_objPaymentterm'], [PaymenttermRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermCreateObjectV1Request.RequiredProperties) {
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
                PaymenttermRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/PaymenttermRequestCompound>}
     */
    getAObjPaymentterm() {
        return this.a_objPaymentterm;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/PaymenttermRequestCompound>} a_objPaymentterm
     */
    setAObjPaymentterm(a_objPaymentterm) {
        this['a_objPaymentterm'] = a_objPaymentterm;
    }

}

PaymenttermCreateObjectV1Request.RequiredProperties = ["a_objPaymentterm"];

/**
 * @member {Array.<module:eZmaxAPI/model/PaymenttermRequestCompound>} a_objPaymentterm
 */
PaymenttermCreateObjectV1Request.prototype['a_objPaymentterm'] = undefined;






export default PaymenttermCreateObjectV1Request;

