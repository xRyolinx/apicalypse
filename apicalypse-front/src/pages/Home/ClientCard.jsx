
const ClientCard = ({className, img, name, content}) => {
    const h = 80

    // component
    return (
    <article className={`bg-gren-200
    min-w-[350px] w-[30%]
    ${className}`}
    style={{paddingTop: `${h/2}px`}}
    >

        <div className="relative w-full bg-white px-[40px] pb-[30px]
        rounded-2xl"
        style={{paddingTop: `${h/2}px`}}    
        >
            <img className={`absolute left-1/2 -translate-x-1/2`} src={img} alt="" 
            style={{height: `${h}px`, top: `-${h/2}px`}}
            />
            <p className="text-center py-[40px]">
                {`"${content}"`}
            </p>

            <p className="text-center font-bold">
                {`~ ${name}`}
            </p>
        </div>
        
    </article>
  )
}

export default ClientCard