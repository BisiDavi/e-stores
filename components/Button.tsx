interface ButtonProps {
    text: string;
    className?: string;
}
export default function Button({ text, className }: ButtonProps) {
    return (
        <button
            className={`bg-red-400 hover:bg-red-600 text-white bordered rounded w-40 h-12 my-6 text-xl ${className}`}
        >
            {text}
        </button>
    );
}
