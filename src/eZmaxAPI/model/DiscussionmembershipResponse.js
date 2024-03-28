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
 * The DiscussionmembershipResponse model module.
 * @module eZmaxAPI/model/DiscussionmembershipResponse
 * @version 1.2.0
 */
class DiscussionmembershipResponse {
    /**
     * Constructs a new <code>DiscussionmembershipResponse</code>.
     * A Discussionmembership Object
     * @alias module:eZmaxAPI/model/DiscussionmembershipResponse
     * @param pkiDiscussionmembershipID {Number} The unique ID of the Discussionmembership
     * @param fkiDiscussionID {Number} The unique ID of the Discussion
     * @param sDiscussionmembershipDescription {String} The Description containing the detail of who the Discussionmembership refers to
     * @param dtDiscussionmembershipJoined {String} The joined date of the Discussionmembership
     */
    constructor(pkiDiscussionmembershipID, fkiDiscussionID, sDiscussionmembershipDescription, dtDiscussionmembershipJoined) { 
        
        DiscussionmembershipResponse.initialize(this, pkiDiscussionmembershipID, fkiDiscussionID, sDiscussionmembershipDescription, dtDiscussionmembershipJoined);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiDiscussionmembershipID, fkiDiscussionID, sDiscussionmembershipDescription, dtDiscussionmembershipJoined) { 
        obj['pkiDiscussionmembershipID'] = pkiDiscussionmembershipID;
        obj['fkiDiscussionID'] = fkiDiscussionID;
        obj['sDiscussionmembershipDescription'] = sDiscussionmembershipDescription;
        obj['dtDiscussionmembershipJoined'] = dtDiscussionmembershipJoined;
    }

    /**
     * Constructs a <code>DiscussionmembershipResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DiscussionmembershipResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DiscussionmembershipResponse} The populated <code>DiscussionmembershipResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DiscussionmembershipResponse();

            if (data.hasOwnProperty('pkiDiscussionmembershipID')) {
                obj['pkiDiscussionmembershipID'] = ApiClient.convertToType(data['pkiDiscussionmembershipID'], 'Number');
            }
            if (data.hasOwnProperty('fkiDiscussionID')) {
                obj['fkiDiscussionID'] = ApiClient.convertToType(data['fkiDiscussionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUserID')) {
                obj['fkiUserID'] = ApiClient.convertToType(data['fkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('fkiUsergroupID')) {
                obj['fkiUsergroupID'] = ApiClient.convertToType(data['fkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModulesectionID')) {
                obj['fkiModulesectionID'] = ApiClient.convertToType(data['fkiModulesectionID'], 'Number');
            }
            if (data.hasOwnProperty('sDiscussionmembershipDescription')) {
                obj['sDiscussionmembershipDescription'] = ApiClient.convertToType(data['sDiscussionmembershipDescription'], 'String');
            }
            if (data.hasOwnProperty('dtDiscussionmembershipJoined')) {
                obj['dtDiscussionmembershipJoined'] = ApiClient.convertToType(data['dtDiscussionmembershipJoined'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DiscussionmembershipResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DiscussionmembershipResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DiscussionmembershipResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sDiscussionmembershipDescription'] && !(typeof data['sDiscussionmembershipDescription'] === 'string' || data['sDiscussionmembershipDescription'] instanceof String)) {
            throw new Error("Expected the field `sDiscussionmembershipDescription` to be a primitive type in the JSON string but got " + data['sDiscussionmembershipDescription']);
        }
        // ensure the json data is a string
        if (data['dtDiscussionmembershipJoined'] && !(typeof data['dtDiscussionmembershipJoined'] === 'string' || data['dtDiscussionmembershipJoined'] instanceof String)) {
            throw new Error("Expected the field `dtDiscussionmembershipJoined` to be a primitive type in the JSON string but got " + data['dtDiscussionmembershipJoined']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Discussionmembership
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiDiscussionmembershipID() {
        return this.pkiDiscussionmembershipID;
    }

    /**
     * Sets The unique ID of the Discussionmembership
     * @param {Number} pkiDiscussionmembershipID The unique ID of the Discussionmembership
     */
    setPkiDiscussionmembershipID(pkiDiscussionmembershipID) {
        this['pkiDiscussionmembershipID'] = pkiDiscussionmembershipID;
    }
/**
     * Returns The unique ID of the Discussion
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getFkiDiscussionID() {
        return this.fkiDiscussionID;
    }

    /**
     * Sets The unique ID of the Discussion
     * @param {Number} fkiDiscussionID The unique ID of the Discussion
     */
    setFkiDiscussionID(fkiDiscussionID) {
        this['fkiDiscussionID'] = fkiDiscussionID;
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
     * Returns The Description containing the detail of who the Discussionmembership refers to
     * @return {String}
     */
    getSDiscussionmembershipDescription() {
        return this.sDiscussionmembershipDescription;
    }

    /**
     * Sets The Description containing the detail of who the Discussionmembership refers to
     * @param {String} sDiscussionmembershipDescription The Description containing the detail of who the Discussionmembership refers to
     */
    setSDiscussionmembershipDescription(sDiscussionmembershipDescription) {
        this['sDiscussionmembershipDescription'] = sDiscussionmembershipDescription;
    }
/**
     * Returns The joined date of the Discussionmembership
     * @return {String}
     */
    getDtDiscussionmembershipJoined() {
        return this.dtDiscussionmembershipJoined;
    }

    /**
     * Sets The joined date of the Discussionmembership
     * @param {String} dtDiscussionmembershipJoined The joined date of the Discussionmembership
     */
    setDtDiscussionmembershipJoined(dtDiscussionmembershipJoined) {
        this['dtDiscussionmembershipJoined'] = dtDiscussionmembershipJoined;
    }

}

DiscussionmembershipResponse.RequiredProperties = ["pkiDiscussionmembershipID", "fkiDiscussionID", "sDiscussionmembershipDescription", "dtDiscussionmembershipJoined"];

/**
 * The unique ID of the Discussionmembership
 * @member {Number} pkiDiscussionmembershipID
 */
DiscussionmembershipResponse.prototype['pkiDiscussionmembershipID'] = undefined;

/**
 * The unique ID of the Discussion
 * @member {Number} fkiDiscussionID
 */
DiscussionmembershipResponse.prototype['fkiDiscussionID'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} fkiUserID
 */
DiscussionmembershipResponse.prototype['fkiUserID'] = undefined;

/**
 * The unique ID of the Usergroup
 * @member {Number} fkiUsergroupID
 */
DiscussionmembershipResponse.prototype['fkiUsergroupID'] = undefined;

/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
DiscussionmembershipResponse.prototype['fkiModulesectionID'] = undefined;

/**
 * The Description containing the detail of who the Discussionmembership refers to
 * @member {String} sDiscussionmembershipDescription
 */
DiscussionmembershipResponse.prototype['sDiscussionmembershipDescription'] = undefined;

/**
 * The joined date of the Discussionmembership
 * @member {String} dtDiscussionmembershipJoined
 */
DiscussionmembershipResponse.prototype['dtDiscussionmembershipJoined'] = undefined;






export default DiscussionmembershipResponse;

