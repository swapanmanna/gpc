import React, { useEffect } from "react";
import MetaTags from "../MetaTags";
import { height } from "../Notifications/NotificationBanner";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

export default function ContactUs() {
    useEffect(() => {
        // Define validation scripts within useEffect to run after component mounts
        window.zf_SetDateAndMonthRegexBasedOnDateFormate = function(dateFormat) {
            var dateAndMonthRegexFormateArray = new Array();
            var dateFormatRegExp;
            var monthYearFormatRegExp;
            if(dateFormat === "dd-MMM-yyyy"){
                dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec|JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[-](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "dd-MMMM-yyyy"){
                dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "MMMM-dd-yyyy"){
                dateFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp ="^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "dd/MM/yyyy"){
                dateFormatRegExp ="^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp ="^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "dd-MM-yyyy"){
                dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-]([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "MM/dd/yyyy"){
                dateFormatRegExp = "^([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))[\/](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "yyyy-MM-dd"){
                dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
                monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])$";
            } else if(dateFormat === "yyyy/MM/dd"){
                dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
                monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])$";
            } else if(dateFormat === "dd.MM.yyyy"){
                dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[.]([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
            } else if(dateFormat === "MM-dd-yyyy"){
                dateFormatRegExp = "^([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
                monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
            }
            dateAndMonthRegexFormateArray.push(dateFormatRegExp);
            dateAndMonthRegexFormateArray.push(monthYearFormatRegExp);
            return dateAndMonthRegexFormateArray;
        };

        var dateAndMonthRegexFormateArray = window.zf_SetDateAndMonthRegexBasedOnDateFormate('dd-MMM-yyyy');
        window.zf_DateRegex = new RegExp(dateAndMonthRegexFormateArray[0]);
        window.zf_MonthYearRegex = new RegExp(dateAndMonthRegexFormateArray[1]);
        window.zf_MandArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "MultiLine"];
        window.zf_FieldArray = ["Name_First", "Name_Last", "Email", "PhoneNumber_countrycode", "MultiLine"];
        window.isSalesIQIntegrationEnabled = false;
        window.salesIQFieldsArray = [];

        window.zf_ValidateAndSubmit = function() {
            if(window.zf_CheckMandatory()){
                if(window.zf_ValidCheck()){
                    if(window.isSalesIQIntegrationEnabled){
                        window.zf_addDataToSalesIQ();
                    }
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        };

        window.zf_CheckMandatory = function() {
            for(var i = 0; i < window.zf_MandArray.length; i++) {
                var fieldObj = document.forms.form[window.zf_MandArray[i]];
                if(fieldObj) {
                    if(fieldObj.nodeName != null){
                        if(fieldObj.nodeName == 'OBJECT') {
                            if(!window.zf_MandatoryCheckSignature(fieldObj)){
                                window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                                return false;
                            }
                        } else if(((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
                            if(fieldObj.type == 'file') {
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                                return false;
                            }
                            fieldObj.focus();
                            window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                            return false;
                        } else if(fieldObj.nodeName == 'SELECT') {
                            if(fieldObj.options[fieldObj.selectedIndex].value == '-Select-') {
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                                return false;
                            }
                        } else if(fieldObj.type == 'checkbox' || fieldObj.type == 'radio') {
                            if(fieldObj.checked == false) {
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                                return false;
                            }
                        }
                    } else {
                        var checkedValsCount = 0;
                        var inpChoiceElems = fieldObj;
                        for(var ii = 0; ii < inpChoiceElems.length; ii++) {
                            if(inpChoiceElems[ii].checked === true) {
                                checkedValsCount++;
                            }
                        }
                        if(checkedValsCount == 0) {
                            inpChoiceElems[0].focus();
                            window.zf_ShowErrorMsg(window.zf_MandArray[i]);
                            return false;
                        }
                    }
                }
            }
            return true;
        };

        window.zf_ValidCheck = function() {
            var isValid = true;
            for(var ind = 0; ind < window.zf_FieldArray.length; ind++) {
                var fieldObj = document.forms.form[window.zf_FieldArray[ind]];
                if(fieldObj) {
                    if(fieldObj.nodeName != null) {
                        var checkType = fieldObj.getAttribute("checktype");
                        if(checkType == "c2") {
                            if(!window.zf_ValidateNumber(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c3") {
                            if(!window.zf_ValidateCurrency(fieldObj) || !window.zf_ValidateDecimalLength(fieldObj, 10)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c4") {
                            if(!window.zf_ValidateDateFormat(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c5") {
                            if(!window.zf_ValidateEmailID(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c6") {
                            if(!window.zf_ValidateLiveUrl(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c7") {
                            if(!window.zf_ValidatePhone(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        } else if(checkType == "c8") {
                            window.zf_ValidateSignature(fieldObj);
                        } else if(checkType == "c9") {
                            if(!window.zf_ValidateMonthYearFormat(fieldObj)) {
                                isValid = false;
                                fieldObj.focus();
                                window.zf_ShowErrorMsg(window.zf_FieldArray[ind]);
                                return false;
                            }
                        }
                    }
                }
            }
            return isValid;
        };

        window.zf_ShowErrorMsg = function(uniqName) {
            var fldLinkName;
            for(var errInd = 0; errInd < window.zf_FieldArray.length; errInd++) {
                fldLinkName = window.zf_FieldArray[errInd].split('_')[0];
                document.getElementById(fldLinkName + "_error").style.display = 'none';
            }
            var linkName = uniqName.split('_')[0];
            document.getElementById(linkName + "_error").style.display = 'block';
        };

        window.zf_ValidateNumber = function(elem) {
            var validChars = "-0123456789";
            var numValue = elem.value.replace(/^\s+|\s+$/g, '');
            if(numValue != null && !numValue == "") {
                var strChar;
                var result = true;
                if(numValue.charAt(0) == "-" && numValue.length == 1) {
                    return false;
                }
                for(var i = 0; i < numValue.length && result == true; i++) {
                    strChar = numValue.charAt(i);
                    if((strChar == "-") && (i != 0)) {
                        return false;
                    }
                    if(validChars.indexOf(strChar) == -1) {
                        result = false;
                    }
                }
                return result;
            } else {
                return true;
            }
        };

        window.zf_ValidateDateFormat = function(inpElem) {
            var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
            if(dateValue == "") {
                return true;
            } else {
                return (window.zf_DateRegex.test(dateValue));
            }
        };

        window.zf_ValidateCurrency = function(elem) {
            var validChars = "0123456789.";
            var numValue = elem.value.replace(/^\s+|\s+$/g, '');
            if(numValue.charAt(0) == '-') {
                numValue = numValue.substring(1, numValue.length);
            }
            if(numValue != null && !numValue == "") {
                var strChar;
                var result = true;
                for(var i = 0; i < numValue.length && result == true; i++) {
                    strChar = numValue.charAt(i);
                    if(validChars.indexOf(strChar) == -1) {
                        result = false;
                    }
                }
                return result;
            } else {
                return true;
            }
        };

        window.zf_ValidateDecimalLength = function(elem, decimalLen) {
            var numValue = elem.value;
            if(numValue.indexOf('.') >= 0) {
                var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
                if(decimalLength > decimalLen) {
                    return false;
                } else {
                    return true;
                }
            }
            return true;
        };

        window.zf_ValidateEmailID = function(elem) {
            var check = 0;
            var emailValue = elem.value;
            if(emailValue != null && !emailValue == "") {
                var emailArray = emailValue.split(",");
                for(var i = 0; i < emailArray.length; i++) {
                    var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
                    if(!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
                        check = 1;
                    }
                }
                if(check == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        };

        window.zf_ValidateLiveUrl = function(elem) {
            var urlValue = elem.value;
            if(urlValue !== null && typeof(urlValue) !== "undefined") {
                urlValue = urlValue.replace(/^\s+|\s+$/g, '');
                if(urlValue !== "") {
                    var urlregex = new RegExp("^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$", "i");
                    return(urlregex.test(urlValue));
                }
            }
            return true;
        };

        window.zf_ValidatePhone = function(inpElem) {
            var ZFPhoneRegex = {
                PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
                PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
                PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
                PHONE_USA_REG: /^[0-9]+$/,
                PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
            };
            var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
            var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
            var toReturn = true;
            if(phoneFormat === 1) {
                if(inpElem.getAttribute("valType") == 'code') {
                    var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
                    if(fieldInpVal != "" && !codeRexp.test(fieldInpVal)) {
                        return false;
                    }
                } else {
                    var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
                    if(inpElem.getAttribute("phoneFormatType") == '2') {
                        IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
                    }
                    if(fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
                        toReturn = false;
                        return toReturn;
                    }
                }
                return toReturn;
            } else if(phoneFormat === 2) {
                var InpMaxlength = inpElem.getAttribute("maxlength");
                var USARexp = ZFPhoneRegex.PHONE_USA_REG;
                if(fieldInpVal != "" && USARexp.test(fieldInpVal) && fieldInpVal.length == InpMaxlength) {
                    toReturn = true;
                } else if(fieldInpVal == "") {
                    toReturn = true;
                } else {
                    toReturn = false;
                }
                return toReturn;
            }
        };

        window.zf_ValidateSignature = function(objElem) {
            var linkName = objElem.getAttribute("compname");
            var canvasElem = document.getElementById("drawingCanvas-" + linkName);
            var isValidSign = window.zf_IsSignaturePresent(objElem, linkName, canvasElem);
            var hiddenSignInputElem = document.getElementById("hiddenSignInput-" + linkName);
            if(isValidSign) {
                hiddenSignInputElem.value = canvasElem.toDataURL();
            } else {
                hiddenSignInputElem.value = "";
            }
            return isValidSign;
        };

        window.zf_MandatoryCheckSignature = function(objElem) {
            var linkName = objElem.getAttribute("compname");
            var canvasElem = document.getElementById("drawingCanvas-" + linkName);
            var isValid = window.zf_IsSignaturePresent(objElem, linkName, canvasElem);
            return isValid;
        };

        window.zf_IsSignaturePresent = function(objElem, linkName, canvasElem) {
            var context = canvasElem.getContext('2d');
            var canvasWidth = canvasElem.width;
            var canvasHeight = canvasElem.height;
            var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
            var signLen = canvasData.data.length;
            var flag = false;
            for(var index = 0; index < signLen; index++) {
                if(!canvasData.data[index]) {
                    flag = false;
                } else if(canvasData.data[index]) {
                    flag = true;
                    break;
                }
            }
            return flag;
        };

        window.zf_FocusNext = function(elem, event) {
            if(event.keyCode == 9 || event.keyCode == 16) {
                return;
            }
            if(event.keyCode >= 37 && event.keyCode <= 40) {
                return;
            }
            var compname = elem.getAttribute("compname");
            var inpElemName = elem.getAttribute("name");
            if(inpElemName == compname + "_countrycode") {
                if(elem.value.length == 3) {
                    document.getElementsByName(compname + "_first")[0].focus();
                }
            } else if(inpElemName == compname + "_first") {
                if(elem.value.length == 3) {
                    document.getElementsByName(compname + "_second")[0].focus();
                }
            }
        };

        window.zf_ValidateMonthYearFormat = function(inpElem) {
            var monthYearValue = inpElem.value.replace(/^\s+|\s+$/g, '');
            if(monthYearValue == "") {
                return true;
            } else {
                return (window.zf_MonthYearRegex.test(monthYearValue));
            }
        };
    }, []);

    return (
        <>
            <MetaTags
                title="Contact Us – Global Professional Certifications"
                description="Reach out to our team for queries, support, or course guidance. We’re here to help you achieve your certification goals."
                canonicalUrl="https://globalprofessionalcertifications.com/contact"
            />
            <section className={`relative z-10 bg-gray-50 dark:bg-dark py-20 lg:py-[${120 + (4 * height)}px] w-full`}>
                <div className="mx-auto lg:max-w-[80rem]">
                    <div className="lg:flex lg:justify-center lg:items-center">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                            <div className="mb-12 max-w-[500px] lg:mb-0">
                                <span className="px-3 py-1.5 bg-[#EFECFF] text-[#5033FF] w-[12rem] border border-[#5033FF] rounded-lg text-sm font-bold hover:text-brand-purple hover:border-brand-purple transition duration-300">
                                    Contact Us
                                </span>
                                <h2 className="mt-4 text-brand-blue dark:text-white mb-4 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                                    GET IN TOUCH WITH US
                                </h2>
                                <p className="text-xl leading-relaxed text-brand-dark dark:text-dark-6 mb-9">
                                    Send us a message, we will text back!
                                </p>
                                <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <GrLocation size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl text-dark dark:text-white">
                                            <span className="font-bold">Our Location</span> <span><TiArrowRight className="inline-block" /></span> <span className="text-sm italic hover:text-brand-purple hover:underline"><Link to="https://maps.app.goo.gl/iJx6qe41EeEeG1vY8" target="_blank">View on map</Link></span>
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            Innov8 Building, Orchid Centre, Golf course road, Gurugram, Haryana, India - 122022
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex justify-center items-center w-full max-w-[370px]">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <FiPhoneCall size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="text-xl font-bold text-dark dark:text-white">
                                            Phone Number
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            (+91) 78275 97250
                                        </p>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            (+91) 87360 83099
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px] justify-center items-center">
                                    <div className="bg-primary/5 text-brand-blue shadow-lg border border-gray-200 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded sm:h-[70px] sm:max-w-[70px]">
                                        <MdOutlineEmail size={32} className="hover:text-brand-purple transition duration-300" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                                            Email Address
                                        </h4>
                                        <p className="text-sm text-body-color dark:text-dark-6">
                                            <a href="mailto:cia@globalprofessionalcertifications.com?subject=Inquiry&body=Hi there, I would like to know more about..." className="hover:underline hover:text-brand-blue">
                                                cia@globalprofessionalcertifications.com
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="relative p-8 bg-gray-50 border border-gray-300 rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
                                <form
                                    action="https://forms.zohopublic.in/globalprofessionalcertificat1/form/test/formperma/dhyWRo9OQq2PMHOBuot4MO6FFak81uSy8doxun7Y2nw/htmlRecords/submit"
                                    name="form"
                                    method="POST"
                                    onSubmit={() => { document.charset = "UTF-8"; return window.zf_ValidateAndSubmit(); }}
                                    acceptCharset="UTF-8"
                                    encType="multipart/form-data"
                                    id="form"
                                >
                                    <input type="hidden" name="zf_referrer_name" value="" />
                                    <input type="hidden" name="zf_redirect_url" value="" />
                                    <input type="hidden" name="zc_gad" value="" />
                                    <div className="flex gap-3 mb-6">
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                name="Name_First"
                                                maxLength="255"
                                                fieldType="7"
                                                placeholder="First Name"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded border py-3 px-[14px] text-base outline-none"
                                            />
                                            <p id="Name_error" className="text-red-500 text-sm mt-1" style={{ display: 'none' }}>Invalid value</p>
                                        </div>
                                        <div className="w-full">
                                            <input
                                                type="text"
                                                name="Name_Last"
                                                maxLength="255"
                                                fieldType="7"
                                                placeholder="Last Name"
                                                className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark placeholder-gray-500 focus:border-brand-gray w-full rounded border py-3 px-[14px] text-base outline-none"
                                            />
                                            <p id="Name_error" className="text-red-500 text-sm mt-1" style={{ display: 'none' }}>Invalid value</p>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="Email"
                                            checktype="c5"
                                            maxLength="255"
                                            fieldType="9"
                                            placeholder="Your Email"
                                            className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded border py-3 px-[14px] text-base outline-none"
                                        />
                                        <p id="Email_error" className="text-red-500 text-sm mt-1" style={{ display: 'none' }}>Invalid value</p>
                                    </div>
                                    <div className="mb-6">
                                        <input
                                            type="text"
                                            name="PhoneNumber_countrycode"
                                            maxLength="20"
                                            checktype="c7"
                                            phoneFormat="1"
                                            isCountryCodeEnabled={false}
                                            fieldType="11"
                                            id="international_PhoneNumber_countrycode"
                                            valType="number"
                                            phoneFormatType="1"
                                            placeholder="Your Phone Number"
                                            className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full rounded border py-3 px-[14px] text-base outline-none"
                                        />
                                        <p id="PhoneNumber_error" className="text-red-500 text-sm mt-1" style={{ display: 'none' }}>Invalid value</p>
                                    </div>
                                    <div className="mb-6">
                                        <textarea
                                            name="MultiLine"
                                            checktype="c1"
                                            maxLength="65535"
                                            placeholder="Your Message"
                                            rows="6"
                                            className="border border-gray-300 shadow dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color placeholder-gray-500 focus:border-brand-gray w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
                                        ></textarea>
                                        <p id="MultiLine_error" className="text-red-500 text-sm mt-1" style={{ display: 'none' }}>Invalid value</p>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full p-3 text-white transition border rounded-lg border-primary bg-brand-blue hover:bg-opacity-90 hover:bg-brand-purple hover:border-brand-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-gray"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -top-10 -right-9 z-[-1]">
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#3a1292"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}