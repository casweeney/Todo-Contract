import { ethers } from "hardhat";

const main = async () => {

    ////// Alternative way of interactng with a deployed contract without using Contract Interface /////
    const Todo = await ethers.getContractFactory("Todo");
    const todo = Todo.attach("0xB3dB65363e0E6dddF3930b7290f6C7D599ff99Ae");

    const createTodo = await todo.createTodo("Reading", "I want to read");
    const createTodoTxnReciept = await createTodo.wait();
    console.log("Create Todo: ", createTodoTxnReciept);

    const allTodos = await todo.getTodos();
    console.log("All todos: ", allTodos);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});