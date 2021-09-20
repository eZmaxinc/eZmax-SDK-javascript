/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.47
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyCreateObjectV1ResponseMPayload from './ApikeyCreateObjectV1ResponseMPayload';

/**
 * The ApikeyCreateObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV1ResponseAllOf
 * @version 1.0.47
 */
class ApikeyCreateObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>ApikeyCreateObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        ApikeyCreateObjectV1ResponseAllOf.initialize(this, mPayload);
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
     * Constructs a <code>ApikeyCreateObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseAllOf} The populated <code>ApikeyCreateObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApikeyCreateObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload} mPayload
 */
ApikeyCreateObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default ApikeyCreateObjectV1ResponseAllOf;

