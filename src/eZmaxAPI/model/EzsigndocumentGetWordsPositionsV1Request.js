/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.48
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigndocumentGetWordsPositionsV1Request model module.
 * @module eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Request
 * @version 1.0.48
 */
class EzsigndocumentGetWordsPositionsV1Request {
    /**
     * Constructs a new <code>EzsigndocumentGetWordsPositionsV1Request</code>.
     * Request for the /1/object/ezsigndocument/{pkiEzsigndocumentID}/getWordsPositions API Request
     * @alias module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Request
     * @param a_sWords {Array.<String>} 
     */
    constructor(a_sWords) { 
        
        EzsigndocumentGetWordsPositionsV1Request.initialize(this, a_sWords);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_sWords) { 
        obj['a_sWords'] = a_sWords;
    }

    /**
     * Constructs a <code>EzsigndocumentGetWordsPositionsV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetWordsPositionsV1Request} The populated <code>EzsigndocumentGetWordsPositionsV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetWordsPositionsV1Request();

            if (data.hasOwnProperty('a_sWords')) {
                obj['a_sWords'] = ApiClient.convertToType(data['a_sWords'], ['String']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<String>}
     */
    getASWords() {
        return this.a_sWords;
    }

    /**
     * @param {Array.<String>} a_sWords
     */
    setASWords(a_sWords) {
        this['a_sWords'] = a_sWords;
    }

}

/**
 * @member {Array.<String>} a_sWords
 */
EzsigndocumentGetWordsPositionsV1Request.prototype['a_sWords'] = undefined;






export default EzsigndocumentGetWordsPositionsV1Request;

