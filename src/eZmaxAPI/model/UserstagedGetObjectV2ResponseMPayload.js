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
import UserstagedResponseCompound from './UserstagedResponseCompound';

/**
 * The UserstagedGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/UserstagedGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class UserstagedGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>UserstagedGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/userstaged/{pkiUserstagedID}
     * @alias module:eZmaxAPI/model/UserstagedGetObjectV2ResponseMPayload
     * @param objUserstaged {module:eZmaxAPI/model/UserstagedResponseCompound} 
     */
    constructor(objUserstaged) { 
        
        UserstagedGetObjectV2ResponseMPayload.initialize(this, objUserstaged);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUserstaged) { 
        obj['objUserstaged'] = objUserstaged;
    }

    /**
     * Constructs a <code>UserstagedGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserstagedGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserstagedGetObjectV2ResponseMPayload} The populated <code>UserstagedGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserstagedGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objUserstaged')) {
                obj['objUserstaged'] = UserstagedResponseCompound.constructFromObject(data['objUserstaged']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserstagedGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserstagedGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserstagedGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUserstaged`
        if (data['objUserstaged']) { // data not null
          UserstagedResponseCompound.validateJSON(data['objUserstaged']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UserstagedResponseCompound}
     */
    getObjUserstaged() {
        return this.objUserstaged;
    }

    /**
     * @param {module:eZmaxAPI/model/UserstagedResponseCompound} objUserstaged
     */
    setObjUserstaged(objUserstaged) {
        this['objUserstaged'] = objUserstaged;
    }

}

UserstagedGetObjectV2ResponseMPayload.RequiredProperties = ["objUserstaged"];

/**
 * @member {module:eZmaxAPI/model/UserstagedResponseCompound} objUserstaged
 */
UserstagedGetObjectV2ResponseMPayload.prototype['objUserstaged'] = undefined;






export default UserstagedGetObjectV2ResponseMPayload;

