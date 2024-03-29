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
import ApikeyResponseCompound from './ApikeyResponseCompound';

/**
 * The ApikeyGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/ApikeyGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class ApikeyGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>ApikeyGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/apikey/{pkiApikeyID}
     * @alias module:eZmaxAPI/model/ApikeyGetObjectV2ResponseMPayload
     * @param objApikey {module:eZmaxAPI/model/ApikeyResponseCompound} 
     */
    constructor(objApikey) { 
        
        ApikeyGetObjectV2ResponseMPayload.initialize(this, objApikey);
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
     * Constructs a <code>ApikeyGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ApikeyGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ApikeyGetObjectV2ResponseMPayload} The populated <code>ApikeyGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApikeyGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objApikey')) {
                obj['objApikey'] = ApikeyResponseCompound.constructFromObject(data['objApikey']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApikeyGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApikeyGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApikeyGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
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

ApikeyGetObjectV2ResponseMPayload.RequiredProperties = ["objApikey"];

/**
 * @member {module:eZmaxAPI/model/ApikeyResponseCompound} objApikey
 */
ApikeyGetObjectV2ResponseMPayload.prototype['objApikey'] = undefined;






export default ApikeyGetObjectV2ResponseMPayload;

