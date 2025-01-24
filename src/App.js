import { useState, useEffect } from 'react';
import Logo from './components/Logo';
import IconBtn from './components/IconBtn';
import Plus from './assets/plus.png';
import AddItemForm from './components/AddItemForm';
import TodoList from './components/TodoList';
import Copyright from './components/Copyright';

const initialItem = [
  {
    id: '1',
    title: 'Vytvořit první úkol',
    note: 'Klikněte na tlačítko + a vytvořte si první úkol.',
    date: '',
    isDone: false
  }
];

/**
 * The main App component that renders the todo list application.
 *
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
  const [todoList, setTodoList] = useState(() => {
    const savedList = localStorage.getItem('todoList');
    return savedList ? JSON.parse(savedList) : initialItem;
  });

  /**
 * Synchronizes the todo list with localStorage whenever the todo list changes.
 */
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const [showAddItem, setShowAddItem] = useState(false);

  /**
 * Toggles the visibility of the AddItemForm component.
 */
  function handleShowAddItem() {
    setShowAddItem(show => !show);
  }

  /**
   * Toggles the completion status of a todo item.
   *
   * @param {string} id - The ID of the item to toggle.
   */
  function handleCompletion(id) {
    setTodoList(todoList.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item));
  }

  /**
 * Deletes an item from the todo list.
 *
 * @param {string} id - The ID of the item to delete.
 */
  function handleDeleteItem(id) {
    setTodoList(todoList.filter(item => item.id !== id));
  }

  /**
   * Adds a new item to the todo list.
   *
   * @param {Object} newItem - The new item to add.
   * @param {boolean} newItem.isDone - The completion status of the new item.
   */
  function handleAddItem(newItem) {
    setTodoList(list => [...list, newItem]);
    setShowAddItem(false);
  }

  /**
   * Edits an existing item in the todo list.
   *
   * @param {string} id - The ID of the item to edit.
   * @param {Object} editedItem - The edited item.
   * @param {boolean} editedItem.isDone - The completion status of the edited item.
   */
  function handleEditItem(id, editedItem) {
    setTodoList(list => list.map(item => item.id === id ? editedItem : item));
  }

  return (
    <>
      <div className='app'>
        <div className='header'>
          <Logo />
          {!showAddItem && (
            <IconBtn onClick={handleShowAddItem}>
              <img src={Plus} alt='plus' width='25' height='25' />
            </IconBtn>
          )}
        </div>
        {showAddItem && <AddItemForm onHide={handleShowAddItem} onAdd={handleAddItem} />}
        <TodoList list={todoList} onDelete={handleDeleteItem} onCheck={handleCompletion} onEdit={handleEditItem} />
      </div>
      {showAddItem && <div className='overlay'></div>}
      <Copyright />
    </>
  );
}

