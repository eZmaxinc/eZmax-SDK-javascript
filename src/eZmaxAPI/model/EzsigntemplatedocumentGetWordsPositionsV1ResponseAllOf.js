/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomWordPositionWordResponse from './CustomWordPositionWordResponse';

/**
 * The EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf
 * @version 1.1.17
 */
class EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf
     * @param mPayload {Array.<module:eZmaxAPI/model/CustomWordPositionWordResponse>} Payload for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
     */
    constructor(mPayload) { 
        
        EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf} The populated <code>EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApiClient.convertToType(data['mPayload'], [CustomWordPositionWordResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['mPayload']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['mPayload'])) {
                throw new Error("Expected the field `mPayload` to be an array in the JSON data but got " + data['mPayload']);
            }
            // validate the optional field `mPayload` (array)
            for (const item of data['mPayload']) {
                CustomWordPositionWordResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns Payload for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
     * @return {Array.<module:eZmaxAPI/model/CustomWordPositionWordResponse>}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * Sets Payload for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
     * @param {Array.<module:eZmaxAPI/model/CustomWordPositionWordResponse>} mPayload Payload for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf.RequiredProperties = ["mPayload"];

/**
 * Payload for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
 * @member {Array.<module:eZmaxAPI/model/CustomWordPositionWordResponse>} mPayload
 */
EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsigntemplatedocumentGetWordsPositionsV1ResponseAllOf;

