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
import BillingentityinternalListElement from './BillingentityinternalListElement';

/**
 * The BillingentityinternalGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayloadAllOf
 * @version 1.1.18
 */
class BillingentityinternalGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>BillingentityinternalGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayloadAllOf
     * @param a_objBillingentityinternal {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} 
     */
    constructor(a_objBillingentityinternal) { 
        
        BillingentityinternalGetListV1ResponseMPayloadAllOf.initialize(this, a_objBillingentityinternal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objBillingentityinternal) { 
        obj['a_objBillingentityinternal'] = a_objBillingentityinternal;
    }

    /**
     * Constructs a <code>BillingentityinternalGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayloadAllOf} The populated <code>BillingentityinternalGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objBillingentityinternal')) {
                obj['a_objBillingentityinternal'] = ApiClient.convertToType(data['a_objBillingentityinternal'], [BillingentityinternalListElement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalGetListV1ResponseMPayloadAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalGetListV1ResponseMPayloadAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalGetListV1ResponseMPayloadAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objBillingentityinternal']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objBillingentityinternal'])) {
                throw new Error("Expected the field `a_objBillingentityinternal` to be an array in the JSON data but got " + data['a_objBillingentityinternal']);
            }
            // validate the optional field `a_objBillingentityinternal` (array)
            for (const item of data['a_objBillingentityinternal']) {
                BillingentityinternalListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>}
     */
    getAObjBillingentityinternal() {
        return this.a_objBillingentityinternal;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} a_objBillingentityinternal
     */
    setAObjBillingentityinternal(a_objBillingentityinternal) {
        this['a_objBillingentityinternal'] = a_objBillingentityinternal;
    }

}

BillingentityinternalGetListV1ResponseMPayloadAllOf.RequiredProperties = ["a_objBillingentityinternal"];

/**
 * @member {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} a_objBillingentityinternal
 */
BillingentityinternalGetListV1ResponseMPayloadAllOf.prototype['a_objBillingentityinternal'] = undefined;






export default BillingentityinternalGetListV1ResponseMPayloadAllOf;

