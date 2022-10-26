/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatepackageListElement from './EzsigntemplatepackageListElement';

/**
 * The EzsigntemplatepackageGetListV1ResponseMPayloadAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf
 * @version 1.1.12
 */
class EzsigntemplatepackageGetListV1ResponseMPayloadAllOf {
    /**
     * Constructs a new <code>EzsigntemplatepackageGetListV1ResponseMPayloadAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf
     * @param a_objEzsigntemplatepackage {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} 
     */
    constructor(a_objEzsigntemplatepackage) { 
        
        EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.initialize(this, a_objEzsigntemplatepackage);
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
     * Constructs a <code>EzsigntemplatepackageGetListV1ResponseMPayloadAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf} The populated <code>EzsigntemplatepackageGetListV1ResponseMPayloadAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageGetListV1ResponseMPayloadAllOf();

            if (data.hasOwnProperty('a_objEzsigntemplatepackage')) {
                obj['a_objEzsigntemplatepackage'] = ApiClient.convertToType(data['a_objEzsigntemplatepackage'], [EzsigntemplatepackageListElement]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>}
     */
    getAObjEzsigntemplatepackage() {
        return this.a_objEzsigntemplatepackage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} a_objEzsigntemplatepackage
     */
    setAObjEzsigntemplatepackage(a_objEzsigntemplatepackage) {
        this['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageListElement>} a_objEzsigntemplatepackage
 */
EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.prototype['a_objEzsigntemplatepackage'] = undefined;






export default EzsigntemplatepackageGetListV1ResponseMPayloadAllOf;

