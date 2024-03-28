/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentRequestPatch from './EzsigntemplatedocumentRequestPatch';

/**
 * The EzsigntemplatedocumentPatchObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Request
 * @version 1.2.0
 */
class EzsigntemplatedocumentPatchObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatedocumentPatchObjectV1Request</code>.
     * Request for PATCH /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Request
     * @param objEzsigntemplatedocument {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch} 
     */
    constructor(objEzsigntemplatedocument) { 
        
        EzsigntemplatedocumentPatchObjectV1Request.initialize(this, objEzsigntemplatedocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatedocument) { 
        obj['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentPatchObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentPatchObjectV1Request} The populated <code>EzsigntemplatedocumentPatchObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentPatchObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatedocument')) {
                obj['objEzsigntemplatedocument'] = EzsigntemplatedocumentRequestPatch.constructFromObject(data['objEzsigntemplatedocument']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentPatchObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentPatchObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentPatchObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplatedocument`
        if (data['objEzsigntemplatedocument']) { // data not null
          EzsigntemplatedocumentRequestPatch.validateJSON(data['objEzsigntemplatedocument']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch}
     */
    getObjEzsigntemplatedocument() {
        return this.objEzsigntemplatedocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch} objEzsigntemplatedocument
     */
    setObjEzsigntemplatedocument(objEzsigntemplatedocument) {
        this['objEzsigntemplatedocument'] = objEzsigntemplatedocument;
    }

}

EzsigntemplatedocumentPatchObjectV1Request.RequiredProperties = ["objEzsigntemplatedocument"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentRequestPatch} objEzsigntemplatedocument
 */
EzsigntemplatedocumentPatchObjectV1Request.prototype['objEzsigntemplatedocument'] = undefined;






export default EzsigntemplatedocumentPatchObjectV1Request;

