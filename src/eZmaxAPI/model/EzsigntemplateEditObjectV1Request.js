/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
 * The EzsigntemplateEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplateEditObjectV1Request
 * @version 1.1.13
 */
class EzsigntemplateEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplateEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplate/{pkiEzsigntemplateID}
     * @alias module:eZmaxAPI/model/EzsigntemplateEditObjectV1Request
     * @param objEzsigntemplate {module:eZmaxAPI/model/EzsigntemplateRequestCompound} 
     */
    constructor(objEzsigntemplate) { 
        
        EzsigntemplateEditObjectV1Request.initialize(this, objEzsigntemplate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplate) { 
        obj['objEzsigntemplate'] = objEzsigntemplate;
    }

    /**
     * Constructs a <code>EzsigntemplateEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateEditObjectV1Request} The populated <code>EzsigntemplateEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateRequestCompound.constructFromObject(data['objEzsigntemplate']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplateRequestCompound}
     */
    getObjEzsigntemplate() {
        return this.objEzsigntemplate;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateRequestCompound} objEzsigntemplate
     */
    setObjEzsigntemplate(objEzsigntemplate) {
        this['objEzsigntemplate'] = objEzsigntemplate;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateRequestCompound} objEzsigntemplate
 */
EzsigntemplateEditObjectV1Request.prototype['objEzsigntemplate'] = undefined;






export default EzsigntemplateEditObjectV1Request;

