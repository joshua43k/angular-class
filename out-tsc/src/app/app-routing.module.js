"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var test_component_1 = require("./test/test.component");
var contact_component_1 = require("./contact/contact.component");
var todo_component_1 = require("./todo/todo.component");
var hero_component_1 = require("./hero/hero.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: '', component: test_component_1.TestComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'todo', component: todo_component_1.TodoComponent },
    { path: 'hero', component: hero_component_1.HeroComponent },
    { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map