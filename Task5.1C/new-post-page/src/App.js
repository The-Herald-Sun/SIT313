import TextFucker from './components/textFucker.js'
import GreyBreak from './components/greyBreak.js'
import QuestionForm from './components/questionForm.js'
import ArticleForm from './components/articleForm.js'
import {useState} from "react"
import './App.css';

function App() {
    const [formType, setFormType] = useState(QuestionForm)
    return (
        <div className="App">
            <GreyBreak><h1>New Post</h1></GreyBreak>
            <form>
                <label for="post-type">Select Post Type: </label>
                <input name="post-type" type="radio" value="question" id="question"  onClick={() => setFormType(QuestionForm)}/>
                <label for="question">Question</label>
                <input name="post-type" type="radio" value="article" id="article" onClick={() => setFormType(ArticleForm)}/>
                <label for="article">Article</label>
            </form>
            <GreyBreak><h1>What do you want to ask or share</h1></GreyBreak>
            {formType}
            {/* <TextFucker>You know what that means!</TextFucker> */}
        </div>
    );
}

export default App;
