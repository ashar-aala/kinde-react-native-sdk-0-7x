/**
 * Kinde Management API
 * Provides endpoints to manage your Kinde Businesses
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: support@kinde.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */
/// <reference types="react-native-inappbrowser-reborn" />
import * as WebBrowser from 'expo-web-browser';
import { AdditionalParameters } from '../types/KindeSDK';
import KindeSDK from './KindeSDK';
/**
 * It generates a random string of a given length, and returns it
 * @param {number} [byteLength=32] - The number of bytes to generate. Defaults to 32.
 * @returns A random string of 32 bytes.
 */
export declare function generateRandomString(byteLength?: number): string;
/**
 * It generates a random string, hashes it, and then base64 encodes it
 * @returns An object with three properties: state, codeVerifier, and codeChallenge.
 */
export declare function generateChallenge(): {
    state: string;
    codeVerifier: string;
    codeChallenge: string;
};
/**
 * If the reference is null or undefined, throw an error, otherwise return the reference.
 * @param {T | undefined | null} reference - The value to check.
 * @param {string} name - The name of the parameter that is being checked.
 * @returns A function that takes two parameters and returns either the first parameter or an Error.
 */
export declare function checkNotNull<T>(reference: T | undefined | null, name: string): T | Error;
/**
 * It checks if the additionalParameters object is valid
 * @param {AdditionalParameters} additionalParameters - AdditionalParameters = {}
 * @returns An object with the keys and values of the additionalParameters object.
 */
export declare const checkAdditionalParameters: (additionalParameters?: AdditionalParameters) => AdditionalParameters;
/**
 * It takes a target object and an additionalParameters object and adds the additionalParameters
 * object's key/value pairs to the target object
 * @param target - Record<string, string | undefined>
 * @param {AdditionalParameters} additionalParameters - AdditionalParameters = {}
 * @returns A function that takes two parameters, target and additionalParameters.
 */
export declare const addAdditionalParameters: (target: Record<string, string | undefined>, additionalParameters?: AdditionalParameters) => Record<string, string | undefined>;
export declare const isExpoGo: boolean;
export declare const OpenWebInApp: (url: string, kindeSDK: KindeSDK) => Promise<import("../types/KindeSDK").TokenResponse | null>;
export declare const openWebBrowser: (url: string, redirectUri: string) => Promise<WebBrowser.WebBrowserRedirectResult | WebBrowser.WebBrowserResult | import("react-native-inappbrowser-reborn").BrowserResult>;
