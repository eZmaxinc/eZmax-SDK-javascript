/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigndocumentRequestPatch model module.
 * @module eZmaxAPI/model/EzsigndocumentRequestPatch
 * @version 1.1.18
 */
class EzsigndocumentRequestPatch {
    /**
     * Constructs a new <code>EzsigndocumentRequestPatch</code>.
     * An Ezsigndocument Object
     * @alias module:eZmaxAPI/model/EzsigndocumentRequestPatch
     */
    constructor() { 
        
        EzsigndocumentRequestPatch.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzsigndocumentRequestPatch</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentRequestPatch} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentRequestPatch} The populated <code>EzsigndocumentRequestPatch</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentRequestPatch();

            if (data.hasOwnProperty('dtEzsigndocumentDuedate')) {
                obj['dtEzsigndocumentDuedate'] = ApiClient.convertToType(data['dtEzsigndocumentDuedate'], 'String');
            }
            if (data.hasOwnProperty('sEzsigndocumentName')) {
                obj['sEzsigndocumentName'] = ApiClient.convertToType(data['sEzsigndocumentName'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentRequestPatch</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentRequestPatch</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['dtEzsigndocumentDuedate'] && !(typeof data['dtEzsigndocumentDuedate'] === 'string' || data['dtEzsigndocumentDuedate'] instanceof String)) {
            throw new Error("Expected the field `dtEzsigndocumentDuedate` to be a primitive type in the JSON string but got " + data['dtEzsigndocumentDuedate']);
        }
        // ensure the json data is a string
        if (data['sEzsigndocumentName'] && !(typeof data['sEzsigndocumentName'] === 'string' || data['sEzsigndocumentName'] instanceof String)) {
            throw new Error("Expected the field `sEzsigndocumentName` to be a primitive type in the JSON string but got " + data['sEzsigndocumentName']);
        }

        return true;
    }

/**
     * Returns The maximum date and time at which the Ezsigndocument can be signed.
     * @return {String}
     */
    getDtEzsigndocumentDuedate() {
        return this.dtEzsigndocumentDuedate;
    }

    /**
     * Sets The maximum date and time at which the Ezsigndocument can be signed.
     * @param {String} dtEzsigndocumentDuedate The maximum date and time at which the Ezsigndocument can be signed.
     */
    setDtEzsigndocumentDuedate(dtEzsigndocumentDuedate) {
        this['dtEzsigndocumentDuedate'] = dtEzsigndocumentDuedate;
    }
/**
     * Returns The name of the document that will be presented to Ezsignfoldersignerassociations
     * @return {String}
     */
    getSEzsigndocumentName() {
        return this.sEzsigndocumentName;
    }

    /**
     * Sets The name of the document that will be presented to Ezsignfoldersignerassociations
     * @param {String} sEzsigndocumentName The name of the document that will be presented to Ezsignfoldersignerassociations
     */
    setSEzsigndocumentName(sEzsigndocumentName) {
        this['sEzsigndocumentName'] = sEzsigndocumentName;
    }

}



/**
 * The maximum date and time at which the Ezsigndocument can be signed.
 * @member {String} dtEzsigndocumentDuedate
 */
EzsigndocumentRequestPatch.prototype['dtEzsigndocumentDuedate'] = undefined;

/**
 * The name of the document that will be presented to Ezsignfoldersignerassociations
 * @member {String} sEzsigndocumentName
 */
EzsigndocumentRequestPatch.prototype['sEzsigndocumentName'] = undefined;






export default EzsigndocumentRequestPatch;

