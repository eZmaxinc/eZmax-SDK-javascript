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
import FieldEBrandingLogo from './FieldEBrandingLogo';
import MultilingualBrandingDescription from './MultilingualBrandingDescription';

/**
 * The BrandingResponse model module.
 * @module eZmaxAPI/model/BrandingResponse
 * @version 1.1.18
 */
class BrandingResponse {
    /**
     * Constructs a new <code>BrandingResponse</code>.
     * A Branding Object
     * @alias module:eZmaxAPI/model/BrandingResponse
     * @param pkiBrandingID {Number} The unique ID of the Branding
     * @param objBrandingDescription {module:eZmaxAPI/model/MultilingualBrandingDescription} 
     * @param sBrandingDescriptionX {String} The Description of the Branding in the language of the requester
     * @param eBrandingLogo {module:eZmaxAPI/model/FieldEBrandingLogo} 
     * @param iBrandingColortext {Number} The color of the text. This is a RGB color converted into integer
     * @param iBrandingColortextlinkbox {Number} The color of the text in the link box. This is a RGB color converted into integer
     * @param iBrandingColortextbutton {Number} The color of the text in the button. This is a RGB color converted into integer
     * @param iBrandingColorbackground {Number} The color of the background. This is a RGB color converted into integer
     * @param iBrandingColorbackgroundbutton {Number} The color of the background of the button. This is a RGB color converted into integer
     * @param iBrandingColorbackgroundsmallbox {Number} The color of the background of the small box. This is a RGB color converted into integer
     * @param bBrandingIsactive {Boolean} Whether the Branding is active or not
     */
    constructor(pkiBrandingID, objBrandingDescription, sBrandingDescriptionX, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive) { 
        
        BrandingResponse.initialize(this, pkiBrandingID, objBrandingDescription, sBrandingDescriptionX, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBrandingID, objBrandingDescription, sBrandingDescriptionX, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive) { 
        obj['pkiBrandingID'] = pkiBrandingID;
        obj['objBrandingDescription'] = objBrandingDescription;
        obj['sBrandingDescriptionX'] = sBrandingDescriptionX;
        obj['eBrandingLogo'] = eBrandingLogo;
        obj['iBrandingColortext'] = iBrandingColortext;
        obj['iBrandingColortextlinkbox'] = iBrandingColortextlinkbox;
        obj['iBrandingColortextbutton'] = iBrandingColortextbutton;
        obj['iBrandingColorbackground'] = iBrandingColorbackground;
        obj['iBrandingColorbackgroundbutton'] = iBrandingColorbackgroundbutton;
        obj['iBrandingColorbackgroundsmallbox'] = iBrandingColorbackgroundsmallbox;
        obj['bBrandingIsactive'] = bBrandingIsactive;
    }

    /**
     * Constructs a <code>BrandingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingResponse} The populated <code>BrandingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingResponse();

            if (data.hasOwnProperty('pkiBrandingID')) {
                obj['pkiBrandingID'] = ApiClient.convertToType(data['pkiBrandingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEmailID')) {
                obj['fkiEmailID'] = ApiClient.convertToType(data['fkiEmailID'], 'Number');
            }
            if (data.hasOwnProperty('objBrandingDescription')) {
                obj['objBrandingDescription'] = MultilingualBrandingDescription.constructFromObject(data['objBrandingDescription']);
            }
            if (data.hasOwnProperty('sBrandingDescriptionX')) {
                obj['sBrandingDescriptionX'] = ApiClient.convertToType(data['sBrandingDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('sBrandingName')) {
                obj['sBrandingName'] = ApiClient.convertToType(data['sBrandingName'], 'String');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
            if (data.hasOwnProperty('eBrandingLogo')) {
                obj['eBrandingLogo'] = FieldEBrandingLogo.constructFromObject(data['eBrandingLogo']);
            }
            if (data.hasOwnProperty('iBrandingColortext')) {
                obj['iBrandingColortext'] = ApiClient.convertToType(data['iBrandingColortext'], 'Number');
            }
            if (data.hasOwnProperty('iBrandingColortextlinkbox')) {
                obj['iBrandingColortextlinkbox'] = ApiClient.convertToType(data['iBrandingColortextlinkbox'], 'Number');
            }
            if (data.hasOwnProperty('iBrandingColortextbutton')) {
                obj['iBrandingColortextbutton'] = ApiClient.convertToType(data['iBrandingColortextbutton'], 'Number');
            }
            if (data.hasOwnProperty('iBrandingColorbackground')) {
                obj['iBrandingColorbackground'] = ApiClient.convertToType(data['iBrandingColorbackground'], 'Number');
            }
            if (data.hasOwnProperty('iBrandingColorbackgroundbutton')) {
                obj['iBrandingColorbackgroundbutton'] = ApiClient.convertToType(data['iBrandingColorbackgroundbutton'], 'Number');
            }
            if (data.hasOwnProperty('iBrandingColorbackgroundsmallbox')) {
                obj['iBrandingColorbackgroundsmallbox'] = ApiClient.convertToType(data['iBrandingColorbackgroundsmallbox'], 'Number');
            }
            if (data.hasOwnProperty('bBrandingIsactive')) {
                obj['bBrandingIsactive'] = ApiClient.convertToType(data['bBrandingIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BrandingResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BrandingResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BrandingResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBrandingDescription`
        if (data['objBrandingDescription']) { // data not null
          MultilingualBrandingDescription.validateJSON(data['objBrandingDescription']);
        }
        // ensure the json data is a string
        if (data['sBrandingDescriptionX'] && !(typeof data['sBrandingDescriptionX'] === 'string' || data['sBrandingDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sBrandingDescriptionX` to be a primitive type in the JSON string but got " + data['sBrandingDescriptionX']);
        }
        // ensure the json data is a string
        if (data['sBrandingName'] && !(typeof data['sBrandingName'] === 'string' || data['sBrandingName'] instanceof String)) {
            throw new Error("Expected the field `sBrandingName` to be a primitive type in the JSON string but got " + data['sBrandingName']);
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Branding
     * minimum: 0
     * @return {Number}
     */
    getPkiBrandingID() {
        return this.pkiBrandingID;
    }

    /**
     * Sets The unique ID of the Branding
     * @param {Number} pkiBrandingID The unique ID of the Branding
     */
    setPkiBrandingID(pkiBrandingID) {
        this['pkiBrandingID'] = pkiBrandingID;
    }
/**
     * Returns The unique ID of the Email
     * minimum: 1
     * maximum: 16777215
     * @return {Number}
     */
    getFkiEmailID() {
        return this.fkiEmailID;
    }

    /**
     * Sets The unique ID of the Email
     * @param {Number} fkiEmailID The unique ID of the Email
     */
    setFkiEmailID(fkiEmailID) {
        this['fkiEmailID'] = fkiEmailID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualBrandingDescription}
     */
    getObjBrandingDescription() {
        return this.objBrandingDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualBrandingDescription} objBrandingDescription
     */
    setObjBrandingDescription(objBrandingDescription) {
        this['objBrandingDescription'] = objBrandingDescription;
    }
/**
     * Returns The Description of the Branding in the language of the requester
     * @return {String}
     */
    getSBrandingDescriptionX() {
        return this.sBrandingDescriptionX;
    }

    /**
     * Sets The Description of the Branding in the language of the requester
     * @param {String} sBrandingDescriptionX The Description of the Branding in the language of the requester
     */
    setSBrandingDescriptionX(sBrandingDescriptionX) {
        this['sBrandingDescriptionX'] = sBrandingDescriptionX;
    }
/**
     * Returns The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty
     * @return {String}
     */
    getSBrandingName() {
        return this.sBrandingName;
    }

    /**
     * Sets The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty
     * @param {String} sBrandingName The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty
     */
    setSBrandingName(sBrandingName) {
        this['sBrandingName'] = sBrandingName;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEBrandingLogo}
     */
    getEBrandingLogo() {
        return this.eBrandingLogo;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEBrandingLogo} eBrandingLogo
     */
    setEBrandingLogo(eBrandingLogo) {
        this['eBrandingLogo'] = eBrandingLogo;
    }
/**
     * Returns The color of the text. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColortext() {
        return this.iBrandingColortext;
    }

    /**
     * Sets The color of the text. This is a RGB color converted into integer
     * @param {Number} iBrandingColortext The color of the text. This is a RGB color converted into integer
     */
    setIBrandingColortext(iBrandingColortext) {
        this['iBrandingColortext'] = iBrandingColortext;
    }
/**
     * Returns The color of the text in the link box. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColortextlinkbox() {
        return this.iBrandingColortextlinkbox;
    }

    /**
     * Sets The color of the text in the link box. This is a RGB color converted into integer
     * @param {Number} iBrandingColortextlinkbox The color of the text in the link box. This is a RGB color converted into integer
     */
    setIBrandingColortextlinkbox(iBrandingColortextlinkbox) {
        this['iBrandingColortextlinkbox'] = iBrandingColortextlinkbox;
    }
/**
     * Returns The color of the text in the button. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColortextbutton() {
        return this.iBrandingColortextbutton;
    }

    /**
     * Sets The color of the text in the button. This is a RGB color converted into integer
     * @param {Number} iBrandingColortextbutton The color of the text in the button. This is a RGB color converted into integer
     */
    setIBrandingColortextbutton(iBrandingColortextbutton) {
        this['iBrandingColortextbutton'] = iBrandingColortextbutton;
    }
/**
     * Returns The color of the background. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColorbackground() {
        return this.iBrandingColorbackground;
    }

    /**
     * Sets The color of the background. This is a RGB color converted into integer
     * @param {Number} iBrandingColorbackground The color of the background. This is a RGB color converted into integer
     */
    setIBrandingColorbackground(iBrandingColorbackground) {
        this['iBrandingColorbackground'] = iBrandingColorbackground;
    }
/**
     * Returns The color of the background of the button. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColorbackgroundbutton() {
        return this.iBrandingColorbackgroundbutton;
    }

    /**
     * Sets The color of the background of the button. This is a RGB color converted into integer
     * @param {Number} iBrandingColorbackgroundbutton The color of the background of the button. This is a RGB color converted into integer
     */
    setIBrandingColorbackgroundbutton(iBrandingColorbackgroundbutton) {
        this['iBrandingColorbackgroundbutton'] = iBrandingColorbackgroundbutton;
    }
/**
     * Returns The color of the background of the small box. This is a RGB color converted into integer
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getIBrandingColorbackgroundsmallbox() {
        return this.iBrandingColorbackgroundsmallbox;
    }

    /**
     * Sets The color of the background of the small box. This is a RGB color converted into integer
     * @param {Number} iBrandingColorbackgroundsmallbox The color of the background of the small box. This is a RGB color converted into integer
     */
    setIBrandingColorbackgroundsmallbox(iBrandingColorbackgroundsmallbox) {
        this['iBrandingColorbackgroundsmallbox'] = iBrandingColorbackgroundsmallbox;
    }
/**
     * Returns Whether the Branding is active or not
     * @return {Boolean}
     */
    getBBrandingIsactive() {
        return this.bBrandingIsactive;
    }

    /**
     * Sets Whether the Branding is active or not
     * @param {Boolean} bBrandingIsactive Whether the Branding is active or not
     */
    setBBrandingIsactive(bBrandingIsactive) {
        this['bBrandingIsactive'] = bBrandingIsactive;
    }

}

BrandingResponse.RequiredProperties = ["pkiBrandingID", "objBrandingDescription", "sBrandingDescriptionX", "eBrandingLogo", "iBrandingColortext", "iBrandingColortextlinkbox", "iBrandingColortextbutton", "iBrandingColorbackground", "iBrandingColorbackgroundbutton", "iBrandingColorbackgroundsmallbox", "bBrandingIsactive"];

/**
 * The unique ID of the Branding
 * @member {Number} pkiBrandingID
 */
BrandingResponse.prototype['pkiBrandingID'] = undefined;

/**
 * The unique ID of the Email
 * @member {Number} fkiEmailID
 */
BrandingResponse.prototype['fkiEmailID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualBrandingDescription} objBrandingDescription
 */
BrandingResponse.prototype['objBrandingDescription'] = undefined;

/**
 * The Description of the Branding in the language of the requester
 * @member {String} sBrandingDescriptionX
 */
BrandingResponse.prototype['sBrandingDescriptionX'] = undefined;

/**
 * The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty
 * @member {String} sBrandingName
 */
BrandingResponse.prototype['sBrandingName'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
BrandingResponse.prototype['sEmailAddress'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEBrandingLogo} eBrandingLogo
 */
BrandingResponse.prototype['eBrandingLogo'] = undefined;

/**
 * The color of the text. This is a RGB color converted into integer
 * @member {Number} iBrandingColortext
 */
BrandingResponse.prototype['iBrandingColortext'] = undefined;

/**
 * The color of the text in the link box. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextlinkbox
 */
BrandingResponse.prototype['iBrandingColortextlinkbox'] = undefined;

/**
 * The color of the text in the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextbutton
 */
BrandingResponse.prototype['iBrandingColortextbutton'] = undefined;

/**
 * The color of the background. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackground
 */
BrandingResponse.prototype['iBrandingColorbackground'] = undefined;

/**
 * The color of the background of the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundbutton
 */
BrandingResponse.prototype['iBrandingColorbackgroundbutton'] = undefined;

/**
 * The color of the background of the small box. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundsmallbox
 */
BrandingResponse.prototype['iBrandingColorbackgroundsmallbox'] = undefined;

/**
 * Whether the Branding is active or not
 * @member {Boolean} bBrandingIsactive
 */
BrandingResponse.prototype['bBrandingIsactive'] = undefined;






export default BrandingResponse;

