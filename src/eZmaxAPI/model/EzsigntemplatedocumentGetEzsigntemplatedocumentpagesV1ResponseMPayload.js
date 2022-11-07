/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentpageResponseCompound from './EzsigntemplatedocumentpageResponseCompound';

/**
 * The EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload
 * @version 1.1.15
 */
class EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getEzsigntemplatedocumentpages
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload
     * @param a_objEzsigntemplatedocumentpage {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} 
     */
    constructor(a_objEzsigntemplatedocumentpage) { 
        
        EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.initialize(this, a_objEzsigntemplatedocumentpage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatedocumentpage) { 
        obj['a_objEzsigntemplatedocumentpage'] = a_objEzsigntemplatedocumentpage;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload} The populated <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplatedocumentpage')) {
                obj['a_objEzsigntemplatedocumentpage'] = ApiClient.convertToType(data['a_objEzsigntemplatedocumentpage'], [EzsigntemplatedocumentpageResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>}
     */
    getAObjEzsigntemplatedocumentpage() {
        return this.a_objEzsigntemplatedocumentpage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} a_objEzsigntemplatedocumentpage
     */
    setAObjEzsigntemplatedocumentpage(a_objEzsigntemplatedocumentpage) {
        this['a_objEzsigntemplatedocumentpage'] = a_objEzsigntemplatedocumentpage;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} a_objEzsigntemplatedocumentpage
 */
EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.prototype['a_objEzsigntemplatedocumentpage'] = undefined;






export default EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload;

