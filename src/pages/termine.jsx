export const Termine = () => {
    const dateArr = [
        {
            title: "Gamescom",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "25.08.2023",
        },
        {
            title: "24h Stream",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "03.10.2023",
        },
        {
            title: "Sylvester",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "31.12.2023",
        }
    ]

    return(
        <article className="terminContainer" style={{border: "solid"}}>
            {dateArr.map((date) => (
                <div className="date">
                    <h3>{date.title}</h3>
                    <p>{date.details}</p>
                    <p className="date">{date.date}</p>
                </div>
            ))}
        </article>
    )
}