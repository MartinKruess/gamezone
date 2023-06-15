import { CreateItem } from "./createItem/createItem"

export const Dashboard = () => {
 

    return(
        <section className="dashboardContainer">
            <article className="dashboard">
                <div className="dashboardMenu">
                    <h2>Celest Abyss</h2>
                    <p>Create new Article</p>
                </div>
                <div className="dashboardMenu">
                    <h2>Merch Shop</h2>
                    <p>Create new Merch</p>
                </div>
                <div className="dashboardMenu">
                    <h2>Celest Abyss</h2>
                    <p>Create new Article</p>
                </div>
            </article>
            <CreateItem />
        </section>
    )
}

