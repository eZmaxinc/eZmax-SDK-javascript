/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFormDataEzsignformfieldResponse from './CustomFormDataEzsignformfieldResponse';

/**
 * The CustomFormDataEzsignformfieldgroupResponse model module.
 * @module eZmaxAPI/model/CustomFormDataEzsignformfieldgroupResponse
 * @version 1.1.7
 */
class CustomFormDataEzsignformfieldgroupResponse {
    /**
     * Constructs a new <code>CustomFormDataEzsignformfieldgroupResponse</code>.
     * An FormDataSigner-&gt;Ezsignformfieldgroup Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/CustomFormDataEzsignformfieldgroupResponse
     * @param sEzsignformfieldgroupLabel {String} The Label for the Ezsignformfieldgroup
     * @param a_objEzsignformfield {Array.<module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse>} 
     */
    constructor(sEzsignformfieldgroupLabel, a_objEzsignformfield) { 
        
        CustomFormDataEzsignformfieldgroupResponse.initialize(this, sEzsignformfieldgroupLabel, a_objEzsignformfield);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sEzsignformfieldgroupLabel, a_objEzsignformfield) { 
        obj['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
        obj['a_objEzsignformfield'] = a_objEzsignformfield;
    }

    /**
     * Constructs a <code>CustomFormDataEzsignformfieldgroupResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomFormDataEzsignformfieldgroupResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomFormDataEzsignformfieldgroupResponse} The populated <code>CustomFormDataEzsignformfieldgroupResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomFormDataEzsignformfieldgroupResponse();

            if (data.hasOwnProperty('sEzsignformfieldgroupLabel')) {
                obj['sEzsignformfieldgroupLabel'] = ApiClient.convertToType(data['sEzsignformfieldgroupLabel'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignformfield')) {
                obj['a_objEzsignformfield'] = ApiClient.convertToType(data['a_objEzsignformfield'], [CustomFormDataEzsignformfieldResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The Label for the Ezsignformfieldgroup
     * @return {String}
     */
    getSEzsignformfieldgroupLabel() {
        return this.sEzsignformfieldgroupLabel;
    }

    /**
     * Sets The Label for the Ezsignformfieldgroup
     * @param {String} sEzsignformfieldgroupLabel The Label for the Ezsignformfieldgroup
     */
    setSEzsignformfieldgroupLabel(sEzsignformfieldgroupLabel) {
        this['sEzsignformfieldgroupLabel'] = sEzsignformfieldgroupLabel;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse>}
     */
    getAObjEzsignformfield() {
        return this.a_objEzsignformfield;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse>} a_objEzsignformfield
     */
    setAObjEzsignformfield(a_objEzsignformfield) {
        this['a_objEzsignformfield'] = a_objEzsignformfield;
    }

}

/**
 * The Label for the Ezsignformfieldgroup
 * @member {String} sEzsignformfieldgroupLabel
 */
CustomFormDataEzsignformfieldgroupResponse.prototype['sEzsignformfieldgroupLabel'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormDataEzsignformfieldResponse>} a_objEzsignformfield
 */
CustomFormDataEzsignformfieldgroupResponse.prototype['a_objEzsignformfield'] = undefined;






export default CustomFormDataEzsignformfieldgroupResponse;

