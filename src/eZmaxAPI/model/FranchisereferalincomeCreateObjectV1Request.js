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
import FranchisereferalincomeRequest from './FranchisereferalincomeRequest';
import FranchisereferalincomeRequestCompound from './FranchisereferalincomeRequestCompound';

/**
 * The FranchisereferalincomeCreateObjectV1Request model module.
 * @module eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request
 * @version 1.2.0
 */
class FranchisereferalincomeCreateObjectV1Request {
    /**
     * Constructs a new <code>FranchisereferalincomeCreateObjectV1Request</code>.
     * Request for POST /1/object/franchisereferalincome
     * @alias module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request
     */
    constructor() { 
        
        FranchisereferalincomeCreateObjectV1Request.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FranchisereferalincomeCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchisereferalincomeCreateObjectV1Request} The populated <code>FranchisereferalincomeCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchisereferalincomeCreateObjectV1Request();

            if (data.hasOwnProperty('objFranchisereferalincome')) {
                obj['objFranchisereferalincome'] = FranchisereferalincomeRequest.constructFromObject(data['objFranchisereferalincome']);
            }
            if (data.hasOwnProperty('objFranchisereferalincomeCompound')) {
                obj['objFranchisereferalincomeCompound'] = FranchisereferalincomeRequestCompound.constructFromObject(data['objFranchisereferalincomeCompound']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FranchisereferalincomeCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FranchisereferalincomeCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // validate the optional field `objFranchisereferalincome`
        if (data['objFranchisereferalincome']) { // data not null
          FranchisereferalincomeRequest.validateJSON(data['objFranchisereferalincome']);
        }
        // validate the optional field `objFranchisereferalincomeCompound`
        if (data['objFranchisereferalincomeCompound']) { // data not null
          FranchisereferalincomeRequestCompound.validateJSON(data['objFranchisereferalincomeCompound']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequest}
     */
    getObjFranchisereferalincome() {
        return this.objFranchisereferalincome;
    }

    /**
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequest} objFranchisereferalincome
     */
    setObjFranchisereferalincome(objFranchisereferalincome) {
        this['objFranchisereferalincome'] = objFranchisereferalincome;
    }
/**
     * @return {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound}
     */
    getObjFranchisereferalincomeCompound() {
        return this.objFranchisereferalincomeCompound;
    }

    /**
     * @param {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} objFranchisereferalincomeCompound
     */
    setObjFranchisereferalincomeCompound(objFranchisereferalincomeCompound) {
        this['objFranchisereferalincomeCompound'] = objFranchisereferalincomeCompound;
    }

}



/**
 * @member {module:eZmaxAPI/model/FranchisereferalincomeRequest} objFranchisereferalincome
 */
FranchisereferalincomeCreateObjectV1Request.prototype['objFranchisereferalincome'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FranchisereferalincomeRequestCompound} objFranchisereferalincomeCompound
 */
FranchisereferalincomeCreateObjectV1Request.prototype['objFranchisereferalincomeCompound'] = undefined;






export default FranchisereferalincomeCreateObjectV1Request;

