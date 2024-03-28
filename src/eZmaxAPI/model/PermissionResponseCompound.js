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
import PermissionResponse from './PermissionResponse';

/**
 * The PermissionResponseCompound model module.
 * @module eZmaxAPI/model/PermissionResponseCompound
 * @version 1.2.0
 */
class PermissionResponseCompound {
    /**
     * Constructs a new <code>PermissionResponseCompound</code>.
     * A Permission Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/PermissionResponseCompound
     * @implements module:eZmaxAPI/model/PermissionResponse
     * @param pkiPermissionID {Number} The unique ID of the Permission
     * @param fkiModulesectionID {Number} The unique ID of the Modulesection
     */
    constructor(pkiPermissionID, fkiModulesectionID) { 
        PermissionResponse.initialize(this, pkiPermissionID, fkiModulesectionID);
        PermissionResponseCompound.initialize(this, pkiPermissionID, fkiModulesectionID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPermissionID, fkiModulesectionID) { 
        obj['pkiPermissionID'] = pkiPermissionID;
        obj['fkiModulesectionID'] = fkiModulesectionID;
    }

    /**
     * Constructs a <code>PermissionResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PermissionResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PermissionResponseCompound} The populated <code>PermissionResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionResponseCompound();
            PermissionResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiPermissionID')) {
                obj['pkiPermissionID'] = ApiClient.convertToType(data['pkiPermissionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiApikeyID')) {
                obj['fkiApikeyID'] = ApiClient.convertToType(data['fkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupID')) {
                obj['fkiUsergroupID'] = ApiClient.convertToType(data['fkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiCompanyID')) {
                obj['fkiCompanyID'] = ApiClient.convertToType(data['fkiCompanyID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModulesectionID')) {
                obj['fkiModulesectionID'] = ApiClient.convertToType(data['fkiModulesectionID'], 'Number');
            }
            if (data.hasOwnProperty('sCompanyNameX')) {
                obj['sCompanyNameX'] = ApiClient.convertToType(data['sCompanyNameX'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PermissionResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCompanyNameX'] && !(typeof data['sCompanyNameX'] === 'string' || data['sCompanyNameX'] instanceof String)) {
            throw new Error("Expected the field `sCompanyNameX` to be a primitive type in the JSON string but got " + data['sCompanyNameX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Permission
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiPermissionID() {
        return this.pkiPermissionID;
    }

    /**
     * Sets The unique ID of the Permission
     * @param {Number} pkiPermissionID The unique ID of the Permission
     */
    setPkiPermissionID(pkiPermissionID) {
        this['pkiPermissionID'] = pkiPermissionID;
    }
/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getFkiUserID() {
        return this.fkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} fkiUserID The unique ID of the User
     */
    setFkiUserID(fkiUserID) {
        this['fkiUserID'] = fkiUserID;
    }
/**
     * Returns The unique ID of the Apikey
     * minimum: 0
     * @return {Number}
     */
    getFkiApikeyID() {
        return this.fkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} fkiApikeyID The unique ID of the Apikey
     */
    setFkiApikeyID(fkiApikeyID) {
        this['fkiApikeyID'] = fkiApikeyID;
    }
/**
     * Returns The unique ID of the Usergroup
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getFkiUsergroupID() {
        return this.fkiUsergroupID;
    }

    /**
     * Sets The unique ID of the Usergroup
     * @param {Number} fkiUsergroupID The unique ID of the Usergroup
     */
    setFkiUsergroupID(fkiUsergroupID) {
        this['fkiUsergroupID'] = fkiUsergroupID;
    }
/**
     * Returns The unique ID of the Company
     * minimum: 1
     * maximum: 255
     * @return {Number}
     */
    getFkiCompanyID() {
        return this.fkiCompanyID;
    }

    /**
     * Sets The unique ID of the Company
     * @param {Number} fkiCompanyID The unique ID of the Company
     */
    setFkiCompanyID(fkiCompanyID) {
        this['fkiCompanyID'] = fkiCompanyID;
    }
/**
     * Returns The unique ID of the Modulesection
     * minimum: 0
     * @return {Number}
     */
    getFkiModulesectionID() {
        return this.fkiModulesectionID;
    }

    /**
     * Sets The unique ID of the Modulesection
     * @param {Number} fkiModulesectionID The unique ID of the Modulesection
     */
    setFkiModulesectionID(fkiModulesectionID) {
        this['fkiModulesectionID'] = fkiModulesectionID;
    }
/**
     * Returns The Name of the Company in the language of the requester
     * @return {String}
     */
    getSCompanyNameX() {
        return this.sCompanyNameX;
    }

    /**
     * Sets The Name of the Company in the language of the requester
     * @param {String} sCompanyNameX The Name of the Company in the language of the requester
     */
    setSCompanyNameX(sCompanyNameX) {
        this['sCompanyNameX'] = sCompanyNameX;
    }

}

PermissionResponseCompound.RequiredProperties = ["pkiPermissionID", "fkiModulesectionID"];

/**
 * The unique ID of the Permission
 * @member {Number} pkiPermissionID
 */
PermissionResponseCompound.prototype['pkiPermissionID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
PermissionResponseCompound.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
PermissionResponseCompound.prototype['fkiApikeyID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
PermissionResponseCompound.prototype['fkiUsergroupID'] = undefined;

/**
 * The unique ID of the Company
 * @member {Number} fkiCompanyID
 */
PermissionResponseCompound.prototype['fkiCompanyID'] = undefined;

/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
PermissionResponseCompound.prototype['fkiModulesectionID'] = undefined;

/**
 * The Name of the Company in the language of the requester
 * @member {String} sCompanyNameX
 */
PermissionResponseCompound.prototype['sCompanyNameX'] = undefined;


// Implement PermissionResponse interface:
/**
 * The unique ID of the Permission
 * @member {Number} pkiPermissionID
 */
PermissionResponse.prototype['pkiPermissionID'] = undefined;
/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
PermissionResponse.prototype['fkiUserID'] = undefined;
/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
PermissionResponse.prototype['fkiApikeyID'] = undefined;
/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
PermissionResponse.prototype['fkiUsergroupID'] = undefined;
/**
 * The unique ID of the Company
 * @member {Number} fkiCompanyID
 */
PermissionResponse.prototype['fkiCompanyID'] = undefined;
/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
PermissionResponse.prototype['fkiModulesectionID'] = undefined;
/**
 * The Name of the Company in the language of the requester
 * @member {String} sCompanyNameX
 */
PermissionResponse.prototype['sCompanyNameX'] = undefined;




export default PermissionResponseCompound;

