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
import FieldEBrandingLogo from './FieldEBrandingLogo';
import MultilingualBrandingDescription from './MultilingualBrandingDescription';

/**
 * The BrandingRequest model module.
 * @module eZmaxAPI/model/BrandingRequest
 * @version 1.1.11
 */
class BrandingRequest {
    /**
     * Constructs a new <code>BrandingRequest</code>.
     * A Branding Object
     * @alias module:eZmaxAPI/model/BrandingRequest
     * @param objBrandingDescription {module:eZmaxAPI/model/MultilingualBrandingDescription} 
     * @param eBrandingLogo {module:eZmaxAPI/model/FieldEBrandingLogo} 
     * @param iBrandingColortext {Number} The color of the text. This is a RGB color converted into integer
     * @param iBrandingColortextlinkbox {Number} The color of the text in the link box. This is a RGB color converted into integer
     * @param iBrandingColortextbutton {Number} The color of the text in the button. This is a RGB color converted into integer
     * @param iBrandingColorbackground {Number} The color of the background. This is a RGB color converted into integer
     * @param iBrandingColorbackgroundbutton {Number} The color of the background of the button. This is a RGB color converted into integer
     * @param iBrandingColorbackgroundsmallbox {Number} The color of the background of the small box. This is a RGB color converted into integer
     * @param bBrandingIsactive {Boolean} Whether the Branding is active or not
     */
    constructor(objBrandingDescription, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive) { 
        
        BrandingRequest.initialize(this, objBrandingDescription, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objBrandingDescription, eBrandingLogo, iBrandingColortext, iBrandingColortextlinkbox, iBrandingColortextbutton, iBrandingColorbackground, iBrandingColorbackgroundbutton, iBrandingColorbackgroundsmallbox, bBrandingIsactive) { 
        obj['objBrandingDescription'] = objBrandingDescription;
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
     * Constructs a <code>BrandingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BrandingRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BrandingRequest} The populated <code>BrandingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BrandingRequest();

            if (data.hasOwnProperty('pkiBrandingID')) {
                obj['pkiBrandingID'] = ApiClient.convertToType(data['pkiBrandingID'], 'Number');
            }
            if (data.hasOwnProperty('objBrandingDescription')) {
                obj['objBrandingDescription'] = MultilingualBrandingDescription.constructFromObject(data['objBrandingDescription']);
            }
            if (data.hasOwnProperty('eBrandingLogo')) {
                obj['eBrandingLogo'] = FieldEBrandingLogo.constructFromObject(data['eBrandingLogo']);
            }
            if (data.hasOwnProperty('sBrandingBase64')) {
                obj['sBrandingBase64'] = ApiClient.convertToType(data['sBrandingBase64'], 'Blob');
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
     * Returns The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogo if you supply an image. If you select 'Default', the logo will be deleted and the default one will be used.
     * @return {Blob}
     */
    getSBrandingBase64() {
        return this.sBrandingBase64;
    }

    /**
     * Sets The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogo if you supply an image. If you select 'Default', the logo will be deleted and the default one will be used.
     * @param {Blob} sBrandingBase64 The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogo if you supply an image. If you select 'Default', the logo will be deleted and the default one will be used.
     */
    setSBrandingBase64(sBrandingBase64) {
        this['sBrandingBase64'] = sBrandingBase64;
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

/**
 * The unique ID of the Branding
 * @member {Number} pkiBrandingID
 */
BrandingRequest.prototype['pkiBrandingID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualBrandingDescription} objBrandingDescription
 */
BrandingRequest.prototype['objBrandingDescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEBrandingLogo} eBrandingLogo
 */
BrandingRequest.prototype['eBrandingLogo'] = undefined;

/**
 * The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogo if you supply an image. If you select 'Default', the logo will be deleted and the default one will be used.
 * @member {Blob} sBrandingBase64
 */
BrandingRequest.prototype['sBrandingBase64'] = undefined;

/**
 * The color of the text. This is a RGB color converted into integer
 * @member {Number} iBrandingColortext
 */
BrandingRequest.prototype['iBrandingColortext'] = undefined;

/**
 * The color of the text in the link box. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextlinkbox
 */
BrandingRequest.prototype['iBrandingColortextlinkbox'] = undefined;

/**
 * The color of the text in the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColortextbutton
 */
BrandingRequest.prototype['iBrandingColortextbutton'] = undefined;

/**
 * The color of the background. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackground
 */
BrandingRequest.prototype['iBrandingColorbackground'] = undefined;

/**
 * The color of the background of the button. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundbutton
 */
BrandingRequest.prototype['iBrandingColorbackgroundbutton'] = undefined;

/**
 * The color of the background of the small box. This is a RGB color converted into integer
 * @member {Number} iBrandingColorbackgroundsmallbox
 */
BrandingRequest.prototype['iBrandingColorbackgroundsmallbox'] = undefined;

/**
 * Whether the Branding is active or not
 * @member {Boolean} bBrandingIsactive
 */
BrandingRequest.prototype['bBrandingIsactive'] = undefined;






export default BrandingRequest;

