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
import BillingentityinternalResponseCompound from './BillingentityinternalResponseCompound';

/**
 * The BillingentityinternalGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/BillingentityinternalGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class BillingentityinternalGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>BillingentityinternalGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/billingentityinternal/{pkiBillingentityinternalID}
     * @alias module:eZmaxAPI/model/BillingentityinternalGetObjectV2ResponseMPayload
     * @param objBillingentityinternal {module:eZmaxAPI/model/BillingentityinternalResponseCompound} 
     */
    constructor(objBillingentityinternal) { 
        
        BillingentityinternalGetObjectV2ResponseMPayload.initialize(this, objBillingentityinternal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objBillingentityinternal) { 
        obj['objBillingentityinternal'] = objBillingentityinternal;
    }

    /**
     * Constructs a <code>BillingentityinternalGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalGetObjectV2ResponseMPayload} The populated <code>BillingentityinternalGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objBillingentityinternal')) {
                obj['objBillingentityinternal'] = BillingentityinternalResponseCompound.constructFromObject(data['objBillingentityinternal']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBillingentityinternal`
        if (data['objBillingentityinternal']) { // data not null
          BillingentityinternalResponseCompound.validateJSON(data['objBillingentityinternal']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/BillingentityinternalResponseCompound}
     */
    getObjBillingentityinternal() {
        return this.objBillingentityinternal;
    }

    /**
     * @param {module:eZmaxAPI/model/BillingentityinternalResponseCompound} objBillingentityinternal
     */
    setObjBillingentityinternal(objBillingentityinternal) {
        this['objBillingentityinternal'] = objBillingentityinternal;
    }

}

BillingentityinternalGetObjectV2ResponseMPayload.RequiredProperties = ["objBillingentityinternal"];

/**
 * @member {module:eZmaxAPI/model/BillingentityinternalResponseCompound} objBillingentityinternal
 */
BillingentityinternalGetObjectV2ResponseMPayload.prototype['objBillingentityinternal'] = undefined;






export default BillingentityinternalGetObjectV2ResponseMPayload;
