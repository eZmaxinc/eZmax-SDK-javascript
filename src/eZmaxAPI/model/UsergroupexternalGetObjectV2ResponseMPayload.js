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
import UsergroupexternalResponseCompound from './UsergroupexternalResponseCompound';

/**
 * The UsergroupexternalGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupexternalGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class UsergroupexternalGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupexternalGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/usergroupexternal/{pkiUsergroupexternalID}
     * @alias module:eZmaxAPI/model/UsergroupexternalGetObjectV2ResponseMPayload
     * @param objUsergroupexternal {module:eZmaxAPI/model/UsergroupexternalResponseCompound} 
     */
    constructor(objUsergroupexternal) { 
        
        UsergroupexternalGetObjectV2ResponseMPayload.initialize(this, objUsergroupexternal);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroupexternal) { 
        obj['objUsergroupexternal'] = objUsergroupexternal;
    }

    /**
     * Constructs a <code>UsergroupexternalGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupexternalGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupexternalGetObjectV2ResponseMPayload} The populated <code>UsergroupexternalGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupexternalGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objUsergroupexternal')) {
                obj['objUsergroupexternal'] = UsergroupexternalResponseCompound.constructFromObject(data['objUsergroupexternal']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupexternalGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupexternalGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupexternalGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroupexternal`
        if (data['objUsergroupexternal']) { // data not null
          UsergroupexternalResponseCompound.validateJSON(data['objUsergroupexternal']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UsergroupexternalResponseCompound}
     */
    getObjUsergroupexternal() {
        return this.objUsergroupexternal;
    }

    /**
     * @param {module:eZmaxAPI/model/UsergroupexternalResponseCompound} objUsergroupexternal
     */
    setObjUsergroupexternal(objUsergroupexternal) {
        this['objUsergroupexternal'] = objUsergroupexternal;
    }

}

UsergroupexternalGetObjectV2ResponseMPayload.RequiredProperties = ["objUsergroupexternal"];

/**
 * @member {module:eZmaxAPI/model/UsergroupexternalResponseCompound} objUsergroupexternal
 */
UsergroupexternalGetObjectV2ResponseMPayload.prototype['objUsergroupexternal'] = undefined;






export default UsergroupexternalGetObjectV2ResponseMPayload;
