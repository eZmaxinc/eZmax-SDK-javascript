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
import EzsignsignatureResponse from './EzsignsignatureResponse';
import EzsignsignatureResponseCompoundAllOf from './EzsignsignatureResponseCompoundAllOf';
import EzsignsignaturecustomdateResponseCompound from './EzsignsignaturecustomdateResponseCompound';
import FieldEEzsignsignatureType from './FieldEEzsignsignatureType';

/**
 * The EzsignsignatureResponseCompound model module.
 * @module eZmaxAPI/model/EzsignsignatureResponseCompound
 * @version 1.1.7
 */
class EzsignsignatureResponseCompound {
    /**
     * Constructs a new <code>EzsignsignatureResponseCompound</code>.
     * An Ezsignsignature Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignatureResponseCompound
     * @implements module:eZmaxAPI/model/EzsignsignatureResponse
     * @implements module:eZmaxAPI/model/EzsignsignatureResponseCompoundAllOf
     * @param pkiEzsignsignatureID {Number} The unique ID of the Ezsignsignature
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param iEzsignsignatureX {Number} The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignatureY {Number} The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignsignatureStep {Number} The step when the Ezsignsigner will be invited to sign
     * @param eEzsignsignatureType {module:eZmaxAPI/model/FieldEEzsignsignatureType} 
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     */
    constructor(pkiEzsignsignatureID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID) { 
        EzsignsignatureResponse.initialize(this, pkiEzsignsignatureID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID);EzsignsignatureResponseCompoundAllOf.initialize(this);
        EzsignsignatureResponseCompound.initialize(this, pkiEzsignsignatureID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignsignatureID, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID) { 
        obj['pkiEzsignsignatureID'] = pkiEzsignsignatureID;
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['iEzsignsignatureX'] = iEzsignsignatureX;
        obj['iEzsignsignatureY'] = iEzsignsignatureY;
        obj['iEzsignsignatureStep'] = iEzsignsignatureStep;
        obj['eEzsignsignatureType'] = eEzsignsignatureType;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
    }

    /**
     * Constructs a <code>EzsignsignatureResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureResponseCompound} The populated <code>EzsignsignatureResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureResponseCompound();
            EzsignsignatureResponse.constructFromObject(data, obj);
            EzsignsignatureResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsignsignatureID')) {
                obj['pkiEzsignsignatureID'] = ApiClient.convertToType(data['pkiEzsignsignatureID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpagePagenumber')) {
                obj['iEzsignpagePagenumber'] = ApiClient.convertToType(data['iEzsignpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureX')) {
                obj['iEzsignsignatureX'] = ApiClient.convertToType(data['iEzsignsignatureX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureY')) {
                obj['iEzsignsignatureY'] = ApiClient.convertToType(data['iEzsignsignatureY'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignatureStep')) {
                obj['iEzsignsignatureStep'] = ApiClient.convertToType(data['iEzsignsignatureStep'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignsignatureType')) {
                obj['eEzsignsignatureType'] = FieldEEzsignsignatureType.constructFromObject(data['eEzsignsignatureType']);
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('bEzsignsignatureCustomdate')) {
                obj['bEzsignsignatureCustomdate'] = ApiClient.convertToType(data['bEzsignsignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturecustomdate')) {
                obj['a_objEzsignsignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsignsignaturecustomdate'], [EzsignsignaturecustomdateResponseCompound]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignsignature
     * @return {Number}
     */
    getPkiEzsignsignatureID() {
        return this.pkiEzsignsignatureID;
    }

    /**
     * Sets The unique ID of the Ezsignsignature
     * @param {Number} pkiEzsignsignatureID The unique ID of the Ezsignsignature
     */
    setPkiEzsignsignatureID(pkiEzsignsignatureID) {
        this['pkiEzsignsignatureID'] = pkiEzsignsignatureID;
    }
/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The page number in the Ezsigndocument
     * @return {Number}
     */
    getIEzsignpagePagenumber() {
        return this.iEzsignpagePagenumber;
    }

    /**
     * Sets The page number in the Ezsigndocument
     * @param {Number} iEzsignpagePagenumber The page number in the Ezsigndocument
     */
    setIEzsignpagePagenumber(iEzsignpagePagenumber) {
        this['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
    }
/**
     * Returns The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @return {Number}
     */
    getIEzsignsignatureX() {
        return this.iEzsignsignatureX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignsignatureX The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     */
    setIEzsignsignatureX(iEzsignsignatureX) {
        this['iEzsignsignatureX'] = iEzsignsignatureX;
    }
/**
     * Returns The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @return {Number}
     */
    getIEzsignsignatureY() {
        return this.iEzsignsignatureY;
    }

    /**
     * Sets The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param {Number} iEzsignsignatureY The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     */
    setIEzsignsignatureY(iEzsignsignatureY) {
        this['iEzsignsignatureY'] = iEzsignsignatureY;
    }
/**
     * Returns The step when the Ezsignsigner will be invited to sign
     * @return {Number}
     */
    getIEzsignsignatureStep() {
        return this.iEzsignsignatureStep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to sign
     * @param {Number} iEzsignsignatureStep The step when the Ezsignsigner will be invited to sign
     */
    setIEzsignsignatureStep(iEzsignsignatureStep) {
        this['iEzsignsignatureStep'] = iEzsignsignatureStep;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignsignatureType}
     */
    getEEzsignsignatureType() {
        return this.eEzsignsignatureType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
     */
    setEEzsignsignatureType(eEzsignsignatureType) {
        this['eEzsignsignatureType'] = eEzsignsignatureType;
    }
/**
     * Returns The unique ID of the Ezsigndocument
     * @return {Number}
     */
    getFkiEzsigndocumentID() {
        return this.fkiEzsigndocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigndocument
     * @param {Number} fkiEzsigndocumentID The unique ID of the Ezsigndocument
     */
    setFkiEzsigndocumentID(fkiEzsigndocumentID) {
        this['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
    }
/**
     * Returns Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     * @return {Boolean}
     */
    getBEzsignsignatureCustomdate() {
        return this.bEzsignsignatureCustomdate;
    }

    /**
     * Sets Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     * @param {Boolean} bEzsignsignatureCustomdate Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
     */
    setBEzsignsignatureCustomdate(bEzsignsignatureCustomdate) {
        this['bEzsignsignatureCustomdate'] = bEzsignsignatureCustomdate;
    }
/**
     * Returns An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @return {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>}
     */
    getAObjEzsignsignaturecustomdate() {
        return this.a_objEzsignsignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsignsignaturecustomdate(a_objEzsignsignaturecustomdate) {
        this['a_objEzsignsignaturecustomdate'] = a_objEzsignsignaturecustomdate;
    }

}

/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureResponseCompound.prototype['pkiEzsignsignatureID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureResponseCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureResponseCompound.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureY'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to sign
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureResponseCompound.prototype['iEzsignsignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureResponseCompound.prototype['eEzsignsignatureType'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureResponseCompound.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureResponseCompound.prototype['bEzsignsignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureResponseCompound.prototype['a_objEzsignsignaturecustomdate'] = undefined;


// Implement EzsignsignatureResponse interface:
/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureResponse.prototype['pkiEzsignsignatureID'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureResponse.prototype['fkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureResponse.prototype['iEzsignpagePagenumber'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the Ezsignsignature on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the Ezsignsignature 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureResponse.prototype['iEzsignsignatureX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureResponse.prototype['iEzsignsignatureY'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to sign
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureResponse.prototype['iEzsignsignatureStep'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureResponse.prototype['eEzsignsignatureType'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureResponse.prototype['fkiEzsigndocumentID'] = undefined;
// Implement EzsignsignatureResponseCompoundAllOf interface:
/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureResponseCompoundAllOf.prototype['bEzsignsignatureCustomdate'] = undefined;
/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateResponseCompound>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureResponseCompoundAllOf.prototype['a_objEzsignsignaturecustomdate'] = undefined;




export default EzsignsignatureResponseCompound;

