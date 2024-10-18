
const Champ = ({ name, type = "text" }) => {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className="my-[15px]">
            <p className="text-gris-200 pb-[8px]">{capitalize(name)}</p>
            <input autoComplete="off" className="outline-none
            border-solid border-gris-50 border-[1px]
            px-[15px] py-[10px]
            rounded-xl w-full text-gris-100 text-[15px]"
            name={name} type={type} />
        </div>
    )
}

export default Champ