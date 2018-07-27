"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mock_contacts_1 = require("../mock-contacts");
var contact_1 = require("../contact");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.newContact = new contact_1.Contact();
        this.contacts = mock_contacts_1.CONTACTS;
    }
    ContactComponent.prototype.deleteContact = function (del) {
        var remove = this.contacts.indexOf(del);
        if (remove !== -1) {
            this.contacts.splice(remove, 1);
        }
    };
    ContactComponent.prototype.addContact = function () {
        var lastIndex = this.contacts.length - 1;
        var last = this.contacts[lastIndex];
        this.newContact.id = last.id + 1;
        this.contacts.push(this.newContact);
        this.newContact = new contact_1.Contact();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map