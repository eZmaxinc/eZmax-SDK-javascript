/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentRequestPatch from './EzsigndocumentRequestPatch';

/**
 * The EzsigndocumentPatchObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentPatchObjectV1Request
 * @version 1.1.6
 */
class EzsigndocumentPatchObjectV1Request {
    /**
     * Constructs a new <code>EzsigndocumentPatchObjectV1Request</code>.
     * Request for the /1/object/ezsigndocument/pathObject API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Request
     * @param objEzsigndocument {module:eZmaxAPI/model/EzsigndocumentRequestPatch} 
     */
    constructor(objEzsigndocument) { 
        
        EzsigndocumentPatchObjectV1Request.initialize(this, objEzsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigndocument) { 
        obj['objEzsigndocument'] = objEzsigndocument;
    }

    /**
     * Constructs a <code>EzsigndocumentPatchObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentPatchObjectV1Request} The populated <code>EzsigndocumentPatchObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentPatchObjectV1Request();

            if (data.hasOwnProperty('objEzsigndocument')) {
                obj['objEzsigndocument'] = EzsigndocumentRequestPatch.constructFromObject(data['objEzsigndocument']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestPatch}
     */
    getObjEzsigndocument() {
        return this.objEzsigndocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestPatch} objEzsigndocument
     */
    setObjEzsigndocument(objEzsigndocument) {
        this['objEzsigndocument'] = objEzsigndocument;
    }

}

/**
 * @member {module:eZmaxAPI/model/EzsigndocumentRequestPatch} objEzsigndocument
 */
EzsigndocumentPatchObjectV1Request.prototype['objEzsigndocument'] = undefined;






export default EzsigndocumentPatchObjectV1Request;

