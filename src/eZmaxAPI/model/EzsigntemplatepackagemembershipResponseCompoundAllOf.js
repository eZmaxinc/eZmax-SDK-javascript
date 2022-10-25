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
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';
import EzsigntemplatepackagesignermembershipResponseCompound from './EzsigntemplatepackagesignermembershipResponseCompound';

/**
 * The EzsigntemplatepackagemembershipResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompoundAllOf
 * @version 1.1.11
 */
class EzsigntemplatepackagemembershipResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsigntemplatepackagemembershipResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompoundAllOf
     * @param objEzsigntemplate {module:eZmaxAPI/model/EzsigntemplateResponseCompound} 
     * @param a_objEzsigntemplatepackagesignermembership {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} 
     */
    constructor(objEzsigntemplate, a_objEzsigntemplatepackagesignermembership) { 
        
        EzsigntemplatepackagemembershipResponseCompoundAllOf.initialize(this, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplate, a_objEzsigntemplatepackagesignermembership) { 
        obj['objEzsigntemplate'] = objEzsigntemplate;
        obj['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackagemembershipResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackagemembershipResponseCompoundAllOf} The populated <code>EzsigntemplatepackagemembershipResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackagemembershipResponseCompoundAllOf();

            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateResponseCompound.constructFromObject(data['objEzsigntemplate']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplatepackagesignermembership')) {
                obj['a_objEzsigntemplatepackagesignermembership'] = ApiClient.convertToType(data['a_objEzsigntemplatepackagesignermembership'], [EzsigntemplatepackagesignermembershipResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompound}
     */
    getObjEzsigntemplate() {
        return this.objEzsigntemplate;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
     */
    setObjEzsigntemplate(objEzsigntemplate) {
        this['objEzsigntemplate'] = objEzsigntemplate;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>}
     */
    getAObjEzsigntemplatepackagesignermembership() {
        return this.a_objEzsigntemplatepackagesignermembership;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} a_objEzsigntemplatepackagesignermembership
     */
    setAObjEzsigntemplatepackagesignermembership(a_objEzsigntemplatepackagesignermembership) {
        this['a_objEzsigntemplatepackagesignermembership'] = a_objEzsigntemplatepackagesignermembership;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsigntemplatepackagemembershipResponseCompoundAllOf.prototype['objEzsigntemplate'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatepackagesignermembershipResponseCompound>} a_objEzsigntemplatepackagesignermembership
 */
EzsigntemplatepackagemembershipResponseCompoundAllOf.prototype['a_objEzsigntemplatepackagesignermembership'] = undefined;






export default EzsigntemplatepackagemembershipResponseCompoundAllOf;

