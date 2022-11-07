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
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';
import EzsigntemplatepackageResponseCompound from './EzsigntemplatepackageResponseCompound';

/**
 * The EzsignbulksenddocumentmappingResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompoundAllOf
 * @version 1.1.15
 */
class EzsignbulksenddocumentmappingResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompoundAllOf
     */
    constructor() { 
        
        EzsignbulksenddocumentmappingResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompoundAllOf} The populated <code>EzsignbulksenddocumentmappingResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingResponseCompoundAllOf();

            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateResponseCompound.constructFromObject(data['objEzsigntemplate']);
            }
            if (data.hasOwnProperty('objEzsigntemplatepackage')) {
                obj['objEzsigntemplatepackage'] = EzsigntemplatepackageResponseCompound.constructFromObject(data['objEzsigntemplatepackage']);
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
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound}
     */
    getObjEzsigntemplatepackage() {
        return this.objEzsigntemplatepackage;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
     */
    setObjEzsigntemplatepackage(objEzsigntemplatepackage) {
        this['objEzsigntemplatepackage'] = objEzsigntemplatepackage;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsignbulksenddocumentmappingResponseCompoundAllOf.prototype['objEzsigntemplate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
 */
EzsignbulksenddocumentmappingResponseCompoundAllOf.prototype['objEzsigntemplatepackage'] = undefined;






export default EzsignbulksenddocumentmappingResponseCompoundAllOf;

