export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-2 bg-indigo-500 dark:bg-indigo-600 border border-transparent rounded-md font-semibold text-xs text-white dark:text-white-500 uppercase tracking-widest hover:bg-indigo-700 dark:hover:bg-indigo focus:bg-indigo-700 dark:focus:bg-indigo active:bg-gray-900 dark:active:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-indigo-400 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
