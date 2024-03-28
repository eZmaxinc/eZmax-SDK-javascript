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
import BrandingListElement from './BrandingListElement';
import CommonGetListV1ResponseMPayload from './CommonGetListV1ResponseMPayload';

/**
 * The BrandingGetListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/BrandingGetListV1ResponseMPayload
 * @version 1.2.0
 */
class BrandingGetListV1ResponseMPayload {
    /**
     * Constructs a new <code>BrandingGetListV1ResponseMPayload</code>.
     * Payload for GET /1/object/branding/getList
     * @alias module:eZmaxAPI/model/BrandingGetListV1ResponseMPayload
     * @implements module:eZmaxAPI/model/CommonGetListV1ResponseMPayload
     * @param iRowReturned {Number} The number of rows returned
     * @param iRowFiltered {Number} The number of rows matching your filters (if any) or the total number of rows
     * @param a_objBranding {Array.<module:eZmaxAPI/model/BrandingListElement>} 
     */
    constructor(iRowReturned, iRowFiltered, a_objBranding) { 
        CommonGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered);
        BrandingGetListV1ResponseMPayload.initialize(this, iRowReturned, iRowFiltered, a_objBranding);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iRowReturned, iRowFiltered, a_objBranding) { 
        obj['iRowReturned'] = iRowReturned;
        obj['iRowFiltered'] = iRowFiltered;
        obj['a_objBranding'] = a_objBranding;
    }

    /**
     * Constructs a <code>BrandingGetListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingGetListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingGetListV1ResponseMPayload} The populated <code>BrandingGetListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingGetListV1ResponseMPayload();
            CommonGetListV1ResponseMPayload.constructFromObject(data, obj);

            if (data.hasOwnProperty('iRowReturned')) {
                obj['iRowReturned'] = ApiClient.convertToType(data['iRowReturned'], 'Number');
            }
            if (data.hasOwnProperty('iRowFiltered')) {
                obj['iRowFiltered'] = ApiClient.convertToType(data['iRowFiltered'], 'Number');
            }
            if (data.hasOwnProperty('a_objBranding')) {
                obj['a_objBranding'] = ApiClient.convertToType(data['a_objBranding'], [BrandingListElement]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingGetListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingGetListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingGetListV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objBranding']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objBranding'])) {
                throw new Error("Expected the field `a_objBranding` to be an array in the JSON data but got " + data['a_objBranding']);
            }
            // validate the optional field `a_objBranding` (array)
            for (const item of data['a_objBranding']) {
                BrandingListElement.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The number of rows returned
     * @return {Number}
     */
    getIRowReturned() {
        return this.iRowReturned;
    }

    /**
     * Sets The number of rows returned
     * @param {Number} iRowReturned The number of rows returned
     */
    setIRowReturned(iRowReturned) {
        this['iRowReturned'] = iRowReturned;
    }
/**
     * Returns The number of rows matching your filters (if any) or the total number of rows
     * @return {Number}
     */
    getIRowFiltered() {
        return this.iRowFiltered;
    }

    /**
     * Sets The number of rows matching your filters (if any) or the total number of rows
     * @param {Number} iRowFiltered The number of rows matching your filters (if any) or the total number of rows
     */
    setIRowFiltered(iRowFiltered) {
        this['iRowFiltered'] = iRowFiltered;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/BrandingListElement>}
     */
    getAObjBranding() {
        return this.a_objBranding;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/BrandingListElement>} a_objBranding
     */
    setAObjBranding(a_objBranding) {
        this['a_objBranding'] = a_objBranding;
    }

}

BrandingGetListV1ResponseMPayload.RequiredProperties = ["iRowReturned", "iRowFiltered", "a_objBranding"];

/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
BrandingGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;

/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
BrandingGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/BrandingListElement>} a_objBranding
 */
BrandingGetListV1ResponseMPayload.prototype['a_objBranding'] = undefined;


// Implement CommonGetListV1ResponseMPayload interface:
/**
 * The number of rows returned
 * @member {Number} iRowReturned
 */
CommonGetListV1ResponseMPayload.prototype['iRowReturned'] = undefined;
/**
 * The number of rows matching your filters (if any) or the total number of rows
 * @member {Number} iRowFiltered
 */
CommonGetListV1ResponseMPayload.prototype['iRowFiltered'] = undefined;




export default BrandingGetListV1ResponseMPayload;

