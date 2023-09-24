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
import UsergroupdelegationRequestCompound from './UsergroupdelegationRequestCompound';

/**
 * The UsergroupdelegationEditObjectV1Request model module.
 * @module eZmaxAPI/model/UsergroupdelegationEditObjectV1Request
 * @version 1.2.0
 */
class UsergroupdelegationEditObjectV1Request {
    /**
     * Constructs a new <code>UsergroupdelegationEditObjectV1Request</code>.
     * Request for PUT /1/object/usergroupdelegation/{pkiUsergroupdelegationID}
     * @alias module:eZmaxAPI/model/UsergroupdelegationEditObjectV1Request
     * @param objUsergroupdelegation {module:eZmaxAPI/model/UsergroupdelegationRequestCompound} 
     */
    constructor(objUsergroupdelegation) { 
        
        UsergroupdelegationEditObjectV1Request.initialize(this, objUsergroupdelegation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objUsergroupdelegation) { 
        obj['objUsergroupdelegation'] = objUsergroupdelegation;
    }

    /**
     * Constructs a <code>UsergroupdelegationEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupdelegationEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupdelegationEditObjectV1Request} The populated <code>UsergroupdelegationEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupdelegationEditObjectV1Request();

            if (data.hasOwnProperty('objUsergroupdelegation')) {
                obj['objUsergroupdelegation'] = UsergroupdelegationRequestCompound.constructFromObject(data['objUsergroupdelegation']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupdelegationEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupdelegationEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupdelegationEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objUsergroupdelegation`
        if (data['objUsergroupdelegation']) { // data not null
          UsergroupdelegationRequestCompound.validateJSON(data['objUsergroupdelegation']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/UsergroupdelegationRequestCompound}
     */
    getObjUsergroupdelegation() {
        return this.objUsergroupdelegation;
    }

    /**
     * @param {module:eZmaxAPI/model/UsergroupdelegationRequestCompound} objUsergroupdelegation
     */
    setObjUsergroupdelegation(objUsergroupdelegation) {
        this['objUsergroupdelegation'] = objUsergroupdelegation;
    }

}

UsergroupdelegationEditObjectV1Request.RequiredProperties = ["objUsergroupdelegation"];

/**
 * @member {module:eZmaxAPI/model/UsergroupdelegationRequestCompound} objUsergroupdelegation
 */
UsergroupdelegationEditObjectV1Request.prototype['objUsergroupdelegation'] = undefined;






export default UsergroupdelegationEditObjectV1Request;

