import './articleForm.css'

export default function PostForm () {
    return (
        <form>
            <label for="title">Title</label>
            <input id="title" name="title" type="text" />
            <br />
            <label for="abstract">Abstract</label>
            <input id="abstract" name="abstract" type="text"/>
            <br />
            <label for="article">Article Text</label>
            <input id="article" name="article" type="text" />
            <br />
            <label for="tags">Tags</label>
            <input id="tags" name="tags" type="text" />
            <input type="submit" />
        </form>
    )
}
