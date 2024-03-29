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
import FranchisereferalincomeCreateObjectV1ResponseMPayload from './FranchisereferalincomeCreateObjectV1ResponseMPayload';

/**
 * The FranchisereferalincomeCreateObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseAllOf
 * @version 1.1.18
 */
class FranchisereferalincomeCreateObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>FranchisereferalincomeCreateObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        FranchisereferalincomeCreateObjectV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>FranchisereferalincomeCreateObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseAllOf} The populated <code>FranchisereferalincomeCreateObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeCreateObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = FranchisereferalincomeCreateObjectV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FranchisereferalincomeCreateObjectV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FranchisereferalincomeCreateObjectV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FranchisereferalincomeCreateObjectV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `mPayload`
        if (data['mPayload']) { // data not null
          FranchisereferalincomeCreateObjectV1ResponseMPayload.validateJSON(data['mPayload']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

FranchisereferalincomeCreateObjectV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * @member {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1ResponseMPayload} mPayload
 */
FranchisereferalincomeCreateObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default FranchisereferalincomeCreateObjectV1ResponseAllOf;

