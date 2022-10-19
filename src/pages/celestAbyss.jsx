export const CelestAbyss = () => {
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date();
        const dateOfDay = today.toLocaleDateString("de-DE")
        

    const createArticle = (dateOfDay) => {

        return(
            <div>
                <form action="">
                    <label htmlFor="">Titel</label><input type="text" /><label htmlFor="">{dateOfDay}</label>
                    <label htmlFor="">Content</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }

    return (
        <section>
            CELESTABYSS <br /><br />
            <button onClick={() => createArticle(dateOfDay)}
            style={{padding: '0.5rem 1rem', border: 'solid red', borderRadius: '1rem'}}>
                Create Article
            </button>
            <div></div>
        </section>
    )
}