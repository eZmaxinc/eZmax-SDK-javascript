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
 * The UsergroupListElement model module.
 * @module eZmaxAPI/model/UsergroupListElement
 * @version 1.1.18
 */
class UsergroupListElement {
    /**
     * Constructs a new <code>UsergroupListElement</code>.
     * A Usergroup List Element
     * @alias module:eZmaxAPI/model/UsergroupListElement
     * @param pkiUsergroupID {Number} The unique ID of the Usergroup
     * @param sUsergroupNameX {String} The Name of the Usergroup in the language of the requester
     * @param iCountUser {Number} Number of users in group
     */
    constructor(pkiUsergroupID, sUsergroupNameX, iCountUser) { 
        
        UsergroupListElement.initialize(this, pkiUsergroupID, sUsergroupNameX, iCountUser);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUsergroupID, sUsergroupNameX, iCountUser) { 
        obj['pkiUsergroupID'] = pkiUsergroupID;
        obj['sUsergroupNameX'] = sUsergroupNameX;
        obj['iCountUser'] = iCountUser;
    }

    /**
     * Constructs a <code>UsergroupListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupListElement} The populated <code>UsergroupListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupListElement();

            if (data.hasOwnProperty('pkiUsergroupID')) {
                obj['pkiUsergroupID'] = ApiClient.convertToType(data['pkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('sUsergroupNameX')) {
                obj['sUsergroupNameX'] = ApiClient.convertToType(data['sUsergroupNameX'], 'String');
            }
            if (data.hasOwnProperty('iCountUser')) {
                obj['iCountUser'] = ApiClient.convertToType(data['iCountUser'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupListElement.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sUsergroupNameX'] && !(typeof data['sUsergroupNameX'] === 'string' || data['sUsergroupNameX'] instanceof String)) {
            throw new Error("Expected the field `sUsergroupNameX` to be a primitive type in the JSON string but got " + data['sUsergroupNameX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Usergroup
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getPkiUsergroupID() {
        return this.pkiUsergroupID;
    }

    /**
     * Sets The unique ID of the Usergroup
     * @param {Number} pkiUsergroupID The unique ID of the Usergroup
     */
    setPkiUsergroupID(pkiUsergroupID) {
        this['pkiUsergroupID'] = pkiUsergroupID;
    }
/**
     * Returns The Name of the Usergroup in the language of the requester
     * @return {String}
     */
    getSUsergroupNameX() {
        return this.sUsergroupNameX;
    }

    /**
     * Sets The Name of the Usergroup in the language of the requester
     * @param {String} sUsergroupNameX The Name of the Usergroup in the language of the requester
     */
    setSUsergroupNameX(sUsergroupNameX) {
        this['sUsergroupNameX'] = sUsergroupNameX;
    }
/**
     * Returns Number of users in group
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getICountUser() {
        return this.iCountUser;
    }

    /**
     * Sets Number of users in group
     * @param {Number} iCountUser Number of users in group
     */
    setICountUser(iCountUser) {
        this['iCountUser'] = iCountUser;
    }

}

UsergroupListElement.RequiredProperties = ["pkiUsergroupID", "sUsergroupNameX", "iCountUser"];

/**
 * The unique ID of the Usergroup
 * @member {Number} pkiUsergroupID
 */
UsergroupListElement.prototype['pkiUsergroupID'] = undefined;

/**
 * The Name of the Usergroup in the language of the requester
 * @member {String} sUsergroupNameX
 */
UsergroupListElement.prototype['sUsergroupNameX'] = undefined;

/**
 * Number of users in group
 * @member {Number} iCountUser
 */
UsergroupListElement.prototype['iCountUser'] = undefined;






export default UsergroupListElement;

