import { CreateArticleCA } from "./createArticleCA"
import { CreateItem } from "./createItem/createItem"

export const Dashboard = () => {
 

    return(
        <section className="dashboardContainer">
            <article className="dashboard">
                <a className="dashboardMenu" href="#merch">
                    <h2>Merch</h2>
                    <i class="fa-solid fa-plus"></i>
                </a>
                <a className="dashboardMenu" href="#ca">
                    <h2>Blog Post</h2>
                    <i class="fa-solid fa-plus"></i>
                </a>
                <div className="dashboardMenu">
                    <h2>Termin 3</h2>
                    <p>Create new Article</p>
                </div>
            </article>
            <article>
                <CreateItem />
                <CreateArticleCA />
            </article>
        </section>
    )
}

