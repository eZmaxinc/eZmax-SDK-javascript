/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
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
 * The EzsigntemplatedocumentCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Request
 * @version 1.1.14
 */
class EzsigntemplatedocumentCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatedocumentCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatedocument
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Request
     * @param a_objEzsigntemplatedocument {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound>} 
     */
    constructor(a_objEzsigntemplatedocument) { 
        
        EzsigntemplatedocumentCreateObjectV1Request.initialize(this, a_objEzsigntemplatedocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatedocument) { 
        obj['a_objEzsigntemplatedocument'] = a_objEzsigntemplatedocument;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentCreateObjectV1Request} The populated <code>EzsigntemplatedocumentCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatedocument')) {
                obj['a_objEzsigntemplatedocument'] = ApiClient.convertToType(data['a_objEzsigntemplatedocument'], [EzsigntemplatedocumentRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound>}
     */
    getAObjEzsigntemplatedocument() {
        return this.a_objEzsigntemplatedocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound>} a_objEzsigntemplatedocument
     */
    setAObjEzsigntemplatedocument(a_objEzsigntemplatedocument) {
        this['a_objEzsigntemplatedocument'] = a_objEzsigntemplatedocument;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentRequestCompound>} a_objEzsigntemplatedocument
 */
EzsigntemplatedocumentCreateObjectV1Request.prototype['a_objEzsigntemplatedocument'] = undefined;






export default EzsigntemplatedocumentCreateObjectV1Request;

