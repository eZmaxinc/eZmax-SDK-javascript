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
 * The UsergroupEditUsergroupmembershipsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/UsergroupEditUsergroupmembershipsV1ResponseMPayload
 * @version 1.1.18
 */
class UsergroupEditUsergroupmembershipsV1ResponseMPayload {
    /**
     * Constructs a new <code>UsergroupEditUsergroupmembershipsV1ResponseMPayload</code>.
     * Response for PUT /1/object/usergroup/{pkiUsergroupID}/editUsergroupmemberships
     * @alias module:eZmaxAPI/model/UsergroupEditUsergroupmembershipsV1ResponseMPayload
     * @param a_pkiUsergroupmembershipID {Array.<Number>} 
     */
    constructor(a_pkiUsergroupmembershipID) { 
        
        UsergroupEditUsergroupmembershipsV1ResponseMPayload.initialize(this, a_pkiUsergroupmembershipID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiUsergroupmembershipID) { 
        obj['a_pkiUsergroupmembershipID'] = a_pkiUsergroupmembershipID;
    }

    /**
     * Constructs a <code>UsergroupEditUsergroupmembershipsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UsergroupEditUsergroupmembershipsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UsergroupEditUsergroupmembershipsV1ResponseMPayload} The populated <code>UsergroupEditUsergroupmembershipsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsergroupEditUsergroupmembershipsV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiUsergroupmembershipID')) {
                obj['a_pkiUsergroupmembershipID'] = ApiClient.convertToType(data['a_pkiUsergroupmembershipID'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UsergroupEditUsergroupmembershipsV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UsergroupEditUsergroupmembershipsV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UsergroupEditUsergroupmembershipsV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['a_pkiUsergroupmembershipID'])) {
            throw new Error("Expected the field `a_pkiUsergroupmembershipID` to be an array in the JSON data but got " + data['a_pkiUsergroupmembershipID']);
        }

        return true;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiUsergroupmembershipID() {
        return this.a_pkiUsergroupmembershipID;
    }

    /**
     * @param {Array.<Number>} a_pkiUsergroupmembershipID
     */
    setAPkiUsergroupmembershipID(a_pkiUsergroupmembershipID) {
        this['a_pkiUsergroupmembershipID'] = a_pkiUsergroupmembershipID;
    }

}

UsergroupEditUsergroupmembershipsV1ResponseMPayload.RequiredProperties = ["a_pkiUsergroupmembershipID"];

/**
 * @member {Array.<Number>} a_pkiUsergroupmembershipID
 */
UsergroupEditUsergroupmembershipsV1ResponseMPayload.prototype['a_pkiUsergroupmembershipID'] = undefined;






export default UsergroupEditUsergroupmembershipsV1ResponseMPayload;

