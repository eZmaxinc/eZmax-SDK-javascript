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
import BillingentityinternalGetListV1ResponseMPayloadAllOf from './BillingentityinternalGetListV1ResponseMPayloadAllOf';
import BillingentityinternalListElement from './BillingentityinternalListElement';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';

/**
 * The BillingentityinternalGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayload
 * @version 1.1.17
 */
class BillingentityinternalGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>BillingentityinternalGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/billingentityinternal/getList
     * @alias module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayloadAllOf
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param a_objBillingentityinternal {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} 
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     */
    constructor(a_objBillingentityinternal, iRowReturned, iRowFiltered) { 
        BillingentityinternalGetListV1ResponseMPayloadAllOf.initialize(this, a_objBillingentityinternal);CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        BillingentityinternalGetListV1ResponseMPayload.initialize(this, a_objBillingentityinternal, iRowReturned, iRowFiltered);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objBillingentityinternal, iRowReturned, iRowFiltered) { 
        obj['a_objBillingentityinternal'] = a_objBillingentityinternal;
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
    }

    /**
     * Constructs a <code>BillingentityinternalGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalGetListV1ResponseMPayload} The populated <code>BillingentityinternalGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalGetListV1ResponseMPayload();
            BillingentityinternalGetListV1ResponseMPayloadAllOf.constructFromObject(data, obj);
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('a_objBillingentityinternal')) {
                obj['a_objBillingentityinternal'] = ApiClient.convertToType(data['a_objBillingentityinternal'], [BillingentityinternalListElement]);
            }
            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalGetListV1ResponseMPayload.RequiredProperties) {
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
/**
     * Returns The number of rows returned
     * @return {Number}
     */
    getIRowReturned() {
        return this.iRowReturned;
    }

    /**
     * Sets The number of rows returned
     * @param {Number} iRowReturned The number of rows returned
     */
    setIRowReturned(iRowReturned) {
        this['iRowReturned'] = iRowReturned;
    }
/**
     * Returns The number of rows matching your filters (if any) or the total number of rows
     * @return {Number}
     */
    getIRowFiltered() {
        return this.iRowFiltered;
    }

    /**
     * Sets The number of rows matching your filters (if any) or the total number of rows
     * @param {Number} iRowFiltered The number of rows matching your filters (if any) or the total number of rows
     */
    setIRowFiltered(iRowFiltered) {
        this['iRowFiltered'] = iRowFiltered;
    }

}

BillingentityinternalGetListV1ResponseMPayload.RequiredProperties = ["a_objBillingentityinternal", "iRowReturned", "iRowFiltered"];

/**
 * @member {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} a_objBillingentityinternal
 */
BillingentityinternalGetListV1ResponseMPayload.prototype['a_objBillingentityinternal'] = undefined;

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
BillingentityinternalGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
BillingentityinternalGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;


// Implement BillingentityinternalGetListV1ResponseMPayloadAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/BillingentityinternalListElement>} a_objBillingentityinternal
 */
BillingentityinternalGetListV1ResponseMPayloadAllOf.prototype['a_objBillingentityinternal'] = undefined;
// Implement CommonGetListV1ResponseMPayload interface:
/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
CommonGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;
/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
CommonGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;




export default BillingentityinternalGetListV1ResponseMPayload;

