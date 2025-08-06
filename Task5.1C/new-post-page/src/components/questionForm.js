import './questionForm.css'

export default function QuestionForm() {
    return (
        <div class="question-form">
            <form>
                <label for="title">Title </label>
                <input id="title" name="title" type="text"/>
                <br/>
                <label for="problem">Describe your problem</label>
                <input id="problem" name="problem" type="text" />
                <br />
                <label for="tags">Tags</label>
                <input id="tags" name="tags" type="text" />
                <input type="submit" value="Post"/>
            </form>
        </div>
    )
}
