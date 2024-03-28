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
import CustomFormDataDocumentResponse from './CustomFormDataDocumentResponse';

/**
 * The EzsigndocumentGetFormDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload
 * @version 1.2.0
 */
class EzsigndocumentGetFormDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetFormDataV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocument}/getFormData
     * @alias module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload
     * @param objFormDataDocument {module:eZmaxAPI/model/CustomFormDataDocumentResponse} 
     */
    constructor(objFormDataDocument) { 
        
        EzsigndocumentGetFormDataV1ResponseMPayload.initialize(this, objFormDataDocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objFormDataDocument) { 
        obj['objFormDataDocument'] = objFormDataDocument;
    }

    /**
     * Constructs a <code>EzsigndocumentGetFormDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetFormDataV1ResponseMPayload} The populated <code>EzsigndocumentGetFormDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetFormDataV1ResponseMPayload();

            if (data.hasOwnProperty('objFormDataDocument')) {
                obj['objFormDataDocument'] = CustomFormDataDocumentResponse.constructFromObject(data['objFormDataDocument']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetFormDataV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetFormDataV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetFormDataV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objFormDataDocument`
        if (data['objFormDataDocument']) { // data not null
          CustomFormDataDocumentResponse.validateJSON(data['objFormDataDocument']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CustomFormDataDocumentResponse}
     */
    getObjFormDataDocument() {
        return this.objFormDataDocument;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomFormDataDocumentResponse} objFormDataDocument
     */
    setObjFormDataDocument(objFormDataDocument) {
        this['objFormDataDocument'] = objFormDataDocument;
    }

}

EzsigndocumentGetFormDataV1ResponseMPayload.RequiredProperties = ["objFormDataDocument"];

/**
 * @member {module:eZmaxAPI/model/CustomFormDataDocumentResponse} objFormDataDocument
 */
EzsigndocumentGetFormDataV1ResponseMPayload.prototype['objFormDataDocument'] = undefined;






export default EzsigndocumentGetFormDataV1ResponseMPayload;

