import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    disabled?: boolean;
    handleClick?: () => void;
    styles: string;
    type?: ButtonType;
    title: string;
}

function Button(props: ButtonProps) {
    return (
        <button
            onClick={props?.handleClick}
            className={`${props.styles} middle none center rounded-lg bg-indigo-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            type={props?.type}
            disabled={props?.disabled}
        >
            {props.children}
        </button>
            )
}

export default Button;