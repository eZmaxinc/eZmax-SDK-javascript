/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentRequestCompound from './EzsigntemplatedocumentRequestCompound';

/**
 * The EzsigntemplatedocumentEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Request
 * @version 1.1.13
 */
class EzsigntemplatedocumentEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatedocumentEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Request
     * @param objEzsigntemplatedocument {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound} 
     */
    constructor(objEzsigntemplatedocument) { 
        
        EzsigntemplatedocumentEditObjectV1Request.initialize(this, objEzsigntemplatedocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatedocument) { 
        obj['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentEditObjectV1Request} The populated <code>EzsigntemplatedocumentEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatedocument')) {
                obj['objEzsigntemplatedocument'] = EzsigntemplatedocumentRequestCompound.constructFromObject(data['objEzsigntemplatedocument']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound}
     */
    getObjEzsigntemplatedocument() {
        return this.objEzsigntemplatedocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound} objEzsigntemplatedocument
     */
    setObjEzsigntemplatedocument(objEzsigntemplatedocument) {
        this['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound} objEzsigntemplatedocument
 */
EzsigntemplatedocumentEditObjectV1Request.prototype['objEzsigntemplatedocument'] = undefined;






export default EzsigntemplatedocumentEditObjectV1Request;

