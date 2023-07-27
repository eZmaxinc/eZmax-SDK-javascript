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
import EzsignsignergroupmembershipResponse from './EzsignsignergroupmembershipResponse';

/**
 * The EzsignsignergroupmembershipResponseCompound model module.
 * @module eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound
 * @version 1.1.18
 */
class EzsignsignergroupmembershipResponseCompound {
    /**
     * Constructs a new <code>EzsignsignergroupmembershipResponseCompound</code>.
     * A Ezsignsignergroupmembership Object
     * @alias module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound
     * @implements module:eZmaxAPI/model/EzsignsignergroupmembershipResponse
     * @param pkiEzsignsignergroupmembershipID {Number} The unique ID of the Ezsignsignergroupmembership
     * @param fkiEzsignsignergroupID {Number} The unique ID of the Ezsignsignergroup
     * @param fkiEzsignsignerID {Number} The unique ID of the Ezsignsigner
     * @param fkiUserID {Number} The unique ID of the User
     * @param fkiUsergroupID {Number} The unique ID of the Usergroup
     */
    constructor(pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID, fkiEzsignsignerID, fkiUserID, fkiUsergroupID) { 
        EzsignsignergroupmembershipResponse.initialize(this, pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID, fkiEzsignsignerID, fkiUserID, fkiUsergroupID);
        EzsignsignergroupmembershipResponseCompound.initialize(this, pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID, fkiEzsignsignerID, fkiUserID, fkiUsergroupID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignergroupmembershipID, fkiEzsignsignergroupID, fkiEzsignsignerID, fkiUserID, fkiUsergroupID) { 
        obj['pkiEzsignsignergroupmembershipID'] = pkiEzsignsignergroupmembershipID;
        obj['fkiEzsignsignergroupID'] = fkiEzsignsignergroupID;
        obj['fkiEzsignsignerID'] = fkiEzsignsignerID;
        obj['fkiUserID'] = fkiUserID;
        obj['fkiUsergroupID'] = fkiUsergroupID;
    }

    /**
     * Constructs a <code>EzsignsignergroupmembershipResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound} The populated <code>EzsignsignergroupmembershipResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignergroupmembershipResponseCompound();
            EzsignsignergroupmembershipResponse.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>EzsignsignergroupmembershipResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignergroupmembershipResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignergroupmembershipResponseCompound.RequiredProperties) {
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

EzsignsignergroupmembershipResponseCompound.RequiredProperties = ["pkiEzsignsignergroupmembershipID", "fkiEzsignsignergroupID", "fkiEzsignsignerID", "fkiUserID", "fkiUsergroupID"];

/**
 * The unique ID of the Ezsignsignergroupmembership
 * @member {Number} pkiEzsignsignergroupmembershipID
 */
EzsignsignergroupmembershipResponseCompound.prototype['pkiEzsignsignergroupmembershipID'] = undefined;

/**
 * The unique ID of the Ezsignsignergroup
 * @member {Number} fkiEzsignsignergroupID
 */
EzsignsignergroupmembershipResponseCompound.prototype['fkiEzsignsignergroupID'] = undefined;

/**
 * The unique ID of the Ezsignsigner
 * @member {Number} fkiEzsignsignerID
 */
EzsignsignergroupmembershipResponseCompound.prototype['fkiEzsignsignerID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
EzsignsignergroupmembershipResponseCompound.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
EzsignsignergroupmembershipResponseCompound.prototype['fkiUsergroupID'] = undefined;


// Implement EzsignsignergroupmembershipResponse interface:
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




export default EzsignsignergroupmembershipResponseCompound;

