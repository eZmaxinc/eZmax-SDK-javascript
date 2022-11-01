/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DepartmentAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/DepartmentAutocompleteElementResponse
 * @version 1.1.14
 */
class DepartmentAutocompleteElementResponse {
    /**
     * Constructs a new <code>DepartmentAutocompleteElementResponse</code>.
     * A Department AutocompleteElement Response
     * @alias module:eZmaxAPI/model/DepartmentAutocompleteElementResponse
     * @param sCompanyNameX {String} The Name of the Company in the language of the requester
     * @param sDepartmentNameX {String} The Name of the Department in the language of the requester
     * @param pkiDepartmentID {Number} The unique ID of the Department
     * @param bDepartmentIsactive {Boolean} Whether the Department is active or not
     */
    constructor(sCompanyNameX, sDepartmentNameX, pkiDepartmentID, bDepartmentIsactive) { 
        
        DepartmentAutocompleteElementResponse.initialize(this, sCompanyNameX, sDepartmentNameX, pkiDepartmentID, bDepartmentIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sCompanyNameX, sDepartmentNameX, pkiDepartmentID, bDepartmentIsactive) { 
        obj['sCompanyNameX'] = sCompanyNameX;
        obj['sDepartmentNameX'] = sDepartmentNameX;
        obj['pkiDepartmentID'] = pkiDepartmentID;
        obj['bDepartmentIsactive'] = bDepartmentIsactive;
    }

    /**
     * Constructs a <code>DepartmentAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/DepartmentAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/DepartmentAutocompleteElementResponse} The populated <code>DepartmentAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DepartmentAutocompleteElementResponse();

            if (data.hasOwnProperty('sCompanyNameX')) {
                obj['sCompanyNameX'] = ApiClient.convertToType(data['sCompanyNameX'], 'String');
            }
            if (data.hasOwnProperty('sDepartmentNameX')) {
                obj['sDepartmentNameX'] = ApiClient.convertToType(data['sDepartmentNameX'], 'String');
            }
            if (data.hasOwnProperty('pkiDepartmentID')) {
                obj['pkiDepartmentID'] = ApiClient.convertToType(data['pkiDepartmentID'], 'Number');
            }
            if (data.hasOwnProperty('bDepartmentIsactive')) {
                obj['bDepartmentIsactive'] = ApiClient.convertToType(data['bDepartmentIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The Name of the Company in the language of the requester
     * @return {String}
     */
    getSCompanyNameX() {
        return this.sCompanyNameX;
    }

    /**
     * Sets The Name of the Company in the language of the requester
     * @param {String} sCompanyNameX The Name of the Company in the language of the requester
     */
    setSCompanyNameX(sCompanyNameX) {
        this['sCompanyNameX'] = sCompanyNameX;
    }
/**
     * Returns The Name of the Department in the language of the requester
     * @return {String}
     */
    getSDepartmentNameX() {
        return this.sDepartmentNameX;
    }

    /**
     * Sets The Name of the Department in the language of the requester
     * @param {String} sDepartmentNameX The Name of the Department in the language of the requester
     */
    setSDepartmentNameX(sDepartmentNameX) {
        this['sDepartmentNameX'] = sDepartmentNameX;
    }
/**
     * Returns The unique ID of the Department
     * minimum: 0
     * @return {Number}
     */
    getPkiDepartmentID() {
        return this.pkiDepartmentID;
    }

    /**
     * Sets The unique ID of the Department
     * @param {Number} pkiDepartmentID The unique ID of the Department
     */
    setPkiDepartmentID(pkiDepartmentID) {
        this['pkiDepartmentID'] = pkiDepartmentID;
    }
/**
     * Returns Whether the Department is active or not
     * @return {Boolean}
     */
    getBDepartmentIsactive() {
        return this.bDepartmentIsactive;
    }

    /**
     * Sets Whether the Department is active or not
     * @param {Boolean} bDepartmentIsactive Whether the Department is active or not
     */
    setBDepartmentIsactive(bDepartmentIsactive) {
        this['bDepartmentIsactive'] = bDepartmentIsactive;
    }

}

/**
 * The Name of the Company in the language of the requester
 * @member {String} sCompanyNameX
 */
DepartmentAutocompleteElementResponse.prototype['sCompanyNameX'] = undefined;

/**
 * The Name of the Department in the language of the requester
 * @member {String} sDepartmentNameX
 */
DepartmentAutocompleteElementResponse.prototype['sDepartmentNameX'] = undefined;

/**
 * The unique ID of the Department
 * @member {Number} pkiDepartmentID
 */
DepartmentAutocompleteElementResponse.prototype['pkiDepartmentID'] = undefined;

/**
 * Whether the Department is active or not
 * @member {Boolean} bDepartmentIsactive
 */
DepartmentAutocompleteElementResponse.prototype['bDepartmentIsactive'] = undefined;






export default DepartmentAutocompleteElementResponse;

