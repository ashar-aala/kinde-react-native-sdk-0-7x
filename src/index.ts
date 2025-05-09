/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import KindeSDK from './SDK/KindeSDK';
import Storage from './SDK/Storage';
import * as ApiClient from './ApiClient';

/**
 * Kinde React Native SDK for authentication.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var @KindeOssReactNativeSdk = require('index'); // See note below*.
 * var xxxSvc = new @KindeOssReactNativeSdk.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new @KindeOssReactNativeSdk.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new @KindeOssReactNativeSdk.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new @KindeOssReactNativeSdk.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 1.2.2
 */

export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The KindeSDK module.
     * @property {module:SDK/KindeSDK}
     */
    KindeSDK,

    /**
     * The Storage SDK module.
     * @property {module:SDK/Storage}
     */
    Storage
};

export * from './SDK/KindeProvider';
export * from './SDK/Enums';
export * from './SDK/Utils';
export * from './types/KindeSDK';
