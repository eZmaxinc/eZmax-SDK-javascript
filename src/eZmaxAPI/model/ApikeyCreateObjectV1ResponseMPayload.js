/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ApikeyResponseCompound from './ApikeyResponseCompound';

/**
 * The ApikeyCreateObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload
 * @version 1.1.7
 */
class ApikeyCreateObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>ApikeyCreateObjectV1ResponseMPayload</code>.
     * Payload for the /1/object/apikey/createObject API Request
     * @alias module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload
     * @param a_objApikey {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} 
     */
    constructor(a_objApikey) { 
        
        ApikeyCreateObjectV1ResponseMPayload.initialize(this, a_objApikey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objApikey) { 
        obj['a_objApikey'] = a_objApikey;
    }

    /**
     * Constructs a <code>ApikeyCreateObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyCreateObjectV1ResponseMPayload} The populated <code>ApikeyCreateObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyCreateObjectV1ResponseMPayload();

            if (data.hasOwnProperty('a_objApikey')) {
                obj['a_objApikey'] = ApiClient.convertToType(data['a_objApikey'], [ApikeyResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>}
     */
    getAObjApikey() {
        return this.a_objApikey;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} a_objApikey
     */
    setAObjApikey(a_objApikey) {
        this['a_objApikey'] = a_objApikey;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/ApikeyResponseCompound>} a_objApikey
 */
ApikeyCreateObjectV1ResponseMPayload.prototype['a_objApikey'] = undefined;






export default ApikeyCreateObjectV1ResponseMPayload;

