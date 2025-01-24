import { useState } from 'react';

/**
 * AddItemForm component for adding a new todo item.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.onHide - Function to hide the form.
 * @param {Function} props.onAdd - Function to add a new todo item.
 * @returns {JSX.Element} The rendered AddItemForm component.
 */
export default function AddItemForm({ onHide, onAdd }) {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [date, setDate] = useState('');

    /**
 * Handles the form submission to add a new todo item.
 *
 * @param {Event} e - The form submission event.
 */
    function handleSubmit(e) {
        e.preventDefault();

        if (!title) return;

        const newDate = new Date(date);
        const formattedDate = date ? `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}` : '';

        const id = crypto.randomUUID();

        const newTodo = {
            id,
            title,
            note,
            date: formattedDate,
            isDone: false
        };

        onAdd(newTodo);

        setTitle('');
        setNote('');
        setDate('');
    }

    return (
        <form className='form_add_item' onSubmit={handleSubmit}>
            <span className="btn_close_add_form" onClick={onHide}>&times;</span>

            <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}></input>

            <textarea className='custom_textarea' placeholder='Note' onChange={e => setNote(e.target.value)} />

            <div className='row'>
                <input type='date' value={date} onChange={e => setDate(e.target.value ? e.target.value : '')}></input>
                <button className='btn_todo'>ToDo</button>
            </div>
        </form>
    );
}
