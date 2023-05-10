export const Termine = () => {
    const dateArr = [
        {
            title: "Gamescom",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "26.08.2023",
        },
        {
            title: "24h Stream",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "02.10.2023",
        },
        {
            title: "Sylvester",
            details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nulla molestias amet voluptate iste ab?",
            date: "31.12.2023",
        }
    ]

    return(
        <article className="terminContainer">
            {dateArr.map((date) => (
                <div className="dateBG">
                <div className="date">
                    <h2>{date.title}</h2>
                    <p>{date.details}</p>
                    <p className="dateText">{date.date}</p>
                </div>
                </div>
            ))}
        </article>
    )
}