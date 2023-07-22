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
import UsergroupListElement from './UsergroupListElement';

/**
 * The UsergroupGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/UsergroupGetListV1ResponseMPayloadAllOf
 * @version 1.1.18
 */
class UsergroupGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>UsergroupGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayloadAllOf
     * @param a_objUsergroup {Array.<module:eZmaxAPI/model/UsergroupListElement>} 
     */
    constructor(a_objUsergroup) { 
        
        UsergroupGetListV1ResponseMPayloadAllOf.initialize(this, a_objUsergroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objUsergroup) { 
        obj['a_objUsergroup'] = a_objUsergroup;
    }

    /**
     * Constructs a <code>UsergroupGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupGetListV1ResponseMPayloadAllOf} The populated <code>UsergroupGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objUsergroup')) {
                obj['a_objUsergroup'] = ApiClient.convertToType(data['a_objUsergroup'], [UsergroupListElement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupGetListV1ResponseMPayloadAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupGetListV1ResponseMPayloadAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupGetListV1ResponseMPayloadAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objUsergroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objUsergroup'])) {
                throw new Error("Expected the field `a_objUsergroup` to be an array in the JSON data but got " + data['a_objUsergroup']);
            }
            // validate the optional field `a_objUsergroup` (array)
            for (const item of data['a_objUsergroup']) {
                UsergroupListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/UsergroupListElement>}
     */
    getAObjUsergroup() {
        return this.a_objUsergroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/UsergroupListElement>} a_objUsergroup
     */
    setAObjUsergroup(a_objUsergroup) {
        this['a_objUsergroup'] = a_objUsergroup;
    }

}

UsergroupGetListV1ResponseMPayloadAllOf.RequiredProperties = ["a_objUsergroup"];

/**
 * @member {Array.<module:eZmaxAPI/model/UsergroupListElement>} a_objUsergroup
 */
UsergroupGetListV1ResponseMPayloadAllOf.prototype['a_objUsergroup'] = undefined;






export default UsergroupGetListV1ResponseMPayloadAllOf;

