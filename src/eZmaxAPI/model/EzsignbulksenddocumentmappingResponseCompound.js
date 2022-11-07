/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignbulksenddocumentmappingResponse from './EzsignbulksenddocumentmappingResponse';
import EzsignbulksenddocumentmappingResponseCompoundAllOf from './EzsignbulksenddocumentmappingResponseCompoundAllOf';
import EzsigntemplateResponseCompound from './EzsigntemplateResponseCompound';
import EzsigntemplatepackageResponseCompound from './EzsigntemplatepackageResponseCompound';

/**
 * The EzsignbulksenddocumentmappingResponseCompound model module.
 * @module eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound
 * @version 1.1.15
 */
class EzsignbulksenddocumentmappingResponseCompound {
    /**
     * Constructs a new <code>EzsignbulksenddocumentmappingResponseCompound</code>.
     * A Ezsignbulksenddocumentmapping Object
     * @alias module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound
     * @implements module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponse
     * @implements module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompoundAllOf
     * @param pkiEzsignbulksenddocumentmappingID {Number} The unique ID of the Ezsignbulksenddocumentmapping.
     * @param fkiEzsignbulksendID {Number} The unique ID of the Ezsignbulksend
     * @param iEzsignbulksenddocumentmappingOrder {Number} The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     */
    constructor(pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder) { 
        EzsignbulksenddocumentmappingResponse.initialize(this, pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder);EzsignbulksenddocumentmappingResponseCompoundAllOf.initialize(this);
        EzsignbulksenddocumentmappingResponseCompound.initialize(this, pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignbulksenddocumentmappingID, fkiEzsignbulksendID, iEzsignbulksenddocumentmappingOrder) { 
        obj['pkiEzsignbulksenddocumentmappingID'] = pkiEzsignbulksenddocumentmappingID;
        obj['fkiEzsignbulksendID'] = fkiEzsignbulksendID;
        obj['iEzsignbulksenddocumentmappingOrder'] = iEzsignbulksenddocumentmappingOrder;
    }

    /**
     * Constructs a <code>EzsignbulksenddocumentmappingResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksenddocumentmappingResponseCompound} The populated <code>EzsignbulksenddocumentmappingResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksenddocumentmappingResponseCompound();
            EzsignbulksenddocumentmappingResponse.constructFromObject(data, obj);
            EzsignbulksenddocumentmappingResponseCompoundAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('iEzsignbulksenddocumentmappingOrder')) {
                obj['iEzsignbulksenddocumentmappingOrder'] = ApiClient.convertToType(data['iEzsignbulksenddocumentmappingOrder'], 'Number');
            }
            if (data.hasOwnProperty('objEzsigntemplate')) {
                obj['objEzsigntemplate'] = EzsigntemplateResponseCompound.constructFromObject(data['objEzsigntemplate']);
            }
            if (data.hasOwnProperty('objEzsigntemplatepackage')) {
                obj['objEzsigntemplatepackage'] = EzsigntemplatepackageResponseCompound.constructFromObject(data['objEzsigntemplatepackage']);
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
/**
     * Returns The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     * minimum: 0
     * @return {Number}
     */
    getIEzsignbulksenddocumentmappingOrder() {
        return this.iEzsignbulksenddocumentmappingOrder;
    }

    /**
     * Sets The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     * @param {Number} iEzsignbulksenddocumentmappingOrder The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
     */
    setIEzsignbulksenddocumentmappingOrder(iEzsignbulksenddocumentmappingOrder) {
        this['iEzsignbulksenddocumentmappingOrder'] = iEzsignbulksenddocumentmappingOrder;
    }
/**
     * @return {module:eZmaxAPI/model/EzsigntemplateResponseCompound}
     */
    getObjEzsigntemplate() {
        return this.objEzsigntemplate;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
     */
    setObjEzsigntemplate(objEzsigntemplate) {
        this['objEzsigntemplate'] = objEzsigntemplate;
    }
/**
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound}
     */
    getObjEzsigntemplatepackage() {
        return this.objEzsigntemplatepackage;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
     */
    setObjEzsigntemplatepackage(objEzsigntemplatepackage) {
        this['objEzsigntemplatepackage'] = objEzsigntemplatepackage;
    }

}

/**
 * The unique ID of the Ezsignbulksenddocumentmapping.
 * @member {Number} pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['pkiEzsignbulksenddocumentmappingID'] = undefined;

/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['fkiEzsignbulksendID'] = undefined;

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['fkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['fkiEzsigntemplateID'] = undefined;

/**
 * The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsignbulksenddocumentmappingOrder
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['iEzsignbulksenddocumentmappingOrder'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['objEzsigntemplate'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
 */
EzsignbulksenddocumentmappingResponseCompound.prototype['objEzsigntemplatepackage'] = undefined;


// Implement EzsignbulksenddocumentmappingResponse interface:
/**
 * The unique ID of the Ezsignbulksenddocumentmapping.
 * @member {Number} pkiEzsignbulksenddocumentmappingID
 */
EzsignbulksenddocumentmappingResponse.prototype['pkiEzsignbulksenddocumentmappingID'] = undefined;
/**
 * The unique ID of the Ezsignbulksend
 * @member {Number} fkiEzsignbulksendID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsignbulksendID'] = undefined;
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} fkiEzsigntemplatepackageID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsigntemplatepackageID'] = undefined;
/**
 * The unique ID of the Ezsigntemplate
 * @member {Number} fkiEzsigntemplateID
 */
EzsignbulksenddocumentmappingResponse.prototype['fkiEzsigntemplateID'] = undefined;
/**
 * The order in which the Ezsigntemplate or Ezsigntemplatepackage will be presented to the signatory in the Ezsignfolder.
 * @member {Number} iEzsignbulksenddocumentmappingOrder
 */
EzsignbulksenddocumentmappingResponse.prototype['iEzsignbulksenddocumentmappingOrder'] = undefined;
// Implement EzsignbulksenddocumentmappingResponseCompoundAllOf interface:
/**
 * @member {module:eZmaxAPI/model/EzsigntemplateResponseCompound} objEzsigntemplate
 */
EzsignbulksenddocumentmappingResponseCompoundAllOf.prototype['objEzsigntemplate'] = undefined;
/**
 * @member {module:eZmaxAPI/model/EzsigntemplatepackageResponseCompound} objEzsigntemplatepackage
 */
EzsignbulksenddocumentmappingResponseCompoundAllOf.prototype['objEzsigntemplatepackage'] = undefined;




export default EzsignbulksenddocumentmappingResponseCompound;

