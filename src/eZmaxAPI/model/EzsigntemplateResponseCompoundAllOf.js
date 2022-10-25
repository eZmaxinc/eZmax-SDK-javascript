/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentResponse from './EzsigntemplatedocumentResponse';
import EzsigntemplatesignerResponseCompound from './EzsigntemplatesignerResponseCompound';

/**
 * The EzsigntemplateResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplateResponseCompoundAllOf
 * @version 1.1.11
 */
class EzsigntemplateResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsigntemplateResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplateResponseCompoundAllOf
     * @param a_objEzsigntemplatesigner {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} 
     */
    constructor(a_objEzsigntemplatesigner) { 
        
        EzsigntemplateResponseCompoundAllOf.initialize(this, a_objEzsigntemplatesigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatesigner) { 
        obj['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

    /**
     * Constructs a <code>EzsigntemplateResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompoundAllOf} The populated <code>EzsigntemplateResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateResponseCompoundAllOf();

            if (data.hasOwnProperty('objEzsigntemplatedocument')) {
                obj['objEzsigntemplatedocument'] = EzsigntemplatedocumentResponse.constructFromObject(data['objEzsigntemplatedocument']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatesigner')) {
                obj['a_objEzsigntemplatesigner'] = ApiClient.convertToType(data['a_objEzsigntemplatesigner'], [EzsigntemplatesignerResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentResponse}
     */
    getObjEzsigntemplatedocument() {
        return this.objEzsigntemplatedocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} objEzsigntemplatedocument
     */
    setObjEzsigntemplatedocument(objEzsigntemplatedocument) {
        this['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>}
     */
    getAObjEzsigntemplatesigner() {
        return this.a_objEzsigntemplatesigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} a_objEzsigntemplatesigner
     */
    setAObjEzsigntemplatesigner(a_objEzsigntemplatesigner) {
        this['a_objEzsigntemplatesigner'] = a_objEzsigntemplatesigner;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentResponse} objEzsigntemplatedocument
 */
EzsigntemplateResponseCompoundAllOf.prototype['objEzsigntemplatedocument'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatesignerResponseCompound>} a_objEzsigntemplatesigner
 */
EzsigntemplateResponseCompoundAllOf.prototype['a_objEzsigntemplatesigner'] = undefined;






export default EzsigntemplateResponseCompoundAllOf;

