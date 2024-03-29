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
import UsergroupmembershipRequestCompound from './UsergroupmembershipRequestCompound';

/**
 * The UsergroupmembershipCreateObjectV1Request model module.
 * @module eZmaxAPI/model/UsergroupmembershipCreateObjectV1Request
 * @version 1.1.18
 */
class UsergroupmembershipCreateObjectV1Request {
    /**
     * Constructs a new <code>UsergroupmembershipCreateObjectV1Request</code>.
     * Request for POST /1/object/usergroupmembership
     * @alias module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Request
     * @param a_objUsergroupmembership {Array.<module:eZmaxAPI/model/UsergroupmembershipRequestCompound>} 
     */
    constructor(a_objUsergroupmembership) { 
        
        UsergroupmembershipCreateObjectV1Request.initialize(this, a_objUsergroupmembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUsergroupmembership) { 
        obj['a_objUsergroupmembership'] = a_objUsergroupmembership;
    }

    /**
     * Constructs a <code>UsergroupmembershipCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupmembershipCreateObjectV1Request} The populated <code>UsergroupmembershipCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupmembershipCreateObjectV1Request();

            if (data.hasOwnProperty('a_objUsergroupmembership')) {
                obj['a_objUsergroupmembership'] = ApiClient.convertToType(data['a_objUsergroupmembership'], [UsergroupmembershipRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupmembershipCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupmembershipCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupmembershipCreateObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUsergroupmembership']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUsergroupmembership'])) {
                throw new Error("Expected the field `a_objUsergroupmembership` to be an array in the JSON data but got " + data['a_objUsergroupmembership']);
            }
            // validate the optional field `a_objUsergroupmembership` (array)
            for (const item of data['a_objUsergroupmembership']) {
                UsergroupmembershipRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/UsergroupmembershipRequestCompound>}
     */
    getAObjUsergroupmembership() {
        return this.a_objUsergroupmembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UsergroupmembershipRequestCompound>} a_objUsergroupmembership
     */
    setAObjUsergroupmembership(a_objUsergroupmembership) {
        this['a_objUsergroupmembership'] = a_objUsergroupmembership;
    }

}

UsergroupmembershipCreateObjectV1Request.RequiredProperties = ["a_objUsergroupmembership"];

/**
 * @member {Array.<module:eZmaxAPI/model/UsergroupmembershipRequestCompound>} a_objUsergroupmembership
 */
UsergroupmembershipCreateObjectV1Request.prototype['a_objUsergroupmembership'] = undefined;






export default UsergroupmembershipCreateObjectV1Request;

