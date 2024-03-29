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
import UsergroupResponseCompound from './UsergroupResponseCompound';

/**
 * The UsergroupGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupGetObjectV2ResponseMPayload
 * @version 1.1.18
 */
class UsergroupGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/usergroup/{pkiUsergroupID}
     * @alias module:eZmaxAPI/model/UsergroupGetObjectV2ResponseMPayload
     * @param objUsergroup {module:eZmaxAPI/model/UsergroupResponseCompound} 
     */
    constructor(objUsergroup) { 
        
        UsergroupGetObjectV2ResponseMPayload.initialize(this, objUsergroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroup) { 
        obj['objUsergroup'] = objUsergroup;
    }

    /**
     * Constructs a <code>UsergroupGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupGetObjectV2ResponseMPayload} The populated <code>UsergroupGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objUsergroup')) {
                obj['objUsergroup'] = UsergroupResponseCompound.constructFromObject(data['objUsergroup']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroup`
        if (data['objUsergroup']) { // data not null
          UsergroupResponseCompound.validateJSON(data['objUsergroup']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UsergroupResponseCompound}
     */
    getObjUsergroup() {
        return this.objUsergroup;
    }

    /**
     * @param {module:eZmaxAPI/model/UsergroupResponseCompound} objUsergroup
     */
    setObjUsergroup(objUsergroup) {
        this['objUsergroup'] = objUsergroup;
    }

}

UsergroupGetObjectV2ResponseMPayload.RequiredProperties = ["objUsergroup"];

/**
 * @member {module:eZmaxAPI/model/UsergroupResponseCompound} objUsergroup
 */
UsergroupGetObjectV2ResponseMPayload.prototype['objUsergroup'] = undefined;






export default UsergroupGetObjectV2ResponseMPayload;

