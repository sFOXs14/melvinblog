export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded bg-white-500 border-gray-400 text-indigo-600 shadow-sm focus:ring-indigo-300 ' +
                className
            }
        />
    );
}
