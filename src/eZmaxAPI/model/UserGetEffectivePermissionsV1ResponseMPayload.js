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
import ModulegroupResponseCompound from './ModulegroupResponseCompound';

/**
 * The UserGetEffectivePermissionsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UserGetEffectivePermissionsV1ResponseMPayload
 * @version 1.1.18
 */
class UserGetEffectivePermissionsV1ResponseMPayload {
    /**
     * Constructs a new <code>UserGetEffectivePermissionsV1ResponseMPayload</code>.
     * Response for GET /1/object/user/{pkiUserID}/getEffectivePermissions
     * @alias module:eZmaxAPI/model/UserGetEffectivePermissionsV1ResponseMPayload
     * @param a_objModulegroup {Array.<module:eZmaxAPI/model/ModulegroupResponseCompound>} 
     */
    constructor(a_objModulegroup) { 
        
        UserGetEffectivePermissionsV1ResponseMPayload.initialize(this, a_objModulegroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objModulegroup) { 
        obj['a_objModulegroup'] = a_objModulegroup;
    }

    /**
     * Constructs a <code>UserGetEffectivePermissionsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserGetEffectivePermissionsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserGetEffectivePermissionsV1ResponseMPayload} The populated <code>UserGetEffectivePermissionsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserGetEffectivePermissionsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objModulegroup')) {
                obj['a_objModulegroup'] = ApiClient.convertToType(data['a_objModulegroup'], [ModulegroupResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserGetEffectivePermissionsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserGetEffectivePermissionsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserGetEffectivePermissionsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objModulegroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objModulegroup'])) {
                throw new Error("Expected the field `a_objModulegroup` to be an array in the JSON data but got " + data['a_objModulegroup']);
            }
            // validate the optional field `a_objModulegroup` (array)
            for (const item of data['a_objModulegroup']) {
                ModulegroupResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ModulegroupResponseCompound>}
     */
    getAObjModulegroup() {
        return this.a_objModulegroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ModulegroupResponseCompound>} a_objModulegroup
     */
    setAObjModulegroup(a_objModulegroup) {
        this['a_objModulegroup'] = a_objModulegroup;
    }

}

UserGetEffectivePermissionsV1ResponseMPayload.RequiredProperties = ["a_objModulegroup"];

/**
 * @member {Array.<module:eZmaxAPI/model/ModulegroupResponseCompound>} a_objModulegroup
 */
UserGetEffectivePermissionsV1ResponseMPayload.prototype['a_objModulegroup'] = undefined;






export default UserGetEffectivePermissionsV1ResponseMPayload;
