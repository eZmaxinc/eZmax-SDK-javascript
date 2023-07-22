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
import MultilingualUsergroupName from './MultilingualUsergroupName';

/**
 * The UsergroupRequest model module.
 * @module eZmaxAPI/model/UsergroupRequest
 * @version 1.1.18
 */
class UsergroupRequest {
    /**
     * Constructs a new <code>UsergroupRequest</code>.
     * A Usergroup Object
     * @alias module:eZmaxAPI/model/UsergroupRequest
     * @param objUsergroupName {module:eZmaxAPI/model/MultilingualUsergroupName} 
     */
    constructor(objUsergroupName) { 
        
        UsergroupRequest.initialize(this, objUsergroupName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroupName) { 
        obj['objUsergroupName'] = objUsergroupName;
    }

    /**
     * Constructs a <code>UsergroupRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupRequest} The populated <code>UsergroupRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupRequest();

            if (data.hasOwnProperty('pkiUsergroupID')) {
                obj['pkiUsergroupID'] = ApiClient.convertToType(data['pkiUsergroupID'], 'Number');
            }
            if (data.hasOwnProperty('objUsergroupName')) {
                obj['objUsergroupName'] = MultilingualUsergroupName.constructFromObject(data['objUsergroupName']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroupName`
        if (data['objUsergroupName']) { // data not null
          MultilingualUsergroupName.validateJSON(data['objUsergroupName']);
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

}

UsergroupRequest.RequiredProperties = ["objUsergroupName"];

/**
 * The unique ID of the Usergroup
 * @member {Number} pkiUsergroupID
 */
UsergroupRequest.prototype['pkiUsergroupID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualUsergroupName} objUsergroupName
 */
UsergroupRequest.prototype['objUsergroupName'] = undefined;






export default UsergroupRequest;

