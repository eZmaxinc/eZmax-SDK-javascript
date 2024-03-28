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
import MultilingualUsergroupName from './MultilingualUsergroupName';

/**
 * The UsergroupResponse model module.
 * @module eZmaxAPI/model/UsergroupResponse
 * @version 1.2.0
 */
class UsergroupResponse {
    /**
     * Constructs a new <code>UsergroupResponse</code>.
     * A Usergroup Object
     * @alias module:eZmaxAPI/model/UsergroupResponse
     * @param pkiUsergroupID {Number} The unique ID of the Usergroup
     * @param objUsergroupName {module:eZmaxAPI/model/MultilingualUsergroupName} 
     */
    constructor(pkiUsergroupID, objUsergroupName) { 
        
        UsergroupResponse.initialize(this, pkiUsergroupID, objUsergroupName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiUsergroupID, objUsergroupName) { 
        obj['pkiUsergroupID'] = pkiUsergroupID;
        obj['objUsergroupName'] = objUsergroupName;
    }

    /**
     * Constructs a <code>UsergroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupResponse} The populated <code>UsergroupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupResponse();

            if (data.hasOwnProperty('pkiUsergroupID')) {
                obj['pkiUsergroupID'] = ApiClient.convertToType(data['pkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('objUsergroupName')) {
                obj['objUsergroupName'] = MultilingualUsergroupName.constructFromObject(data['objUsergroupName']);
            }
            if (data.hasOwnProperty('sUsergroupNameX')) {
                obj['sUsergroupNameX'] = ApiClient.convertToType(data['sUsergroupNameX'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroupName`
        if (data['objUsergroupName']) { // data not null
          MultilingualUsergroupName.validateJSON(data['objUsergroupName']);
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
     * @return {module:eZmaxAPI/model/MultilingualUsergroupName}
     */
    getObjUsergroupName() {
        return this.objUsergroupName;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualUsergroupName} objUsergroupName
     */
    setObjUsergroupName(objUsergroupName) {
        this['objUsergroupName'] = objUsergroupName;
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

}

UsergroupResponse.RequiredProperties = ["pkiUsergroupID", "objUsergroupName"];

/**
 * The unique ID of the Usergroup
 * @member {Number} pkiUsergroupID
 */
UsergroupResponse.prototype['pkiUsergroupID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualUsergroupName} objUsergroupName
 */
UsergroupResponse.prototype['objUsergroupName'] = undefined;

/**
 * The Name of the Usergroup in the language of the requester
 * @member {String} sUsergroupNameX
 */
UsergroupResponse.prototype['sUsergroupNameX'] = undefined;






export default UsergroupResponse;

