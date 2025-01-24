import { useState } from 'react';
import Edit from './../assets/edit.png';
import TrashCan from './../assets/trash-can.png';
import IconBtn from './IconBtn';
import EditItemForm from './EditItemForm';

/**
 * TodoItem component that displays a single todo item.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.item - The todo item.
 * @param {string} props.item.id - The ID of the item.
 * @param {string} props.item.title - The title of the item.
 * @param {string} props.item.note - The note of the item.
 * @param {string} props.item.date - The date of the item.
 * @param {boolean} props.item.isDone - The completion status of the item.
 * @param {Function} props.onCheck - Function to toggle the completion status of the item.
 * @param {Function} props.onDelete - Function to delete the item.
 * @param {Function} props.onEdit - Function to edit the item.
 * @returns {JSX.Element} The rendered TodoItem component.
 */
export default function TodoItem({ item, onCheck, onDelete, onEdit }) {
    const [itemIsOpen, setItemIsOpen] = useState(false);
    const [editIsOpen, setEditIsOpen] = useState(false);

    const dateToday = new Date();
    const dateTodo = parseDate(item.date);

    /**
 * Parses a date string in the format 'dd.mm.yyyy' to a Date object.
 *
 * @param {string} date - The date string to parse.
 * @returns {Date} The parsed Date object.
 */
    function parseDate(date) {
        const [day, month, year] = date.split('.').map(Number);
        return new Date(year, month - 1, day);
    }

    /**
 * Toggles the visibility of the todo item details.
 *
 * @param {Event} e - The click event.
 */
    function handleOpenItem(e) {
        const isLabel = e.target.tagName === 'LABEL';
        const isInItemButtons = e.target.closest('.item_btns') !== null;

        if (isLabel || isInItemButtons) return;

        setItemIsOpen(open => !open);
    }

    /**
 * Toggles the visibility of the edit form.
 *
 * @param {boolean} [open=true] - Whether to open or close the edit form.
 */
    function handleOpenEdit(open = true) {
        setEditIsOpen(open => !open);
        setItemIsOpen(open);
    }

    return (
        <li className={`item ${dateToday > dateTodo ? 'delayed' : ''} ${item.isDone ? 'done' : ''}`
        } onClick={handleOpenItem} >
            {!editIsOpen ? (
                <>
                    <div className='item_row'>
                        <input
                            type="checkbox"
                            id={`checkbox-${item.id}`}
                            checked={item.isDone}
                            onChange={() => onCheck(item.id)}
                        />
                        <label htmlFor={`checkbox-${item.id}`}></label>


                        <span>{item.title}</span>

                        <div className='item_btns'>
                            <IconBtn onClick={handleOpenEdit}><img src={Edit} alt='edit' width='15' height='15' /></IconBtn>
                            <IconBtn onClick={() => onDelete(item.id)}><img src={TrashCan} alt='delete' width='15' height='15' /></IconBtn>
                        </div>
                    </div>
                    <div>
                        {
                            itemIsOpen &&
                            <div>
                                <p>{item.note}</p>
                                <p>{`${item.date}`}</p>
                            </div>
                        }
                    </div>
                </>
            ) : (<EditItemForm item={item} onClose={handleOpenEdit} onEdit={onEdit} onEditClose={handleOpenEdit} />)
            }
        </li >
    );
}


