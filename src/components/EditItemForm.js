import { useState } from 'react';

/**
 * EditItemForm component for editing an existing todo item.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The item to edit.
 * @param {string} props.item.id - The ID of the item.
 * @param {string} props.item.title - The title of the item.
 * @param {string} props.item.note - The note of the item.
 * @param {string} props.item.date - The date of the item.
 * @param {boolean} props.item.isDone - The completion status of the item.
 * @param {Function} props.onClose - Function to close the form.
 * @param {Function} props.onEdit - Function to edit the todo item.
 * @param {Function} props.onEditClose - Function to close the edit form.
 * @returns {JSX.Element} The rendered EditItemForm component.
 */
export default function EditItemForm({ item, onClose, onEdit, onEditClose }) {
    const [title, setTitle] = useState(item.title);
    const [note, setNote] = useState(item.note);
    const [date, setDate] = useState(() => {
        if (!item.date) return '';
        const [day, month, year] = item.date.split('.');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    });

    /**
     * Handles the form submission to edit the todo item.
     *
     * @param {Event} e - The form submission event.
     */
    function handleSubmit(e) {
        e.preventDefault();

        if (!title) return;

        const newDate = new Date(date);
        const formattedDate = date ? `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}` : '';

        const newTodo = {
            id: item.id,
            title,
            note,
            date: formattedDate,
            isDone: item.isDone
        };

        onEdit(item.id, newTodo);
        onEditClose(false);
    }
    return (
        <form className='form_edit_item' onSubmit={handleSubmit}>
            <div className="btn_close_edit_form" onClick={onClose}>&times;</div>

            <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}></input>

            <textarea className='custom_textarea' value={note} onChange={e => setNote(e.target.value)} />

            <div className='row'>
                <input type='date' value={date} onChange={e => setDate(e.target.value ? e.target.value : '')}></input>
                <button className='btn_todo'>Edit</button>
            </div>
        </form>
    );
}
