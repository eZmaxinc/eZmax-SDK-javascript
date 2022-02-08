/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignatureRequest from './EzsignsignatureRequest';
import EzsignsignatureRequestCompoundAllOf from './EzsignsignatureRequestCompoundAllOf';
import EzsignsignaturecustomdateRequest from './EzsignsignaturecustomdateRequest';
import FieldEEzsignsignatureType from './FieldEEzsignsignatureType';

/**
 * The EzsignsignatureRequestCompound model module.
 * @module eZmaxAPI/model/EzsignsignatureRequestCompound
 * @version 1.1.4
 */
class EzsignsignatureRequestCompound {
    /**
     * Constructs a new <code>EzsignsignatureRequestCompound</code>.
     * An Ezsignsignature Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignatureRequestCompound
     * @implements module:eZmaxAPI/model/EzsignsignatureRequestCompoundAllOf
     * @implements module:eZmaxAPI/model/EzsignsignatureRequest
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param iEzsignsignatureX {Number} The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignatureY {Number} The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignsignatureStep {Number} The step when the Ezsignsigner will be invited to sign or fill form fields
     * @param eEzsignsignatureType {module:eZmaxAPI/model/FieldEEzsignsignatureType} 
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     */
    constructor(fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID) { 
        EzsignsignatureRequestCompoundAllOf.initialize(this);EzsignsignatureRequest.initialize(this, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID);
        EzsignsignatureRequestCompound.initialize(this, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID) { 
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['iEzsignsignatureX'] = iEzsignsignatureX;
        obj['iEzsignsignatureY'] = iEzsignsignatureY;
        obj['iEzsignsignatureStep'] = iEzsignsignatureStep;
        obj['eEzsignsignatureType'] = eEzsignsignatureType;
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
    }

    /**
     * Constructs a <code>EzsignsignatureRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureRequestCompound} The populated <code>EzsignsignatureRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureRequestCompound();
            EzsignsignatureRequestCompoundAllOf.constructFromObject(data, obj);
            EzsignsignatureRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('bEzsignsignatureCustomdate')) {
                obj['bEzsignsignatureCustomdate'] = ApiClient.convertToType(data['bEzsignsignatureCustomdate'], 'Boolean');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturecustomdate')) {
                obj['a_objEzsignsignaturecustomdate'] = ApiClient.convertToType(data['a_objEzsignsignaturecustomdate'], [EzsignsignaturecustomdateRequest]);
            }
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
        }
        return obj;
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
     * @return {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateRequest>}
     */
    getAObjEzsignsignaturecustomdate() {
        return this.a_objEzsignsignaturecustomdate;
    }

    /**
     * Sets An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     * @param {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateRequest>} a_objEzsignsignaturecustomdate An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
     */
    setAObjEzsignsignaturecustomdate(a_objEzsignsignaturecustomdate) {
        this['a_objEzsignsignaturecustomdate'] = a_objEzsignsignaturecustomdate;
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
     * Returns The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @return {Number}
     */
    getIEzsignsignatureX() {
        return this.iEzsignsignatureX;
    }

    /**
     * Sets The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param {Number} iEzsignsignatureX The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
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
     * Returns The step when the Ezsignsigner will be invited to sign or fill form fields
     * @return {Number}
     */
    getIEzsignsignatureStep() {
        return this.iEzsignsignatureStep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to sign or fill form fields
     * @param {Number} iEzsignsignatureStep The step when the Ezsignsigner will be invited to sign or fill form fields
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

}

/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureRequestCompound.prototype['bEzsignsignatureCustomdate'] = undefined;

/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateRequest>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureRequestCompound.prototype['a_objEzsignsignaturecustomdate'] = undefined;

/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureRequestCompound.prototype['pkiEzsignsignatureID'] = undefined;

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureRequestCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureRequestCompound.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureRequestCompound.prototype['iEzsignsignatureX'] = undefined;

/**
 * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureRequestCompound.prototype['iEzsignsignatureY'] = undefined;

/**
 * The step when the Ezsignsigner will be invited to sign or fill form fields
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureRequestCompound.prototype['iEzsignsignatureStep'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureRequestCompound.prototype['eEzsignsignatureType'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureRequestCompound.prototype['fkiEzsigndocumentID'] = undefined;


// Implement EzsignsignatureRequestCompoundAllOf interface:
/**
 * Whether the Ezsignsignature has a custom date format or not. (Only possible when eEzsignsignatureType is \"Name\" or \"Handwritten\")
 * @member {Boolean} bEzsignsignatureCustomdate
 */
EzsignsignatureRequestCompoundAllOf.prototype['bEzsignsignatureCustomdate'] = undefined;
/**
 * An array of custom date blocks that will be filled at the time of signature.  Can only be used if bEzsignsignatureCustomdate is true.  Use an empty array if you don't want to have a date at all.
 * @member {Array.<module:eZmaxAPI/model/EzsignsignaturecustomdateRequest>} a_objEzsignsignaturecustomdate
 */
EzsignsignatureRequestCompoundAllOf.prototype['a_objEzsignsignaturecustomdate'] = undefined;
// Implement EzsignsignatureRequest interface:
/**
 * The unique ID of the Ezsignsignature
 * @member {Number} pkiEzsignsignatureID
 */
EzsignsignatureRequest.prototype['pkiEzsignsignatureID'] = undefined;
/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignsignatureRequest.prototype['iEzsignpagePagenumber'] = undefined;
/**
 * The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
 * @member {Number} iEzsignsignatureX
 */
EzsignsignatureRequest.prototype['iEzsignsignatureX'] = undefined;
/**
 * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
 * @member {Number} iEzsignsignatureY
 */
EzsignsignatureRequest.prototype['iEzsignsignatureY'] = undefined;
/**
 * The step when the Ezsignsigner will be invited to sign or fill form fields
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureRequest.prototype['iEzsignsignatureStep'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsignsignatureType} eEzsignsignatureType
 */
EzsignsignatureRequest.prototype['eEzsignsignatureType'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureRequest.prototype['fkiEzsigndocumentID'] = undefined;




export default EzsignsignatureRequestCompound;

