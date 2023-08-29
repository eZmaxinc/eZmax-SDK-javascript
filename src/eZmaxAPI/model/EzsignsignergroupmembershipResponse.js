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
 * The EzsignsignergroupmembershipResponse model module.
 * @module eZmaxAPI/model/EzsignsignergroupmembershipResponse
 * @version 1.1.18
 */
class EzsignsignergroupmembershipResponse {
    /**
     * Constructs a new <code>EzsignsignergroupmembershipResponse</code>.
     * A Ezsignsignergroupmembership Object
     * @alias module:eZmaxAPI/model/EzsignsignergroupmembershipResponse
     * @param pkiEzsignsignergroupmembershipID {Number} The unique ID of the Ezsignsignergroupmembership
     * @param fkiEzsignsignergroupID {Number} The unique ID of the Ezsignsignergroup
     */
    constructor(pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID) { 
        
        EzsignsignergroupmembershipResponse.initialize(this, pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID) { 
        obj['pkiEzsignsignergroupmembershipID'] = pkiEzsignsignergroupmembershipID;
        obj['fkiEzsignsignergroupID'] = fkiEzsignsignergroupID;
    }

    /**
     * Constructs a <code>EzsignsignergroupmembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignergroupmembershipResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignergroupmembershipResponse} The populated <code>EzsignsignergroupmembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignergroupmembershipResponse();

            if (data.hasOwnProperty('pkiEzsignsignergroupmembershipID')) {
                obj['pkiEzsignsignergroupmembershipID'] = ApiClient.convertToType(data['pkiEzsignsignergroupmembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignsignergroupID')) {
                obj['fkiEzsignsignergroupID'] = ApiClient.convertToType(data['fkiEzsignsignergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignsignerID')) {
                obj['fkiEzsignsignerID'] = ApiClient.convertToType(data['fkiEzsignsignerID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupID')) {
                obj['fkiUsergroupID'] = ApiClient.convertToType(data['fkiUsergroupID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignergroupmembershipResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignergroupmembershipResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignergroupmembershipResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsignsignergroupmembership
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiEzsignsignergroupmembershipID() {
        return this.pkiEzsignsignergroupmembershipID;
    }

    /**
     * Sets The unique ID of the Ezsignsignergroupmembership
     * @param {Number} pkiEzsignsignergroupmembershipID The unique ID of the Ezsignsignergroupmembership
     */
    setPkiEzsignsignergroupmembershipID(pkiEzsignsignergroupmembershipID) {
        this['pkiEzsignsignergroupmembershipID'] = pkiEzsignsignergroupmembershipID;
    }
/**
     * Returns The unique ID of the Ezsignsignergroup
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getFkiEzsignsignergroupID() {
        return this.fkiEzsignsignergroupID;
    }

    /**
     * Sets The unique ID of the Ezsignsignergroup
     * @param {Number} fkiEzsignsignergroupID The unique ID of the Ezsignsignergroup
     */
    setFkiEzsignsignergroupID(fkiEzsignsignergroupID) {
        this['fkiEzsignsignergroupID'] = fkiEzsignsignergroupID;
    }
/**
     * Returns The unique ID of the Ezsignsigner
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignsignerID() {
        return this.fkiEzsignsignerID;
    }

    /**
     * Sets The unique ID of the Ezsignsigner
     * @param {Number} fkiEzsignsignerID The unique ID of the Ezsignsigner
     */
    setFkiEzsignsignerID(fkiEzsignsignerID) {
        this['fkiEzsignsignerID'] = fkiEzsignsignerID;
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

}

EzsignsignergroupmembershipResponse.RequiredProperties = ["pkiEzsignsignergroupmembershipID", "fkiEzsignsignergroupID"];

/**
 * The unique ID of the Ezsignsignergroupmembership
 * @member {Number} pkiEzsignsignergroupmembershipID
 */
EzsignsignergroupmembershipResponse.prototype['pkiEzsignsignergroupmembershipID'] = undefined;

/**
 * The unique ID of the Ezsignsignergroup
 * @member {Number} fkiEzsignsignergroupID
 */
EzsignsignergroupmembershipResponse.prototype['fkiEzsignsignergroupID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
EzsignsignergroupmembershipResponse.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignsignergroupmembershipResponse.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
EzsignsignergroupmembershipResponse.prototype['fkiUsergroupID'] = undefined;






export default EzsignsignergroupmembershipResponse;

