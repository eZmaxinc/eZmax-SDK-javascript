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
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';
import EzsigntemplatepackageResponseCompound from './EzsigntemplatepackageResponseCompound';

/**
 * The EzsignSuggestTemplatesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignSuggestTemplatesV1ResponseMPayload
 * @version 1.1.14
 */
class EzsignSuggestTemplatesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignSuggestTemplatesV1ResponseMPayload</code>.
     * Payload for GET /1/module/ezsign/suggestTemplates
     * @alias module:eZmaxAPI/model/EzsignSuggestTemplatesV1ResponseMPayload
     * @param a_objEzsigntemplate {Array.<module:eZmaxAPI/model/EzsigntemplateResponseCompound>} 
     * @param a_objEzsigntemplatepackage {Array.<module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound>} 
     */
    constructor(a_objEzsigntemplate, a_objEzsigntemplatepackage) { 
        
        EzsignSuggestTemplatesV1ResponseMPayload.initialize(this, a_objEzsigntemplate, a_objEzsigntemplatepackage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplate, a_objEzsigntemplatepackage) { 
        obj['a_objEzsigntemplate'] = a_objEzsigntemplate;
        obj['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

    /**
     * Constructs a <code>EzsignSuggestTemplatesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignSuggestTemplatesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignSuggestTemplatesV1ResponseMPayload} The populated <code>EzsignSuggestTemplatesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignSuggestTemplatesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplate')) {
                obj['a_objEzsigntemplate'] = ApiClient.convertToType(data['a_objEzsigntemplate'], [EzsigntemplateResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatepackage')) {
                obj['a_objEzsigntemplatepackage'] = ApiClient.convertToType(data['a_objEzsigntemplatepackage'], [EzsigntemplatepackageResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateResponseCompound>}
     */
    getAObjEzsigntemplate() {
        return this.a_objEzsigntemplate;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateResponseCompound>} a_objEzsigntemplate
     */
    setAObjEzsigntemplate(a_objEzsigntemplate) {
        this['a_objEzsigntemplate'] = a_objEzsigntemplate;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound>}
     */
    getAObjEzsigntemplatepackage() {
        return this.a_objEzsigntemplatepackage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound>} a_objEzsigntemplatepackage
     */
    setAObjEzsigntemplatepackage(a_objEzsigntemplatepackage) {
        this['a_objEzsigntemplatepackage'] = a_objEzsigntemplatepackage;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateResponseCompound>} a_objEzsigntemplate
 */
EzsignSuggestTemplatesV1ResponseMPayload.prototype['a_objEzsigntemplate'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound>} a_objEzsigntemplatepackage
 */
EzsignSuggestTemplatesV1ResponseMPayload.prototype['a_objEzsigntemplatepackage'] = undefined;






export default EzsignSuggestTemplatesV1ResponseMPayload;

