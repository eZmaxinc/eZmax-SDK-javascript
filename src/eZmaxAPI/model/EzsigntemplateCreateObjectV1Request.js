/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplateRequestCompound from './EzsigntemplateRequestCompound';

/**
 * The EzsigntemplateCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplateCreateObjectV1Request
 * @version 1.1.8
 */
class EzsigntemplateCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplateCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplate
     * @alias module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Request
     * @param a_objEzsigntemplate {Array.<module:eZmaxAPI/model/EzsigntemplateRequestCompound>} 
     */
    constructor(a_objEzsigntemplate) { 
        
        EzsigntemplateCreateObjectV1Request.initialize(this, a_objEzsigntemplate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplate) { 
        obj['a_objEzsigntemplate'] = a_objEzsigntemplate;
    }

    /**
     * Constructs a <code>EzsigntemplateCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateCreateObjectV1Request} The populated <code>EzsigntemplateCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplate')) {
                obj['a_objEzsigntemplate'] = ApiClient.convertToType(data['a_objEzsigntemplate'], [EzsigntemplateRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateRequestCompound>}
     */
    getAObjEzsigntemplate() {
        return this.a_objEzsigntemplate;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateRequestCompound>} a_objEzsigntemplate
     */
    setAObjEzsigntemplate(a_objEzsigntemplate) {
        this['a_objEzsigntemplate'] = a_objEzsigntemplate;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateRequestCompound>} a_objEzsigntemplate
 */
EzsigntemplateCreateObjectV1Request.prototype['a_objEzsigntemplate'] = undefined;






export default EzsigntemplateCreateObjectV1Request;

