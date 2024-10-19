import React from 'react'

const StatCard = ({ title, content }) => {
    return (
        <article className="bg-gren-200 w-[40%]">
            <p className="text-[40px] text-gris-300 font-semibold">{title}</p>
            <p className="text-[15px] text-gris-100">{content}</p>
        </article>
    )
}

export default StatCard