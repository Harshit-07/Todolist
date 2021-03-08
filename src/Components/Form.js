import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {

    //JS function and code
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setInputText(' ');
    }


    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder="Enter Items" />
            <button c assName="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    );
}

export default Form;