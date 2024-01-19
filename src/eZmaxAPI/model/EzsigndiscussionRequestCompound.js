/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import DiscussionRequest from './DiscussionRequest';
import EzsigndiscussionRequest from './EzsigndiscussionRequest';

/**
 * The EzsigndiscussionRequestCompound model module.
 * @module eZmaxAPI/model/EzsigndiscussionRequestCompound
 * @version 1.2.0
 */
class EzsigndiscussionRequestCompound {
    /**
     * Constructs a new <code>EzsigndiscussionRequestCompound</code>.
     * A Ezsigndiscussion Object and children
     * @alias module:eZmaxAPI/model/EzsigndiscussionRequestCompound
     * @implements module:eZmaxAPI/model/EzsigndiscussionRequest
     * @param fkiEzsigndocumentID {Number} The unique ID of the Ezsigndocument
     * @param iEzsigndiscussionPagenumber {Number} The page number in the Ezsigndocument for the Ezsigndiscussion
     * @param iEzsigndiscussionX {Number} The x of the Ezsigndiscussion
     * @param iEzsigndiscussionY {Number} The y of the Ezsigndiscussion
     * @param objDiscussion {module:eZmaxAPI/model/DiscussionRequest} 
     */
    constructor(fkiEzsigndocumentID, iEzsigndiscussionPagenumber, iEzsigndiscussionX, iEzsigndiscussionY, objDiscussion) { 
        EzsigndiscussionRequest.initialize(this, fkiEzsigndocumentID, iEzsigndiscussionPagenumber, iEzsigndiscussionX, iEzsigndiscussionY, objDiscussion);
        EzsigndiscussionRequestCompound.initialize(this, fkiEzsigndocumentID, iEzsigndiscussionPagenumber, iEzsigndiscussionX, iEzsigndiscussionY, objDiscussion);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsigndocumentID, iEzsigndiscussionPagenumber, iEzsigndiscussionX, iEzsigndiscussionY, objDiscussion) { 
        obj['fkiEzsigndocumentID'] = fkiEzsigndocumentID;
        obj['iEzsigndiscussionPagenumber'] = iEzsigndiscussionPagenumber;
        obj['iEzsigndiscussionX'] = iEzsigndiscussionX;
        obj['iEzsigndiscussionY'] = iEzsigndiscussionY;
        obj['objDiscussion'] = objDiscussion;
    }

    /**
     * Constructs a <code>EzsigndiscussionRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndiscussionRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndiscussionRequestCompound} The populated <code>EzsigndiscussionRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndiscussionRequestCompound();
            EzsigndiscussionRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigndiscussionID')) {
                obj['pkiEzsigndiscussionID'] = ApiClient.convertToType(data['pkiEzsigndiscussionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigndocumentID')) {
                obj['fkiEzsigndocumentID'] = ApiClient.convertToType(data['fkiEzsigndocumentID'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndiscussionPagenumber')) {
                obj['iEzsigndiscussionPagenumber'] = ApiClient.convertToType(data['iEzsigndiscussionPagenumber'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndiscussionX')) {
                obj['iEzsigndiscussionX'] = ApiClient.convertToType(data['iEzsigndiscussionX'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndiscussionY')) {
                obj['iEzsigndiscussionY'] = ApiClient.convertToType(data['iEzsigndiscussionY'], 'Number');
            }
            if (data.hasOwnProperty('objDiscussion')) {
                obj['objDiscussion'] = DiscussionRequest.constructFromObject(data['objDiscussion']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndiscussionRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndiscussionRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndiscussionRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objDiscussion`
        if (data['objDiscussion']) { // data not null
          DiscussionRequest.validateJSON(data['objDiscussion']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigndiscussion
     * minimum: 0
     * maximum: 16777215
     * @return {Number}
     */
    getPkiEzsigndiscussionID() {
        return this.pkiEzsigndiscussionID;
    }

    /**
     * Sets The unique ID of the Ezsigndiscussion
     * @param {Number} pkiEzsigndiscussionID The unique ID of the Ezsigndiscussion
     */
    setPkiEzsigndiscussionID(pkiEzsigndiscussionID) {
        this['pkiEzsigndiscussionID'] = pkiEzsigndiscussionID;
    }
/**
     * Returns The unique ID of the Ezsigndocument
     * minimum: 0
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
     * Returns The page number in the Ezsigndocument for the Ezsigndiscussion
     * @return {Number}
     */
    getIEzsigndiscussionPagenumber() {
        return this.iEzsigndiscussionPagenumber;
    }

