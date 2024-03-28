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
import UsergroupdelegationResponseCompound from './UsergroupdelegationResponseCompound';

/**
 * The UsergroupdelegationGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupdelegationGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class UsergroupdelegationGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupdelegationGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/usergroupdelegation/{pkiUsergroupdelegationID}
     * @alias module:eZmaxAPI/model/UsergroupdelegationGetObjectV2ResponseMPayload
     * @param objUsergroupdelegation {module:eZmaxAPI/model/UsergroupdelegationResponseCompound} 
     */
    constructor(objUsergroupdelegation) { 
        
        UsergroupdelegationGetObjectV2ResponseMPayload.initialize(this, objUsergroupdelegation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroupdelegation) { 
        obj['objUsergroupdelegation'] = objUsergroupdelegation;
    }

    /**
     * Constructs a <code>UsergroupdelegationGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupdelegationGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupdelegationGetObjectV2ResponseMPayload} The populated <code>UsergroupdelegationGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupdelegationGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objUsergroupdelegation')) {
                obj['objUsergroupdelegation'] = UsergroupdelegationResponseCompound.constructFromObject(data['objUsergroupdelegation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupdelegationGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupdelegationGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupdelegationGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroupdelegation`
        if (data['objUsergroupdelegation']) { // data not null
          UsergroupdelegationResponseCompound.validateJSON(data['objUsergroupdelegation']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UsergroupdelegationResponseCompound}
     */
    getObjUsergroupdelegation() {
        return this.objUsergroupdelegation;
    }

    /**
     * @param {module:eZmaxAPI/model/UsergroupdelegationResponseCompound} objUsergroupdelegation
     */
    setObjUsergroupdelegation(objUsergroupdelegation) {
        this['objUsergroupdelegation'] = objUsergroupdelegation;
    }

}

UsergroupdelegationGetObjectV2ResponseMPayload.RequiredProperties = ["objUsergroupdelegation"];

/**
 * @member {module:eZmaxAPI/model/UsergroupdelegationResponseCompound} objUsergroupdelegation
 */
UsergroupdelegationGetObjectV2ResponseMPayload.prototype['objUsergroupdelegation'] = undefined;






export default UsergroupdelegationGetObjectV2ResponseMPayload;
