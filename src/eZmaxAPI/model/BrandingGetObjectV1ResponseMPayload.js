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
import BrandingResponseCompound from './BrandingResponseCompound';
import FieldEBrandingLogo from './FieldEBrandingLogo';
import MultilingualBrandingDescription from './MultilingualBrandingDescription';

/**
 * The BrandingGetObjectV1ResponseMPayload model module.
 * @module eZmaxAPI/model/BrandingGetObjectV1ResponseMPayload
 * @version 1.1.14
 */
class BrandingGetObjectV1ResponseMPayload {
    /**
     * Constructs a new <code>BrandingGetObjectV1ResponseMPayload</code>.
     * Payload for GET /1/object/branding/{pkiBrandingID}
     * @alias module:eZmaxAPI/model/BrandingGetObjectV1ResponseMPayload
     * @implements module:eZmaxAPI/model/BrandingResponseCompound
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
        BrandingResponseCompound.initialize(this, pkiBrandingID, objBrandingDescription, sBrandingDescriptionX, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive);
        BrandingGetObjectV1ResponseMPayload.initialize(this, pkiBrandingID, objBrandingDescription, sBrandingDescriptionX, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive);
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
     * Constructs a <code>BrandingGetObjectV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingGetObjectV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingGetObjectV1ResponseMPayload} The populated <code>BrandingGetObjectV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingGetObjectV1ResponseMPayload();
            BrandingResponseCompound.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiBrandingID')) {
                obj['pkiBrandingID'] = ApiClient.convertToType(data['pkiBrandingID'], 'Number');
            }
            if (data.hasOwnProperty('objBrandingDescription')) {
                obj['objBrandingDescription'] = MultilingualBrandingDescription.constructFromObject(data['objBrandingDescription']);
            }
            if (data.hasOwnProperty('sBrandingDescriptionX')) {
                obj['sBrandingDescriptionX'] = ApiClient.convertToType(data['sBrandingDescriptionX'], 'String');
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
            if (data.hasOwnProperty('sBrandingLogourl')) {
                obj['sBrandingLogourl'] = ApiClient.convertToType(data['sBrandingLogourl'], 'String');
            }
        }
        return obj;
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
/**
     * Returns The url of the picture used as logo in the Branding
     * @return {String}
     */
    getSBrandingLogourl() {
        return this.sBrandingLogourl;
    }

    /**
     * Sets The url of the picture used as logo in the Branding
     * @param {String} sBrandingLogourl The url of the picture used as logo in the Branding
     */
    setSBrandingLogourl(sBrandingLogourl) {
        this['sBrandingLogourl'] = sBrandingLogourl;
    }

}

/**
 * The unique ID of the Branding
 * @member {Number} pkiBrandingID
 */
BrandingGetObjectV1ResponseMPayload.prototype['pkiBrandingID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualBrandingDescription} objBrandingDescription
 */
BrandingGetObjectV1ResponseMPayload.prototype['objBrandingDescription'] = undefined;

/**
 * The Description of the Branding in the language of the requester
 * @member {String} sBrandingDescriptionX
 */
BrandingGetObjectV1ResponseMPayload.prototype['sBrandingDescriptionX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEBrandingLogo} eBrandingLogo
 */
BrandingGetObjectV1ResponseMPayload.prototype['eBrandingLogo'] = undefined;

/**
 * The color of the text. This is a RGB color converted into integer
 * @member {Number} iBrandingColortext
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColortext'] = undefined;

/**
 * The color of the text in the link box. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextlinkbox
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColortextlinkbox'] = undefined;

/**
 * The color of the text in the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextbutton
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColortextbutton'] = undefined;

/**
 * The color of the background. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackground
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColorbackground'] = undefined;

/**
 * The color of the background of the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundbutton
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColorbackgroundbutton'] = undefined;

/**
 * The color of the background of the small box. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundsmallbox
 */
BrandingGetObjectV1ResponseMPayload.prototype['iBrandingColorbackgroundsmallbox'] = undefined;

/**
 * Whether the Branding is active or not
 * @member {Boolean} bBrandingIsactive
 */
BrandingGetObjectV1ResponseMPayload.prototype['bBrandingIsactive'] = undefined;

/**
 * The url of the picture used as logo in the Branding
 * @member {String} sBrandingLogourl
 */
BrandingGetObjectV1ResponseMPayload.prototype['sBrandingLogourl'] = undefined;


// Implement BrandingResponseCompound interface:
/**
 * The unique ID of the Branding
 * @member {Number} pkiBrandingID
 */
BrandingResponseCompound.prototype['pkiBrandingID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualBrandingDescription} objBrandingDescription
 */
BrandingResponseCompound.prototype['objBrandingDescription'] = undefined;
/**
 * The Description of the Branding in the language of the requester
 * @member {String} sBrandingDescriptionX
 */
BrandingResponseCompound.prototype['sBrandingDescriptionX'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEBrandingLogo} eBrandingLogo
 */
BrandingResponseCompound.prototype['eBrandingLogo'] = undefined;
/**
 * The color of the text. This is a RGB color converted into integer
 * @member {Number} iBrandingColortext
 */
BrandingResponseCompound.prototype['iBrandingColortext'] = undefined;
/**
 * The color of the text in the link box. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextlinkbox
 */
BrandingResponseCompound.prototype['iBrandingColortextlinkbox'] = undefined;
/**
 * The color of the text in the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextbutton
 */
BrandingResponseCompound.prototype['iBrandingColortextbutton'] = undefined;
/**
 * The color of the background. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackground
 */
BrandingResponseCompound.prototype['iBrandingColorbackground'] = undefined;
/**
 * The color of the background of the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundbutton
 */
BrandingResponseCompound.prototype['iBrandingColorbackgroundbutton'] = undefined;
/**
 * The color of the background of the small box. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundsmallbox
 */
BrandingResponseCompound.prototype['iBrandingColorbackgroundsmallbox'] = undefined;
/**
 * Whether the Branding is active or not
 * @member {Boolean} bBrandingIsactive
 */
BrandingResponseCompound.prototype['bBrandingIsactive'] = undefined;
/**
 * The url of the picture used as logo in the Branding
 * @member {String} sBrandingLogourl
 */
BrandingResponseCompound.prototype['sBrandingLogourl'] = undefined;




export default BrandingGetObjectV1ResponseMPayload;

