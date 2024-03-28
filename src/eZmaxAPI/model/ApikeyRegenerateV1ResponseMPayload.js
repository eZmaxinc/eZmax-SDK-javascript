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
import ApikeyResponseCompound from './ApikeyResponseCompound';

/**
 * The ApikeyRegenerateV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ApikeyRegenerateV1ResponseMPayload
 * @version 1.2.0
 */
class ApikeyRegenerateV1ResponseMPayload {
    /**
     * Constructs a new <code>ApikeyRegenerateV1ResponseMPayload</code>.
     * Response for GET /1/object/apikey/{pkiApikeyID}/regenerate
     * @alias module:eZmaxAPI/model/ApikeyRegenerateV1ResponseMPayload
     * @param objApikey {module:eZmaxAPI/model/ApikeyResponseCompound} 
     */
    constructor(objApikey) { 
        
        ApikeyRegenerateV1ResponseMPayload.initialize(this, objApikey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objApikey) { 
        obj['objApikey'] = objApikey;
    }

    /**
     * Constructs a <code>ApikeyRegenerateV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyRegenerateV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyRegenerateV1ResponseMPayload} The populated <code>ApikeyRegenerateV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyRegenerateV1ResponseMPayload();

            if (data.hasOwnProperty('objApikey')) {
                obj['objApikey'] = ApikeyResponseCompound.constructFromObject(data['objApikey']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyRegenerateV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyRegenerateV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApikeyRegenerateV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objApikey`
        if (data['objApikey']) { // data not null
          ApikeyResponseCompound.validateJSON(data['objApikey']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/ApikeyResponseCompound}
     */
    getObjApikey() {
        return this.objApikey;
    }

    /**
     * @param {module:eZmaxAPI/model/ApikeyResponseCompound} objApikey
     */
    setObjApikey(objApikey) {
        this['objApikey'] = objApikey;
    }

}

ApikeyRegenerateV1ResponseMPayload.RequiredProperties = ["objApikey"];

/**
 * @member {module:eZmaxAPI/model/ApikeyResponseCompound} objApikey
 */
ApikeyRegenerateV1ResponseMPayload.prototype['objApikey'] = undefined;






export default ApikeyRegenerateV1ResponseMPayload;
