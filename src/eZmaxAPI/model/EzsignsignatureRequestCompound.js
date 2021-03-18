/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.37
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignsignatureRequest from './EzsignsignatureRequest';

/**
 * The EzsignsignatureRequestCompound model module.
 * @module eZmaxAPI/model/EzsignsignatureRequestCompound
 * @version 1.0.37
 */
class EzsignsignatureRequestCompound {
    /**
     * Constructs a new <code>EzsignsignatureRequestCompound</code>.
     * An Ezsignsignature Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EzsignsignatureRequestCompound
     * @implements module:eZmaxAPI/model/EzsignsignatureRequest
     * @param fkiEzsignfoldersignerassociationID {Number} A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
     * @param iEzsignpagePagenumber {Number} The page number in the document where to apply the signature
     * @param iEzsignsignatureX {Number} The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
     * @param iEzsignsignatureY {Number} The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
     * @param iEzsignsignatureStep {Number} The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     * @param eEzsignsignatureType {module:eZmaxAPI/model/EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum} The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
     * @param fkiEzsigndocumentID {Number} A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
     */
    constructor(fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID) { 
        EzsignsignatureRequest.initialize(this, fkiEzsignfoldersignerassociationID, iEzsignpagePagenumber, iEzsignsignatureX, iEzsignsignatureY, iEzsignsignatureStep, eEzsignsignatureType, fkiEzsigndocumentID);
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
            EzsignsignatureRequest.constructFromObject(data, obj);

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
                obj['eEzsignsignatureType'] = ApiClient.convertToType(data['eEzsignsignatureType'], 'String');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
     * @param {Number} fkiEzsignfoldersignerassociationID A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The page number in the document where to apply the signature
     * @return {Number}
     */
    getIEzsignpagePagenumber() {
        return this.iEzsignpagePagenumber;
    }

    /**
     * Sets The page number in the document where to apply the signature
     * @param {Number} iEzsignpagePagenumber The page number in the document where to apply the signature
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
     * Returns The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     * @return {Number}
     */
    getIEzsignsignatureStep() {
        return this.iEzsignsignatureStep;
    }

    /**
     * Sets The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     * @param {Number} iEzsignsignatureStep The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
     */
    setIEzsignsignatureStep(iEzsignsignatureStep) {
        this['iEzsignsignatureStep'] = iEzsignsignatureStep;
    }
/**
     * Returns The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
     * @return {module:eZmaxAPI/model/EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum}
     */
    getEEzsignsignatureType() {
        return this.eEzsignsignatureType;
    }

    /**
     * Sets The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
     * @param {module:eZmaxAPI/model/EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum} eEzsignsignatureType The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
     */
    setEEzsignsignatureType(eEzsignsignatureType) {
        this['eEzsignsignatureType'] = eEzsignsignatureType;
    }
/**
     * Returns A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
     * @return {Number}
     */
    getFkiEzsigndocumentID() {
        return this.fkiEzsigndocumentID;
    }

    /**
     * Sets A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
     * @param {Number} fkiEzsigndocumentID A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
     */
    setFkiEzsigndocumentID(fkiEzsigndocumentID) {
        this['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
    }

}

/**
 * A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureRequestCompound.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The page number in the document where to apply the signature
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
 * The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureRequestCompound.prototype['iEzsignsignatureStep'] = undefined;

/**
 * The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
 * @member {module:eZmaxAPI/model/EzsignsignatureRequestCompound.EEzsignsignatureTypeEnum} eEzsignsignatureType
 */
EzsignsignatureRequestCompound.prototype['eEzsignsignatureType'] = undefined;

/**
 * A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureRequestCompound.prototype['fkiEzsigndocumentID'] = undefined;


// Implement EzsignsignatureRequest interface:
/**
 * A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
EzsignsignatureRequest.prototype['fkiEzsignfoldersignerassociationID'] = undefined;
/**
 * The page number in the document where to apply the signature
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
 * The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
 * @member {Number} iEzsignsignatureStep
 */
EzsignsignatureRequest.prototype['iEzsignsignatureStep'] = undefined;
/**
 * The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
 * @member {module:eZmaxAPI/model/EzsignsignatureRequest.EEzsignsignatureTypeEnum} eEzsignsignatureType
 */
EzsignsignatureRequest.prototype['eEzsignsignatureType'] = undefined;
/**
 * A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
 * @member {Number} fkiEzsigndocumentID
 */
EzsignsignatureRequest.prototype['fkiEzsigndocumentID'] = undefined;



/**
 * Allowed values for the <code>eEzsignsignatureType</code> property.
 * @enum {String}
 * @readonly
 */
EzsignsignatureRequestCompound['EEzsignsignatureTypeEnum'] = {

    /**
     * value: "Acknowledgement"
     * @const
     */
    "Acknowledgement": "Acknowledgement",

    /**
     * value: "Handwritten"
     * @const
     */
    "Handwritten": "Handwritten",

    /**
     * value: "Initials"
     * @const
     */
    "Initials": "Initials",

    /**
     * value: "Name"
     * @const
     */
    "Name": "Name"
};



export default EzsignsignatureRequestCompound;

