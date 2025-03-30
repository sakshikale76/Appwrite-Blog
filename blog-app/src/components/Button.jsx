
function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className='',  //user can also pass classname
    ...props // r properties like placeholder
}) {
    
    return(
        <button className={`px-4 py-2 rounded-lg ${className} ${bgColor} ${textColor}`} {...props}>{children}</button>
    )
}

export default Button