    /**
     * Sets The page number in the Ezsigndocument for the Ezsigndiscussion
     * @param {Number} iEzsigndiscussionPagenumber The page number in the Ezsigndocument for the Ezsigndiscussion
     */
    setIEzsigndiscussionPagenumber(iEzsigndiscussionPagenumber) {
        this['iEzsigndiscussionPagenumber'] = iEzsigndiscussionPagenumber;
    }
/**
     * Returns The x of the Ezsigndiscussion
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getIEzsigndiscussionX() {
        return this.iEzsigndiscussionX;
    }

    /**
     * Sets The x of the Ezsigndiscussion
     * @param {Number} iEzsigndiscussionX The x of the Ezsigndiscussion
     */
    setIEzsigndiscussionX(iEzsigndiscussionX) {
        this['iEzsigndiscussionX'] = iEzsigndiscussionX;
    }
/**
     * Returns The y of the Ezsigndiscussion
     * minimum: 0
     * maximum: 65535
     * @return {Number}
     */
    getIEzsigndiscussionY() {
        return this.iEzsigndiscussionY;
    }

    /**
     * Sets The y of the Ezsigndiscussion
     * @param {Number} iEzsigndiscussionY The y of the Ezsigndiscussion
     */
    setIEzsigndiscussionY(iEzsigndiscussionY) {
        this['iEzsigndiscussionY'] = iEzsigndiscussionY;
    }
/**
     * @return {module:eZmaxAPI/model/DiscussionRequest}
     */
    getObjDiscussion() {
        return this.objDiscussion;
    }

    /**
     * @param {module:eZmaxAPI/model/DiscussionRequest} objDiscussion
     */
    setObjDiscussion(objDiscussion) {
        this['objDiscussion'] = objDiscussion;
    }

}

EzsigndiscussionRequestCompound.RequiredProperties = ["fkiEzsigndocumentID", "iEzsigndiscussionPagenumber", "iEzsigndiscussionX", "iEzsigndiscussionY", "objDiscussion"];

/**
 * The unique ID of the Ezsigndiscussion
 * @member {Number} pkiEzsigndiscussionID
 */
EzsigndiscussionRequestCompound.prototype['pkiEzsigndiscussionID'] = undefined;

/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsigndiscussionRequestCompound.prototype['fkiEzsigndocumentID'] = undefined;

/**
 * The page number in the Ezsigndocument for the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionPagenumber
 */
EzsigndiscussionRequestCompound.prototype['iEzsigndiscussionPagenumber'] = undefined;

/**
 * The x of the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionX
 */
EzsigndiscussionRequestCompound.prototype['iEzsigndiscussionX'] = undefined;

/**
 * The y of the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionY
 */
EzsigndiscussionRequestCompound.prototype['iEzsigndiscussionY'] = undefined;

/**
 * @member {module:eZmaxAPI/model/DiscussionRequest} objDiscussion
 */
EzsigndiscussionRequestCompound.prototype['objDiscussion'] = undefined;


// Implement EzsigndiscussionRequest interface:
/**
 * The unique ID of the Ezsigndiscussion
 * @member {Number} pkiEzsigndiscussionID
 */
EzsigndiscussionRequest.prototype['pkiEzsigndiscussionID'] = undefined;
/**
 * The unique ID of the Ezsigndocument
 * @member {Number} fkiEzsigndocumentID
 */
EzsigndiscussionRequest.prototype['fkiEzsigndocumentID'] = undefined;
/**
 * The page number in the Ezsigndocument for the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionPagenumber
 */
EzsigndiscussionRequest.prototype['iEzsigndiscussionPagenumber'] = undefined;
/**
 * The x of the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionX
 */
EzsigndiscussionRequest.prototype['iEzsigndiscussionX'] = undefined;
/**
 * The y of the Ezsigndiscussion
 * @member {Number} iEzsigndiscussionY
 */
EzsigndiscussionRequest.prototype['iEzsigndiscussionY'] = undefined;
/**
 * @member {module:eZmaxAPI/model/DiscussionRequest} objDiscussion
 */
EzsigndiscussionRequest.prototype['objDiscussion'] = undefined;




export default EzsigndiscussionRequestCompound;

