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
import EzsignsignergroupmembershipResponseCompound from './EzsignsignergroupmembershipResponseCompound';

/**
 * The EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload
 * @version 1.1.18
 */
class EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload</code>.
     * Response for GET /1/object/ezsignsignergroup/{pkiEzsignsignergroupID}/getEzsignsignergroupmemberships
     * @alias module:eZmaxAPI/model/EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload
     * @param a_objEzsignsignergroupmembership {Array.<module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound>} 
     */
    constructor(a_objEzsignsignergroupmembership) { 
        
        EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload.initialize(this, a_objEzsignsignergroupmembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignergroupmembership) { 
        obj['a_objEzsignsignergroupmembership'] = a_objEzsignsignergroupmembership;
    }

    /**
     * Constructs a <code>EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload} The populated <code>EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignsignergroupmembership')) {
                obj['a_objEzsignsignergroupmembership'] = ApiClient.convertToType(data['a_objEzsignsignergroupmembership'], [EzsignsignergroupmembershipResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignsignergroupmembership']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignergroupmembership'])) {
                throw new Error("Expected the field `a_objEzsignsignergroupmembership` to be an array in the JSON data but got " + data['a_objEzsignsignergroupmembership']);
            }
            // validate the optional field `a_objEzsignsignergroupmembership` (array)
            for (const item of data['a_objEzsignsignergroupmembership']) {
                EzsignsignergroupmembershipResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound>}
     */
    getAObjEzsignsignergroupmembership() {
        return this.a_objEzsignsignergroupmembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound>} a_objEzsignsignergroupmembership
     */
    setAObjEzsignsignergroupmembership(a_objEzsignsignergroupmembership) {
        this['a_objEzsignsignergroupmembership'] = a_objEzsignsignergroupmembership;
    }

}

EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload.RequiredProperties = ["a_objEzsignsignergroupmembership"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignergroupmembershipResponseCompound>} a_objEzsignsignergroupmembership
 */
EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload.prototype['a_objEzsignsignergroupmembership'] = undefined;






export default EzsignsignergroupGetEzsignsignergroupmembershipsV1ResponseMPayload;

