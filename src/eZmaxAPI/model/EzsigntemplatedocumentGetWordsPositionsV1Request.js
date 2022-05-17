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
 * The EzsigntemplatedocumentGetWordsPositionsV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request
 * @version 1.1.7
 */
class EzsigntemplatedocumentGetWordsPositionsV1Request {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetWordsPositionsV1Request</code>.
     * Request for POST /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getWordsPositions
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request
     * @param eGet {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request.EGetEnum} Specify if you want to retrieve *All* words or specific *Words* from the document. If you specify *Words*, you must send the list of words to search for in *a_sWord*.
     * @param bWordCaseSensitive {Boolean} IF *true*, words will be searched case-sensitive and results will be returned case-sensitive. IF *false*, words will be searched case-insensitive and results will be returned case-insensitive.
     */
    constructor(eGet, bWordCaseSensitive) { 
        
        EzsigntemplatedocumentGetWordsPositionsV1Request.initialize(this, eGet, bWordCaseSensitive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eGet, bWordCaseSensitive) { 
        obj['eGet'] = eGet;
        obj['bWordCaseSensitive'] = bWordCaseSensitive;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetWordsPositionsV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request} The populated <code>EzsigntemplatedocumentGetWordsPositionsV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetWordsPositionsV1Request();

            if (data.hasOwnProperty('eGet')) {
                obj['eGet'] = ApiClient.convertToType(data['eGet'], 'String');
            }
            if (data.hasOwnProperty('bWordCaseSensitive')) {
                obj['bWordCaseSensitive'] = ApiClient.convertToType(data['bWordCaseSensitive'], 'Boolean');
            }
            if (data.hasOwnProperty('a_sWord')) {
                obj['a_sWord'] = ApiClient.convertToType(data['a_sWord'], ['String']);
            }
        }
        return obj;
    }

/**
     * Returns Specify if you want to retrieve *All* words or specific *Words* from the document. If you specify *Words*, you must send the list of words to search for in *a_sWord*.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request.EGetEnum}
     */
    getEGet() {
        return this.eGet;
    }

    /**
     * Sets Specify if you want to retrieve *All* words or specific *Words* from the document. If you specify *Words*, you must send the list of words to search for in *a_sWord*.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request.EGetEnum} eGet Specify if you want to retrieve *All* words or specific *Words* from the document. If you specify *Words*, you must send the list of words to search for in *a_sWord*.
     */
    setEGet(eGet) {
        this['eGet'] = eGet;
    }
/**
     * Returns IF *true*, words will be searched case-sensitive and results will be returned case-sensitive. IF *false*, words will be searched case-insensitive and results will be returned case-insensitive.
     * @return {Boolean}
     */
    getBWordCaseSensitive() {
        return this.bWordCaseSensitive;
    }

    /**
     * Sets IF *true*, words will be searched case-sensitive and results will be returned case-sensitive. IF *false*, words will be searched case-insensitive and results will be returned case-insensitive.
     * @param {Boolean} bWordCaseSensitive IF *true*, words will be searched case-sensitive and results will be returned case-sensitive. IF *false*, words will be searched case-insensitive and results will be returned case-insensitive.
     */
    setBWordCaseSensitive(bWordCaseSensitive) {
        this['bWordCaseSensitive'] = bWordCaseSensitive;
    }
/**
     * Returns Array of words to find in the document
     * @return {Array.<String>}
     */
    getASWord() {
        return this.a_sWord;
    }

    /**
     * Sets Array of words to find in the document
     * @param {Array.<String>} a_sWord Array of words to find in the document
     */
    setASWord(a_sWord) {
        this['a_sWord'] = a_sWord;
    }

}

/**
 * Specify if you want to retrieve *All* words or specific *Words* from the document. If you specify *Words*, you must send the list of words to search for in *a_sWord*.
 * @member {module:eZmaxAPI/model/EzsigntemplatedocumentGetWordsPositionsV1Request.EGetEnum} eGet
 */
EzsigntemplatedocumentGetWordsPositionsV1Request.prototype['eGet'] = undefined;

/**
 * IF *true*, words will be searched case-sensitive and results will be returned case-sensitive. IF *false*, words will be searched case-insensitive and results will be returned case-insensitive.
 * @member {Boolean} bWordCaseSensitive
 */
EzsigntemplatedocumentGetWordsPositionsV1Request.prototype['bWordCaseSensitive'] = undefined;

/**
 * Array of words to find in the document
 * @member {Array.<String>} a_sWord
 */
EzsigntemplatedocumentGetWordsPositionsV1Request.prototype['a_sWord'] = undefined;





/**
 * Allowed values for the <code>eGet</code> property.
 * @enum {String}
 * @readonly
 */
EzsigntemplatedocumentGetWordsPositionsV1Request['EGetEnum'] = {

    /**
     * value: "All"
     * @const
     */
    "All": "All",

    /**
     * value: "Words"
     * @const
     */
    "Words": "Words"
};



export default EzsigntemplatedocumentGetWordsPositionsV1Request;
