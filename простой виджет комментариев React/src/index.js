import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Comment from './comment.js'


//React - component 

class Commentslist extends React.Component {
    constructor() {
        super(); // конструктор из React.Component

        this.state = {
            comments: [],
            newComment: '',
            newName: ''
        };
    }

    //дополнительный рендеринг
    componentDidMount() {

        if (localStorage.getItem('comments')) {

            this.setState({ ...JSON.parse(localStorage.getItem('comments')) })

        }
    }

    addComment() {
        const comments = this.state.comments;
        let dateobj = new Date();

        comments.push({
            name: this.state.newName,
            text: this.state.newComment,
            date: `${dateobj.toLocaleDateString()}`,
            time: `${dateobj.toLocaleTimeString()}`,
        });

        this.setState({
            comments,
            newComment: '',
            newName: ''
        },
            () => localStorage.setItem('comments', JSON.stringify(this.state))
        );

    }

    removeComment(index) {

        const comments = this.state.comments;
        comments.splice(index, 1);
        let toLocalStor = JSON.stringify(comments);

        localStorage.setItem('comments', toLocalStor);
        this.setState({ comments: comments })

    }


    render() {
        return (
            <div>
                <h2 className="title">Комментарии:</h2>
                <div>
                    {
                        this.state.comments.map((comment, i) => {

                            return (
                                <div className="comment__item">
                                    <Comment
                                        key={i}
                                        name={comment.name}
                                        text={comment.text}
                                        date={comment.date}
                                        time={comment.time}
                                    />
                                    <button onClick={() => this.removeComment()}> Удалить </button>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="new__comment">
                    <input type="name" className="name" placeholder="Ваше имя"
                        value={this.state.newName}
                        onChange={ev => {
                            this.setState({ newName: ev.target.value });
                        }}
                    />
                    <textarea type="text" className="text"
                        placeholder="Новый комментарий"
                        value={this.state.newComment}
                        onChange={ev => {
                            this.setState({ newComment: ev.target.value });
                        }}
                    />
                </div>
                <button onClick={ev => { this.addComment() }}> Добавить</button>
            </div>
        );
    }
}

ReactDOM.render(
    <Commentslist />,
    document.querySelector('#app')
)
