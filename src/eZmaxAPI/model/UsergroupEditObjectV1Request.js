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
import UsergroupRequestCompound from './UsergroupRequestCompound';

/**
 * The UsergroupEditObjectV1Request model module.
 * @module eZmaxAPI/model/UsergroupEditObjectV1Request
 * @version 1.2.0
 */
class UsergroupEditObjectV1Request {
    /**
     * Constructs a new <code>UsergroupEditObjectV1Request</code>.
     * Request for PUT /1/object/usergroup/{pkiUsergroupID}
     * @alias module:eZmaxAPI/model/UsergroupEditObjectV1Request
     * @param objUsergroup {module:eZmaxAPI/model/UsergroupRequestCompound} 
     */
    constructor(objUsergroup) { 
        
        UsergroupEditObjectV1Request.initialize(this, objUsergroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroup) { 
        obj['objUsergroup'] = objUsergroup;
    }

    /**
     * Constructs a <code>UsergroupEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupEditObjectV1Request} The populated <code>UsergroupEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupEditObjectV1Request();

            if (data.hasOwnProperty('objUsergroup')) {
                obj['objUsergroup'] = UsergroupRequestCompound.constructFromObject(data['objUsergroup']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroup`
        if (data['objUsergroup']) { // data not null
          UsergroupRequestCompound.validateJSON(data['objUsergroup']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UsergroupRequestCompound}
     */
    getObjUsergroup() {
        return this.objUsergroup;
    }

    /**
     * @param {module:eZmaxAPI/model/UsergroupRequestCompound} objUsergroup
     */
    setObjUsergroup(objUsergroup) {
        this['objUsergroup'] = objUsergroup;
    }

}

UsergroupEditObjectV1Request.RequiredProperties = ["objUsergroup"];

/**
 * @member {module:eZmaxAPI/model/UsergroupRequestCompound} objUsergroup
 */
UsergroupEditObjectV1Request.prototype['objUsergroup'] = undefined;






export default UsergroupEditObjectV1Request;

