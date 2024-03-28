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
import CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest from './CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest';
import CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest from './CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest';

/**
 * The EzsigndocumentCreateEzsignelementsPositionedByWordV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentCreateEzsignelementsPositionedByWordV1Request
 * @version 1.2.0
 */
class EzsigndocumentCreateEzsignelementsPositionedByWordV1Request {
    /**
     * Constructs a new <code>EzsigndocumentCreateEzsignelementsPositionedByWordV1Request</code>.
     * Request for POST /1/object/ezsigndocument/{pkiEzsigndocumentID}/createEzsignelementsPositionedByWord
     * @alias module:eZmaxAPI/model/EzsigndocumentCreateEzsignelementsPositionedByWordV1Request
     * @param a_objEzsignformfieldgroup {Array.<module:eZmaxAPI/model/CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest>} 
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest>} 
     */
    constructor(a_objEzsignformfieldgroup, a_objEzsignsignature) { 
        
        EzsigndocumentCreateEzsignelementsPositionedByWordV1Request.initialize(this, a_objEzsignformfieldgroup, a_objEzsignsignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignformfieldgroup, a_objEzsignsignature) { 
        obj['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
    }

    /**
     * Constructs a <code>EzsigndocumentCreateEzsignelementsPositionedByWordV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateEzsignelementsPositionedByWordV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentCreateEzsignelementsPositionedByWordV1Request} The populated <code>EzsigndocumentCreateEzsignelementsPositionedByWordV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentCreateEzsignelementsPositionedByWordV1Request();

            if (data.hasOwnProperty('a_objEzsignformfieldgroup')) {
                obj['a_objEzsignformfieldgroup'] = ApiClient.convertToType(data['a_objEzsignformfieldgroup'], [CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest]);
            }
            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentCreateEzsignelementsPositionedByWordV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentCreateEzsignelementsPositionedByWordV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentCreateEzsignelementsPositionedByWordV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignformfieldgroup']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignformfieldgroup'])) {
                throw new Error("Expected the field `a_objEzsignformfieldgroup` to be an array in the JSON data but got " + data['a_objEzsignformfieldgroup']);
            }
            // validate the optional field `a_objEzsignformfieldgroup` (array)
            for (const item of data['a_objEzsignformfieldgroup']) {
                CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest.validateJSON(item);
            };
        }
        if (data['a_objEzsignsignature']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignature'])) {
                throw new Error("Expected the field `a_objEzsignsignature` to be an array in the JSON data but got " + data['a_objEzsignsignature']);
            }
            // validate the optional field `a_objEzsignsignature` (array)
            for (const item of data['a_objEzsignsignature']) {
                CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest>}
     */
    getAObjEzsignformfieldgroup() {
        return this.a_objEzsignformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest>} a_objEzsignformfieldgroup
     */
    setAObjEzsignformfieldgroup(a_objEzsignformfieldgroup) {
        this['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }

}

EzsigndocumentCreateEzsignelementsPositionedByWordV1Request.RequiredProperties = ["a_objEzsignformfieldgroup", "a_objEzsignsignature"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignformfieldgroupCreateEzsignelementsPositionedByWordRequest>} a_objEzsignformfieldgroup
 */
EzsigndocumentCreateEzsignelementsPositionedByWordV1Request.prototype['a_objEzsignformfieldgroup'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignsignatureCreateEzsignelementsPositionedByWordRequest>} a_objEzsignsignature
 */
EzsigndocumentCreateEzsignelementsPositionedByWordV1Request.prototype['a_objEzsignsignature'] = undefined;






export default EzsigndocumentCreateEzsignelementsPositionedByWordV1Request;

