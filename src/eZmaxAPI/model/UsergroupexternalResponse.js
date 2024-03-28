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
 * The UsergroupexternalResponse model module.
 * @module eZmaxAPI/model/UsergroupexternalResponse
 * @version 1.2.0
 */
class UsergroupexternalResponse {
    /**
     * Constructs a new <code>UsergroupexternalResponse</code>.
     * A Usergroupexternal Object
     * @alias module:eZmaxAPI/model/UsergroupexternalResponse
     * @param pkiUsergroupexternalID {Number} The unique ID of the Usergroupexternal
     * @param sUsergroupexternalName {String} The name of the Usergroupexternal
     * @param sUsergroupexternalID {String} The id of the Usergroupexternal
     */
    constructor(pkiUsergroupexternalID, sUsergroupexternalName, sUsergroupexternalID) { 
        
        UsergroupexternalResponse.initialize(this, pkiUsergroupexternalID, sUsergroupexternalName, sUsergroupexternalID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUsergroupexternalID, sUsergroupexternalName, sUsergroupexternalID) { 
        obj['pkiUsergroupexternalID'] = pkiUsergroupexternalID;
        obj['sUsergroupexternalName'] = sUsergroupexternalName;
        obj['sUsergroupexternalID'] = sUsergroupexternalID;
    }

    /**
     * Constructs a <code>UsergroupexternalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupexternalResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupexternalResponse} The populated <code>UsergroupexternalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupexternalResponse();

            if (data.hasOwnProperty('pkiUsergroupexternalID')) {
                obj['pkiUsergroupexternalID'] = ApiClient.convertToType(data['pkiUsergroupexternalID'], 'Number');
            }
            if (data.hasOwnProperty('sUsergroupexternalName')) {
                obj['sUsergroupexternalName'] = ApiClient.convertToType(data['sUsergroupexternalName'], 'String');
            }
            if (data.hasOwnProperty('sUsergroupexternalID')) {
                obj['sUsergroupexternalID'] = ApiClient.convertToType(data['sUsergroupexternalID'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupexternalResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupexternalResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupexternalResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sUsergroupexternalName'] && !(typeof data['sUsergroupexternalName'] === 'string' || data['sUsergroupexternalName'] instanceof String)) {
            throw new Error("Expected the field `sUsergroupexternalName` to be a primitive type in the JSON string but got " + data['sUsergroupexternalName']);
        }
        // ensure the json data is a string
        if (data['sUsergroupexternalID'] && !(typeof data['sUsergroupexternalID'] === 'string' || data['sUsergroupexternalID'] instanceof String)) {
            throw new Error("Expected the field `sUsergroupexternalID` to be a primitive type in the JSON string but got " + data['sUsergroupexternalID']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Usergroupexternal
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getPkiUsergroupexternalID() {
        return this.pkiUsergroupexternalID;
    }

    /**
     * Sets The unique ID of the Usergroupexternal
     * @param {Number} pkiUsergroupexternalID The unique ID of the Usergroupexternal
     */
    setPkiUsergroupexternalID(pkiUsergroupexternalID) {
        this['pkiUsergroupexternalID'] = pkiUsergroupexternalID;
    }
/**
     * Returns The name of the Usergroupexternal
     * @return {String}
     */
    getSUsergroupexternalName() {
        return this.sUsergroupexternalName;
    }

    /**
     * Sets The name of the Usergroupexternal
     * @param {String} sUsergroupexternalName The name of the Usergroupexternal
     */
    setSUsergroupexternalName(sUsergroupexternalName) {
        this['sUsergroupexternalName'] = sUsergroupexternalName;
    }
/**
     * Returns The id of the Usergroupexternal
     * @return {String}
     */
    getSUsergroupexternalID() {
        return this.sUsergroupexternalID;
    }

    /**
     * Sets The id of the Usergroupexternal
     * @param {String} sUsergroupexternalID The id of the Usergroupexternal
     */
    setSUsergroupexternalID(sUsergroupexternalID) {
        this['sUsergroupexternalID'] = sUsergroupexternalID;
    }

}

UsergroupexternalResponse.RequiredProperties = ["pkiUsergroupexternalID", "sUsergroupexternalName", "sUsergroupexternalID"];

/**
 * The unique ID of the Usergroupexternal
 * @member {Number} pkiUsergroupexternalID
 */
UsergroupexternalResponse.prototype['pkiUsergroupexternalID'] = undefined;

/**
 * The name of the Usergroupexternal
 * @member {String} sUsergroupexternalName
 */
UsergroupexternalResponse.prototype['sUsergroupexternalName'] = undefined;

/**
 * The id of the Usergroupexternal
 * @member {String} sUsergroupexternalID
 */
UsergroupexternalResponse.prototype['sUsergroupexternalID'] = undefined;






export default UsergroupexternalResponse;

