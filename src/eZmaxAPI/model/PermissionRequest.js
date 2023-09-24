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

/**
 * The PermissionRequest model module.
 * @module eZmaxAPI/model/PermissionRequest
 * @version 1.2.0
 */
class PermissionRequest {
    /**
     * Constructs a new <code>PermissionRequest</code>.
     * A Permission Object
     * @alias module:eZmaxAPI/model/PermissionRequest
     * @param fkiModulesectionID {Number} The unique ID of the Modulesection
     */
    constructor(fkiModulesectionID) { 
        
        PermissionRequest.initialize(this, fkiModulesectionID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiModulesectionID) { 
        obj['fkiModulesectionID'] = fkiModulesectionID;
    }

    /**
     * Constructs a <code>PermissionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PermissionRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PermissionRequest} The populated <code>PermissionRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PermissionRequest();

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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PermissionRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PermissionRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PermissionRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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

}

PermissionRequest.RequiredProperties = ["fkiModulesectionID"];

/**
 * The unique ID of the Permission
 * @member {Number} pkiPermissionID
 */
PermissionRequest.prototype['pkiPermissionID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
PermissionRequest.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Apikey
 * @member {Number} fkiApikeyID
 */
PermissionRequest.prototype['fkiApikeyID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
PermissionRequest.prototype['fkiUsergroupID'] = undefined;

/**
 * The unique ID of the Company
 * @member {Number} fkiCompanyID
 */
PermissionRequest.prototype['fkiCompanyID'] = undefined;

/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
PermissionRequest.prototype['fkiModulesectionID'] = undefined;






export default PermissionRequest;

