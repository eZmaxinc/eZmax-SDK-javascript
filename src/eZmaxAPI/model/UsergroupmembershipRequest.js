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

/**
 * The UsergroupmembershipRequest model module.
 * @module eZmaxAPI/model/UsergroupmembershipRequest
 * @version 1.1.18
 */
class UsergroupmembershipRequest {
    /**
     * Constructs a new <code>UsergroupmembershipRequest</code>.
     * A Usergroupmembership Object
     * @alias module:eZmaxAPI/model/UsergroupmembershipRequest
     * @param fkiUsergroupID {Number} The unique ID of the Usergroup
     * @param fkiUserID {Number} The unique ID of the User
     */
    constructor(fkiUsergroupID, fkiUserID) { 
        
        UsergroupmembershipRequest.initialize(this, fkiUsergroupID, fkiUserID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiUsergroupID, fkiUserID) { 
        obj['fkiUsergroupID'] = fkiUsergroupID;
        obj['fkiUserID'] = fkiUserID;
    }

    /**
     * Constructs a <code>UsergroupmembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupmembershipRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupmembershipRequest} The populated <code>UsergroupmembershipRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupmembershipRequest();

            if (data.hasOwnProperty('pkiUsergroupmembershipID')) {
                obj['pkiUsergroupmembershipID'] = ApiClient.convertToType(data['pkiUsergroupmembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupID')) {
                obj['fkiUsergroupID'] = ApiClient.convertToType(data['fkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupmembershipRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupmembershipRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupmembershipRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Usergroupmembership
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getPkiUsergroupmembershipID() {
        return this.pkiUsergroupmembershipID;
    }

    /**
     * Sets The unique ID of the Usergroupmembership
     * @param {Number} pkiUsergroupmembershipID The unique ID of the Usergroupmembership
     */
    setPkiUsergroupmembershipID(pkiUsergroupmembershipID) {
        this['pkiUsergroupmembershipID'] = pkiUsergroupmembershipID;
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

}

UsergroupmembershipRequest.RequiredProperties = ["fkiUsergroupID", "fkiUserID"];

/**
 * The unique ID of the Usergroupmembership
 * @member {Number} pkiUsergroupmembershipID
 */
UsergroupmembershipRequest.prototype['pkiUsergroupmembershipID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
UsergroupmembershipRequest.prototype['fkiUsergroupID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
UsergroupmembershipRequest.prototype['fkiUserID'] = undefined;






export default UsergroupmembershipRequest;

