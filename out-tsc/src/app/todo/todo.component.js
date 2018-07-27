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
var mock_todos_1 = require("../mock-todos");
var todo_1 = require("../todo");
var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.newTask = new todo_1.Todo();
        this.todos = mock_todos_1.TODOS;
    }
    TodoComponent.prototype.addTodo = function () {
        var lastIndex = this.todos.length - 1;
        var last = this.todos[lastIndex];
        this.newTask.id = last.id + 1;
        this.newTask.status = false;
        this.newTask.trash = false;
        this.todos.push(this.newTask);
        this.newTask = new todo_1.Todo();
    };
    TodoComponent.prototype.toggleTodo = function (item) {
        item.status = !item.status;
    };
    TodoComponent.prototype.moveToTrash = function (item) {
        item.trash = !item.trash;
    };
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map