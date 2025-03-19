interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: ()=> void;
}

const CustomButton:React.FC<CustomButtonProps> = ({
    label,
    className,
    onClick
})=>{
    return(
        <div
            onClick={onClick} 
            className={`py-4 bg-[var(--airbnb)] hover:bg-[var(--airbnb-black)] text-white text-center rounded-xl transition cursor-pointer ${className}`}>
            {label}
        </div>
    )
}

export default CustomButton;