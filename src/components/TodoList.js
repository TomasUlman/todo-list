import TodoItem from './TodoItem';

/**
 * TodoList component that renders a list of todo items.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.list - The list of todo items.
 * @param {Function} props.onCheck - Function to toggle the completion status of an item.
 * @param {Function} props.onDelete - Function to delete an item.
 * @param {Function} props.onEdit - Function to edit an item.
 * @returns {JSX.Element} The rendered TodoList component.
 */
export default function TodoList({ onDelete, onCheck, onEdit, list }) {
    return (
        <ul className='todo_list'>
            {list.map(item => <TodoItem
                item={item}
                key={item.id}
                onCheck={onCheck}
                onDelete={onDelete}
                onEdit={onEdit} />
            )}
        </ul>
    );
}
