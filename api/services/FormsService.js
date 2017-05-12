"use strict";
// Copyright (c) 2017 Queensland Cyber Infrastructure Foundation (http://www.qcif.edu.au/)
//
// GNU GENERAL PUBLIC LICENSE
//    Version 2, June 1991
//
// This program is free software; you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation; either version 2 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along
// with this program; if not, write to the Free Software Foundation, Inc.,
// 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var services = require("../../typescript/services/CoreService.js");
var Services;
(function (Services) {
    /**
     * Forms related functions...
     *
     * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
     *
     */
    var Forms = (function (_super) {
        __extends(Forms, _super);
        function Forms() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._exportedMethods = [
                'bootstrap',
                'getForm'
            ];
            _this.bootstrap = function (defBrand) {
                return _super.prototype.getObservable.call(_this, Form.find({ branding: defBrand.id })).flatMap(function (form) {
                    if (!form || form.length == 0) {
                        sails.log.verbose("Bootstrapping form definitions... ");
                        var defForm = sails.config.form[sails.config.form.defaultForm];
                        var formObj = {
                            name: sails.config.form.defaultForm,
                            // form definition must be in string form?!
                            fields: JSON.stringify(defForm.fields),
                            branding: defBrand.id
                        };
                        return _super.prototype.getObservable.call(_this, Form.create(formObj));
                    }
                    else {
                        sails.log.verbose("Form definition(s) exist.");
                        return Rx_1.Observable.of(form);
                    }
                });
            };
            _this.getForm = function (name, brandId) {
                return _super.prototype.getObservable.call(_this, Form.findOne({ name: name, branding: brandId }));
            };
            return _this;
        }
        return Forms;
    }(services.Services.Core.Service));
    Services.Forms = Forms;
})(Services = exports.Services || (exports.Services = {}));
module.exports = new Services.Forms().exports();
