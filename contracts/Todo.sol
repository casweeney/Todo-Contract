// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Todo {
    struct Item {
        string title;
        string description;
        bool status;
    }

    Item[] public todos;

    function createTodo(string memory _title, string memory _description) external {
        Item memory newTodo;
        newTodo.title = _title;
        newTodo.description = _description;
        todos.push(newTodo);
    }

    function getTodos() external view returns (Item[] memory) {
        return todos;
    }

    function updateTodo(uint _index, string memory _newTitle, string memory _newDescription) external {
        todos[_index].title = _newTitle;
        todos[_index].description = _newDescription;
    }

    function updateTodoStatus(uint _index) external {
        todos[_index].status = !todos[_index].status;
    }

    function getSingleTodo(uint _index) external view returns (Item memory) {
        return todos[_index];
    }

    function deleteTodo(uint _index) external {
        delete todos[_index];
    }
}