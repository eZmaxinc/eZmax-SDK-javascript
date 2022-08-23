/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.10
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackageRequestCompound from './EzsigntemplatepackageRequestCompound';

/**
 * The EzsigntemplatepackageCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Request
 * @version 1.1.10
 */
class EzsigntemplatepackageCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatepackageCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplatepackage
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Request
     * @param a_objEzsigntemplatepackage {Array.<module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound>} 
     */
    constructor(a_objEzsigntemplatepackage) { 
        
        EzsigntemplatepackageCreateObjectV1Request.initialize(this, a_objEzsigntemplatepackage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatepackage) { 
        obj['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageCreateObjectV1Request} The populated <code>EzsigntemplatepackageCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplatepackage')) {
                obj['a_objEzsigntemplatepackage'] = ApiClient.convertToType(data['a_objEzsigntemplatepackage'], [EzsigntemplatepackageRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound>}
     */
    getAObjEzsigntemplatepackage() {
        return this.a_objEzsigntemplatepackage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound>} a_objEzsigntemplatepackage
     */
    setAObjEzsigntemplatepackage(a_objEzsigntemplatepackage) {
        this['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound>} a_objEzsigntemplatepackage
 */
EzsigntemplatepackageCreateObjectV1Request.prototype['a_objEzsigntemplatepackage'] = undefined;






export default EzsigntemplatepackageCreateObjectV1Request;

