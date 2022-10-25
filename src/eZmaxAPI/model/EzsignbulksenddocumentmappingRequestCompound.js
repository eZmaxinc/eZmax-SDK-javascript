/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksenddocumentmappingRequest from './EzsignbulksenddocumentmappingRequest';

/**
 * The EzsignbulksenddocumentmappingRequestCompound model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound
 * @version 1.1.11
 */
class EzsignbulksenddocumentmappingRequestCompound {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingRequestCompound</code>.
     * A Ezsignbulksenddocumentmapping Object and children
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound
     * @implements module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequest
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     */
    constructor(fkiEzsignbulksendID) { 
        EzsignbulksenddocumentmappingRequest.initialize(this, fkiEzsignbulksendID);
        EzsignbulksenddocumentmappingRequestCompound.initialize(this, fkiEzsignbulksendID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignbulksendID) { 
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingRequestCompound} The populated <code>EzsignbulksenddocumentmappingRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingRequestCompound();
            EzsignbulksenddocumentmappingRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignbulksenddocumentmappingID')) {
                obj['pkiEzsignbulksenddocumentmappingID'] = ApiClient.convertToType(data['pkiEzsignbulksenddocumentmappingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignbulksendID')) {
                obj['fkiEzsignbulksendID'] = ApiClient.convertToType(data['fkiEzsignbulksendID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplatepackageID')) {
                obj['fkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['fkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateID')) {
                obj['fkiEzsigntemplateID'] = ApiClient.convertToType(data['fkiEzsigntemplateID'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignbulksenddocumentmapping.
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignbulksenddocumentmappingID() {
        return this.pkiEzsignbulksenddocumentmappingID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksenddocumentmapping.
     * @param {Number} pkiEzsignbulksenddocumentmappingID The unique ID of the Ezsignbulksenddocumentmapping.
     */
    setPkiEzsignbulksenddocumentmappingID(pkiEzsignbulksenddocumentmappingID) {
        this['pkiEzsignbulksenddocumentmappingID'] = pkiEzsignbulksenddocumentmappingID;
    }
/**
     * Returns The unique ID of the Ezsignbulksend
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignbulksendID() {
        return this.fkiEzsignbulksendID;
    }

    /**
     * Sets The unique ID of the Ezsignbulksend
     * @param {Number} fkiEzsignbulksendID The unique ID of the Ezsignbulksend
     */
    setFkiEzsignbulksendID(fkiEzsignbulksendID) {
        this['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
    }
/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplatepackageID() {
        return this.fkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} fkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setFkiEzsigntemplatepackageID(fkiEzsigntemplatepackageID) {
        this['fkiEzsigntemplatepackageID'] = fkiEzsigntemplatepackageID;
    }
/**
     * Returns The unique ID of the Ezsigntemplate
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateID() {
        return this.fkiEzsigntemplateID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplate
     * @param {Number} fkiEzsigntemplateID The unique ID of the Ezsigntemplate
     */
    setFkiEzsigntemplateID(fkiEzsigntemplateID) {
        this['fkiEzsigntemplateID'] = fkiEzsigntemplateID;
    }

}

/**
 * The unique ID of the Ezsignbulksenddocumentmapping.
 * @member {Number} pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingRequestCompound.prototype['pkiEzsignbulksenddocumentmappingID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksenddocumentmappingRequestCompound.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignbulksenddocumentmappingRequestCompound.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsignbulksenddocumentmappingRequestCompound.prototype['fkiEzsigntemplateID'] = undefined;


// Implement EzsignbulksenddocumentmappingRequest interface:
/**
 * The unique ID of the Ezsignbulksenddocumentmapping.
 * @member {Number} pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingRequest.prototype['pkiEzsignbulksenddocumentmappingID'] = undefined;
/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksenddocumentmappingRequest.prototype['fkiEzsignbulksendID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignbulksenddocumentmappingRequest.prototype['fkiEzsigntemplatepackageID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsignbulksenddocumentmappingRequest.prototype['fkiEzsigntemplateID'] = undefined;




export default EzsignbulksenddocumentmappingRequestCompound;

