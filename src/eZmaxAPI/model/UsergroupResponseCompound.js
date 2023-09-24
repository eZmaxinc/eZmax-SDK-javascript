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
import UsergroupResponse from './UsergroupResponse';

/**
 * The UsergroupResponseCompound model module.
 * @module eZmaxAPI/model/UsergroupResponseCompound
 * @version 1.2.0
 */
class UsergroupResponseCompound {
    /**
     * Constructs a new <code>UsergroupResponseCompound</code>.
     * A Usergroup Object
     * @alias module:eZmaxAPI/model/UsergroupResponseCompound
     * @implements module:eZmaxAPI/model/UsergroupResponse
     * @param pkiUsergroupID {Number} The unique ID of the Usergroup
     * @param objUsergroupName {module:eZmaxAPI/model/MultilingualUsergroupName} 
     */
    constructor(pkiUsergroupID, objUsergroupName) { 
        UsergroupResponse.initialize(this, pkiUsergroupID, objUsergroupName);
        UsergroupResponseCompound.initialize(this, pkiUsergroupID, objUsergroupName);
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
     * Constructs a <code>UsergroupResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupResponseCompound} The populated <code>UsergroupResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupResponseCompound();
            UsergroupResponse.constructFromObject(data, obj);

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
     * Validates the JSON data with respect to <code>UsergroupResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupResponseCompound.RequiredProperties) {
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

UsergroupResponseCompound.RequiredProperties = ["pkiUsergroupID", "objUsergroupName"];

/**
 * The unique ID of the Usergroup
 * @member {Number} pkiUsergroupID
 */
UsergroupResponseCompound.prototype['pkiUsergroupID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualUsergroupName} objUsergroupName
 */
UsergroupResponseCompound.prototype['objUsergroupName'] = undefined;


// Implement UsergroupResponse interface:
/**
 * The unique ID of the Usergroup
 * @member {Number} pkiUsergroupID
 */
UsergroupResponse.prototype['pkiUsergroupID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualUsergroupName} objUsergroupName
 */
UsergroupResponse.prototype['objUsergroupName'] = undefined;




export default UsergroupResponseCompound;

