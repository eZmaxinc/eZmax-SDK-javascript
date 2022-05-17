/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplateformfieldgroupRequestCompound from './EzsigntemplateformfieldgroupRequestCompound';

/**
 * The EzsigntemplateformfieldgroupCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Request
 * @version 1.1.7
 */
class EzsigntemplateformfieldgroupCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplateformfieldgroupCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsigntemplateformfieldgroup
     * @alias module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Request
     * @param a_objEzsigntemplateformfieldgroup {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupRequestCompound>} 
     */
    constructor(a_objEzsigntemplateformfieldgroup) { 
        
        EzsigntemplateformfieldgroupCreateObjectV1Request.initialize(this, a_objEzsigntemplateformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplateformfieldgroup) { 
        obj['a_objEzsigntemplateformfieldgroup'] = a_objEzsigntemplateformfieldgroup;
    }

    /**
     * Constructs a <code>EzsigntemplateformfieldgroupCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateformfieldgroupCreateObjectV1Request} The populated <code>EzsigntemplateformfieldgroupCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateformfieldgroupCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsigntemplateformfieldgroup')) {
                obj['a_objEzsigntemplateformfieldgroup'] = ApiClient.convertToType(data['a_objEzsigntemplateformfieldgroup'], [EzsigntemplateformfieldgroupRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupRequestCompound>}
     */
    getAObjEzsigntemplateformfieldgroup() {
        return this.a_objEzsigntemplateformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupRequestCompound>} a_objEzsigntemplateformfieldgroup
     */
    setAObjEzsigntemplateformfieldgroup(a_objEzsigntemplateformfieldgroup) {
        this['a_objEzsigntemplateformfieldgroup'] = a_objEzsigntemplateformfieldgroup;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateformfieldgroupRequestCompound>} a_objEzsigntemplateformfieldgroup
 */
EzsigntemplateformfieldgroupCreateObjectV1Request.prototype['a_objEzsigntemplateformfieldgroup'] = undefined;






export default EzsigntemplateformfieldgroupCreateObjectV1Request;

