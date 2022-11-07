/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyCreateObjectV2ResponseMPayload from './ApikeyCreateObjectV2ResponseMPayload';

/**
 * The ApikeyCreateObjectV2ResponseAllOf model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV2ResponseAllOf
 * @version 1.1.15
 */
class ApikeyCreateObjectV2ResponseAllOf {
    /**
     * Constructs a new <code>ApikeyCreateObjectV2ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        ApikeyCreateObjectV2ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>ApikeyCreateObjectV2ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseAllOf} The populated <code>ApikeyCreateObjectV2ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV2ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApikeyCreateObjectV2ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/ApikeyCreateObjectV2ResponseMPayload} mPayload
 */
ApikeyCreateObjectV2ResponseAllOf.prototype['mPayload'] = undefined;






export default ApikeyCreateObjectV2ResponseAllOf;

