import { Injectable } from '@angular/core';

@Injectable()

export class ValidationService {

    /** Email Validator */
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value) {
            if (control.value.toLowerCase().match(/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/)) {
                return null;
            } else {
                return { 'invalidEmailAddress': true };
            }
        }
    }
    /** Password Validator */
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value) {
            if (control.value.match(/^[\s\S]{6,100}$/)) {
                return null;
            } else {
                return { 'invalidPassword': true };
            }
        }

    }
    /** Phone Number Validator Validator */
    static phoneNumberValidator(control) {
        if (control.value) {
            if (control.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)
                && control.value.length > 9 && control.value.length < 16) {
                return null;
            } else {
                return { 'invalidPhoneNumber': true };
            }
        }
    }
    /** Name Validator */
    static nameValidator(control) {

        if (control.value) {
            if (control.value.match(/^[a-zA-Z ]*$/)) {
                return null;
            } else {
                return { 'invalidName': true };
            }
        }

    }
    /** US Zipcode Validator */
    static usZipCodeValidator(control) {
        if (control.value) {
            if (control.value.match(/^(\d{5}(-\d{4})?|[A-Z]\d[A-Z] *\d[A-Z]\d)$/)) {
                return null;
            } else {
                return { 'invalidZipcode': true };
            }
        }

    }
    /** Website url Validator */
    static webSiteUrlValidator(control) {
        if (control.value) {
            if (control.value.match('^((https?|ftp)://)?([A-Za-z]+\\.)?[A-Za-z0-9-]+(\\.[a-zA-Z]{1,4}){1,2}(/.*\\?.*)?$')) {
                return null;
            } else {
                return { 'invalidWebSiteUrl': true };
            }
        }

    }
    /** Allow Only Digits */
    static allowOnlyDigitsValidator(control) {
        if (control.value) {
            if (control.value.match(/^[0-9]*$/)) {
                return null;
            } else {
                return { 'invalidDigits': true };
            }
        }

    }
    /** Allow Only Digits */
    static allowDigitsAndDecimalValidator(control) {
        if (control.value) {
            if (control.value.match(/^(?:[0-9]+(?:\.[0-9]{0,2})?)?$/)) {
                return null;
            } else {
                return { 'invalidDigitsDecimal': true };
            }
        }

    }
    /** Year Validation */
    static yearValidator(control) {
        if (control.value) {
            if (control.value.match(/^[0-9]{4}$/)) {
                return null;
            } else {
                return { 'invalidYear': true };
            }
        }

    }
}