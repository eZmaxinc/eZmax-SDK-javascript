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
 * The EzsigntemplatedocumentpageResponse model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentpageResponse
 * @version 1.1.7
 */
class EzsigntemplatedocumentpageResponse {
    /**
     * Constructs a new <code>EzsigntemplatedocumentpageResponse</code>.
     * An Ezsigntemplatedocumentpage Object
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentpageResponse
     * @param pkiEzsigntemplatedocumentpageID {Number} The unique ID of the Ezsigntemplatedocumentpage
     * @param iEzsigntemplatedocumentpageWidthimage {Number} The Width of the page's image in pixels calculated at 100 DPI
     * @param iEzsigntemplatedocumentpageHeightimage {Number} The Height of the page's image in pixels calculated at 100 DPI
     * @param iEzsigntemplatedocumentpageWidthpdf {Number} The Width of the page in points calculated at 72 DPI
     * @param iEzsigntemplatedocumentpageHeightpdf {Number} The Height of the page in points calculated at 72 DPI
     * @param iEzsigntemplatedocumentpagePagenumber {Number} The page number in the Ezsigntemplatedocument
     * @param sImageUrl {String} The Url to the Ezsigntemplatedocumentpage's rasterized image.  Url will expire after 5 minutes.
     */
    constructor(pkiEzsigntemplatedocumentpageID, iEzsigntemplatedocumentpageWidthimage, iEzsigntemplatedocumentpageHeightimage, iEzsigntemplatedocumentpageWidthpdf, iEzsigntemplatedocumentpageHeightpdf, iEzsigntemplatedocumentpagePagenumber, sImageUrl) { 
        
        EzsigntemplatedocumentpageResponse.initialize(this, pkiEzsigntemplatedocumentpageID, iEzsigntemplatedocumentpageWidthimage, iEzsigntemplatedocumentpageHeightimage, iEzsigntemplatedocumentpageWidthpdf, iEzsigntemplatedocumentpageHeightpdf, iEzsigntemplatedocumentpagePagenumber, sImageUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatedocumentpageID, iEzsigntemplatedocumentpageWidthimage, iEzsigntemplatedocumentpageHeightimage, iEzsigntemplatedocumentpageWidthpdf, iEzsigntemplatedocumentpageHeightpdf, iEzsigntemplatedocumentpagePagenumber, sImageUrl) { 
        obj['pkiEzsigntemplatedocumentpageID'] = pkiEzsigntemplatedocumentpageID;
        obj['iEzsigntemplatedocumentpageWidthimage'] = iEzsigntemplatedocumentpageWidthimage;
        obj['iEzsigntemplatedocumentpageHeightimage'] = iEzsigntemplatedocumentpageHeightimage;
        obj['iEzsigntemplatedocumentpageWidthpdf'] = iEzsigntemplatedocumentpageWidthpdf;
        obj['iEzsigntemplatedocumentpageHeightpdf'] = iEzsigntemplatedocumentpageHeightpdf;
        obj['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
        obj['sImageUrl'] = sImageUrl;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentpageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentpageResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentpageResponse} The populated <code>EzsigntemplatedocumentpageResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentpageResponse();

            if (data.hasOwnProperty('pkiEzsigntemplatedocumentpageID')) {
                obj['pkiEzsigntemplatedocumentpageID'] = ApiClient.convertToType(data['pkiEzsigntemplatedocumentpageID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpageWidthimage')) {
                obj['iEzsigntemplatedocumentpageWidthimage'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpageWidthimage'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpageHeightimage')) {
                obj['iEzsigntemplatedocumentpageHeightimage'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpageHeightimage'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpageWidthpdf')) {
                obj['iEzsigntemplatedocumentpageWidthpdf'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpageWidthpdf'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpageHeightpdf')) {
                obj['iEzsigntemplatedocumentpageHeightpdf'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpageHeightpdf'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigntemplatedocumentpagePagenumber')) {
                obj['iEzsigntemplatedocumentpagePagenumber'] = ApiClient.convertToType(data['iEzsigntemplatedocumentpagePagenumber'], 'Number');
            }
            if (data.hasOwnProperty('sImageUrl')) {
                obj['sImageUrl'] = ApiClient.convertToType(data['sImageUrl'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatedocumentpage
     * @return {Number}
     */
    getPkiEzsigntemplatedocumentpageID() {
        return this.pkiEzsigntemplatedocumentpageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatedocumentpage
     * @param {Number} pkiEzsigntemplatedocumentpageID The unique ID of the Ezsigntemplatedocumentpage
     */
    setPkiEzsigntemplatedocumentpageID(pkiEzsigntemplatedocumentpageID) {
        this['pkiEzsigntemplatedocumentpageID'] = pkiEzsigntemplatedocumentpageID;
    }
/**
     * Returns The Width of the page's image in pixels calculated at 100 DPI
     * @return {Number}
     */
    getIEzsigntemplatedocumentpageWidthimage() {
        return this.iEzsigntemplatedocumentpageWidthimage;
    }

    /**
     * Sets The Width of the page's image in pixels calculated at 100 DPI
     * @param {Number} iEzsigntemplatedocumentpageWidthimage The Width of the page's image in pixels calculated at 100 DPI
     */
    setIEzsigntemplatedocumentpageWidthimage(iEzsigntemplatedocumentpageWidthimage) {
        this['iEzsigntemplatedocumentpageWidthimage'] = iEzsigntemplatedocumentpageWidthimage;
    }
/**
     * Returns The Height of the page's image in pixels calculated at 100 DPI
     * @return {Number}
     */
    getIEzsigntemplatedocumentpageHeightimage() {
        return this.iEzsigntemplatedocumentpageHeightimage;
    }

    /**
     * Sets The Height of the page's image in pixels calculated at 100 DPI
     * @param {Number} iEzsigntemplatedocumentpageHeightimage The Height of the page's image in pixels calculated at 100 DPI
     */
    setIEzsigntemplatedocumentpageHeightimage(iEzsigntemplatedocumentpageHeightimage) {
        this['iEzsigntemplatedocumentpageHeightimage'] = iEzsigntemplatedocumentpageHeightimage;
    }
/**
     * Returns The Width of the page in points calculated at 72 DPI
     * @return {Number}
     */
    getIEzsigntemplatedocumentpageWidthpdf() {
        return this.iEzsigntemplatedocumentpageWidthpdf;
    }

    /**
     * Sets The Width of the page in points calculated at 72 DPI
     * @param {Number} iEzsigntemplatedocumentpageWidthpdf The Width of the page in points calculated at 72 DPI
     */
    setIEzsigntemplatedocumentpageWidthpdf(iEzsigntemplatedocumentpageWidthpdf) {
        this['iEzsigntemplatedocumentpageWidthpdf'] = iEzsigntemplatedocumentpageWidthpdf;
    }
/**
     * Returns The Height of the page in points calculated at 72 DPI
     * @return {Number}
     */
    getIEzsigntemplatedocumentpageHeightpdf() {
        return this.iEzsigntemplatedocumentpageHeightpdf;
    }

    /**
     * Sets The Height of the page in points calculated at 72 DPI
     * @param {Number} iEzsigntemplatedocumentpageHeightpdf The Height of the page in points calculated at 72 DPI
     */
    setIEzsigntemplatedocumentpageHeightpdf(iEzsigntemplatedocumentpageHeightpdf) {
        this['iEzsigntemplatedocumentpageHeightpdf'] = iEzsigntemplatedocumentpageHeightpdf;
    }
/**
     * Returns The page number in the Ezsigntemplatedocument
     * @return {Number}
     */
    getIEzsigntemplatedocumentpagePagenumber() {
        return this.iEzsigntemplatedocumentpagePagenumber;
    }

    /**
     * Sets The page number in the Ezsigntemplatedocument
     * @param {Number} iEzsigntemplatedocumentpagePagenumber The page number in the Ezsigntemplatedocument
     */
    setIEzsigntemplatedocumentpagePagenumber(iEzsigntemplatedocumentpagePagenumber) {
        this['iEzsigntemplatedocumentpagePagenumber'] = iEzsigntemplatedocumentpagePagenumber;
    }
/**
     * Returns The Url to the Ezsigntemplatedocumentpage's rasterized image.  Url will expire after 5 minutes.
     * @return {String}
     */
    getSImageUrl() {
        return this.sImageUrl;
    }

    /**
     * Sets The Url to the Ezsigntemplatedocumentpage's rasterized image.  Url will expire after 5 minutes.
     * @param {String} sImageUrl The Url to the Ezsigntemplatedocumentpage's rasterized image.  Url will expire after 5 minutes.
     */
    setSImageUrl(sImageUrl) {
        this['sImageUrl'] = sImageUrl;
    }

}

/**
 * The unique ID of the Ezsigntemplatedocumentpage
 * @member {Number} pkiEzsigntemplatedocumentpageID
 */
EzsigntemplatedocumentpageResponse.prototype['pkiEzsigntemplatedocumentpageID'] = undefined;

/**
 * The Width of the page's image in pixels calculated at 100 DPI
 * @member {Number} iEzsigntemplatedocumentpageWidthimage
 */
EzsigntemplatedocumentpageResponse.prototype['iEzsigntemplatedocumentpageWidthimage'] = undefined;

/**
 * The Height of the page's image in pixels calculated at 100 DPI
 * @member {Number} iEzsigntemplatedocumentpageHeightimage
 */
EzsigntemplatedocumentpageResponse.prototype['iEzsigntemplatedocumentpageHeightimage'] = undefined;

/**
 * The Width of the page in points calculated at 72 DPI
 * @member {Number} iEzsigntemplatedocumentpageWidthpdf
 */
EzsigntemplatedocumentpageResponse.prototype['iEzsigntemplatedocumentpageWidthpdf'] = undefined;

/**
 * The Height of the page in points calculated at 72 DPI
 * @member {Number} iEzsigntemplatedocumentpageHeightpdf
 */
EzsigntemplatedocumentpageResponse.prototype['iEzsigntemplatedocumentpageHeightpdf'] = undefined;

/**
 * The page number in the Ezsigntemplatedocument
 * @member {Number} iEzsigntemplatedocumentpagePagenumber
 */
EzsigntemplatedocumentpageResponse.prototype['iEzsigntemplatedocumentpagePagenumber'] = undefined;

/**
 * The Url to the Ezsigntemplatedocumentpage's rasterized image.  Url will expire after 5 minutes.
 * @member {String} sImageUrl
 */
EzsigntemplatedocumentpageResponse.prototype['sImageUrl'] = undefined;






export default EzsigntemplatedocumentpageResponse;
