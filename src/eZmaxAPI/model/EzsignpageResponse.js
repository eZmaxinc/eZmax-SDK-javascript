/**
 * eZmax API Definition (Full)
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

/**
 * The EzsignpageResponse model module.
 * @module eZmaxAPI/model/EzsignpageResponse
 * @version 1.1.7
 */
class EzsignpageResponse {
    /**
     * Constructs a new <code>EzsignpageResponse</code>.
     * An Ezsignpage Object
     * @alias module:eZmaxAPI/model/EzsignpageResponse
     * @param pkiEzsignpageID {Number} The unique ID of the Ezsignpage
     * @param iEzsignpageWidthimage {Number} The Width of the page's image in pixels calculated at 100 DPI
     * @param iEzsignpageHeightimage {Number} The Height of the page's image in pixels calculated at 100 DPI
     * @param iEzsignpageWidthpdf {Number} The Width of the page in points calculated at 72 DPI
     * @param iEzsignpageHeightpdf {Number} The Height of the page in points calculated at 72 DPI
     * @param iEzsignpagePagenumber {Number} The page number in the Ezsigndocument
     * @param sImageUrl {String} The Url to the Ezsignpage's rasterized image.  Url will expire after 5 minutes.
     */
    constructor(pkiEzsignpageID, iEzsignpageWidthimage, iEzsignpageHeightimage, iEzsignpageWidthpdf, iEzsignpageHeightpdf, iEzsignpagePagenumber, sImageUrl) { 
        
        EzsignpageResponse.initialize(this, pkiEzsignpageID, iEzsignpageWidthimage, iEzsignpageHeightimage, iEzsignpageWidthpdf, iEzsignpageHeightpdf, iEzsignpagePagenumber, sImageUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignpageID, iEzsignpageWidthimage, iEzsignpageHeightimage, iEzsignpageWidthpdf, iEzsignpageHeightpdf, iEzsignpagePagenumber, sImageUrl) { 
        obj['pkiEzsignpageID'] = pkiEzsignpageID;
        obj['iEzsignpageWidthimage'] = iEzsignpageWidthimage;
        obj['iEzsignpageHeightimage'] = iEzsignpageHeightimage;
        obj['iEzsignpageWidthpdf'] = iEzsignpageWidthpdf;
        obj['iEzsignpageHeightpdf'] = iEzsignpageHeightpdf;
        obj['iEzsignpagePagenumber'] = iEzsignpagePagenumber;
        obj['sImageUrl'] = sImageUrl;
    }

    /**
     * Constructs a <code>EzsignpageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignpageResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignpageResponse} The populated <code>EzsignpageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignpageResponse();

            if (data.hasOwnProperty('pkiEzsignpageID')) {
                obj['pkiEzsignpageID'] = ApiClient.convertToType(data['pkiEzsignpageID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpageWidthimage')) {
                obj['iEzsignpageWidthimage'] = ApiClient.convertToType(data['iEzsignpageWidthimage'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpageHeightimage')) {
                obj['iEzsignpageHeightimage'] = ApiClient.convertToType(data['iEzsignpageHeightimage'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpageWidthpdf')) {
                obj['iEzsignpageWidthpdf'] = ApiClient.convertToType(data['iEzsignpageWidthpdf'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpageHeightpdf')) {
                obj['iEzsignpageHeightpdf'] = ApiClient.convertToType(data['iEzsignpageHeightpdf'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignpagePagenumber')) {
                obj['iEzsignpagePagenumber'] = ApiClient.convertToType(data['iEzsignpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('sImageUrl')) {
                obj['sImageUrl'] = ApiClient.convertToType(data['sImageUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignpage
     * @return {Number}
     */
    getPkiEzsignpageID() {
        return this.pkiEzsignpageID;
    }

    /**
     * Sets The unique ID of the Ezsignpage
     * @param {Number} pkiEzsignpageID The unique ID of the Ezsignpage
     */
    setPkiEzsignpageID(pkiEzsignpageID) {
        this['pkiEzsignpageID'] = pkiEzsignpageID;
    }
/**
     * Returns The Width of the page's image in pixels calculated at 100 DPI
     * @return {Number}
     */
    getIEzsignpageWidthimage() {
        return this.iEzsignpageWidthimage;
    }

    /**
     * Sets The Width of the page's image in pixels calculated at 100 DPI
     * @param {Number} iEzsignpageWidthimage The Width of the page's image in pixels calculated at 100 DPI
     */
    setIEzsignpageWidthimage(iEzsignpageWidthimage) {
        this['iEzsignpageWidthimage'] = iEzsignpageWidthimage;
    }
/**
     * Returns The Height of the page's image in pixels calculated at 100 DPI
     * @return {Number}
     */
    getIEzsignpageHeightimage() {
        return this.iEzsignpageHeightimage;
    }

    /**
     * Sets The Height of the page's image in pixels calculated at 100 DPI
     * @param {Number} iEzsignpageHeightimage The Height of the page's image in pixels calculated at 100 DPI
     */
    setIEzsignpageHeightimage(iEzsignpageHeightimage) {
        this['iEzsignpageHeightimage'] = iEzsignpageHeightimage;
    }
/**
     * Returns The Width of the page in points calculated at 72 DPI
     * @return {Number}
     */
    getIEzsignpageWidthpdf() {
        return this.iEzsignpageWidthpdf;
    }

    /**
     * Sets The Width of the page in points calculated at 72 DPI
     * @param {Number} iEzsignpageWidthpdf The Width of the page in points calculated at 72 DPI
     */
    setIEzsignpageWidthpdf(iEzsignpageWidthpdf) {
        this['iEzsignpageWidthpdf'] = iEzsignpageWidthpdf;
    }
/**
     * Returns The Height of the page in points calculated at 72 DPI
     * @return {Number}
     */
    getIEzsignpageHeightpdf() {
        return this.iEzsignpageHeightpdf;
    }

    /**
     * Sets The Height of the page in points calculated at 72 DPI
     * @param {Number} iEzsignpageHeightpdf The Height of the page in points calculated at 72 DPI
     */
    setIEzsignpageHeightpdf(iEzsignpageHeightpdf) {
        this['iEzsignpageHeightpdf'] = iEzsignpageHeightpdf;
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
     * Returns The Url to the Ezsignpage's rasterized image.  Url will expire after 5 minutes.
     * @return {String}
     */
    getSImageUrl() {
        return this.sImageUrl;
    }

    /**
     * Sets The Url to the Ezsignpage's rasterized image.  Url will expire after 5 minutes.
     * @param {String} sImageUrl The Url to the Ezsignpage's rasterized image.  Url will expire after 5 minutes.
     */
    setSImageUrl(sImageUrl) {
        this['sImageUrl'] = sImageUrl;
    }

}

/**
 * The unique ID of the Ezsignpage
 * @member {Number} pkiEzsignpageID
 */
EzsignpageResponse.prototype['pkiEzsignpageID'] = undefined;

/**
 * The Width of the page's image in pixels calculated at 100 DPI
 * @member {Number} iEzsignpageWidthimage
 */
EzsignpageResponse.prototype['iEzsignpageWidthimage'] = undefined;

/**
 * The Height of the page's image in pixels calculated at 100 DPI
 * @member {Number} iEzsignpageHeightimage
 */
EzsignpageResponse.prototype['iEzsignpageHeightimage'] = undefined;

/**
 * The Width of the page in points calculated at 72 DPI
 * @member {Number} iEzsignpageWidthpdf
 */
EzsignpageResponse.prototype['iEzsignpageWidthpdf'] = undefined;

/**
 * The Height of the page in points calculated at 72 DPI
 * @member {Number} iEzsignpageHeightpdf
 */
EzsignpageResponse.prototype['iEzsignpageHeightpdf'] = undefined;

/**
 * The page number in the Ezsigndocument
 * @member {Number} iEzsignpagePagenumber
 */
EzsignpageResponse.prototype['iEzsignpagePagenumber'] = undefined;

/**
 * The Url to the Ezsignpage's rasterized image.  Url will expire after 5 minutes.
 * @member {String} sImageUrl
 */
EzsignpageResponse.prototype['sImageUrl'] = undefined;






export default EzsignpageResponse;

