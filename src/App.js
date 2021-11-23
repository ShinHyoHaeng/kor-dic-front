import './App.css'
import React, {Component} from 'react';
import Result from './components/Result'
import Search from './components/Search'
import NoResults from './components/NoResults';

class App extends Component{

    // 생성자 함수
    constructor(props){
        console.log('constructor')
        super(props)
        this.state = {
            loading:true,
            words:[],
            Query:'',
            isException:false,
            exceptionType:'',
            selected: 'none'
        }
    }

    // 컴포넌트가 생성되었을 때 서버에서 데이터 가져오기
    componentDidMount(){
        const BASE_URL = 'https://dictionary-search-haeng.herokuapp.com/api/words';
        fetch(BASE_URL)
        .then(res => res.json())
        .then(result => {
            const {words} = result
            this.setState({loading: false, words})
        })
    }

    // input에 입력한 값을 버튼 클릭시 동작하도록 하는 이벤트
    handleInput = (keyword) => {
        if(/[a-z]/i.test(keyword))
        this.setState({Query:'',isException:true,exceptionType:'eng'})
        else if(/\d/.test(keyword))
        this.setState({Query:'',isException:true,exceptionType:'num'})
        else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(keyword))
        this.setState({Query:'',isException:true,exceptionType:'str'})
        else
        this.setState({Query: keyword,isException:false});
    }

    // select에서 선택한 값에 맞춰 state 변경
    changeSelected = (selected) => {
        if (selected === 'none') {
            this.setState({selected: 'none'})
        } else if (selected === 'word') {
            this.setState({selected: 'word'})
        } else if (selected === 'mean') {
            this.setState({selected: 'mean'})
        } else if (selected === 'wordclass') {
            this.setState({selected: 'wordclass'})
        }
    }

    render(){
        const {words, loading, selected, exceptionType, isException} = this.state

        let filterWords;
        
        if (selected === 'none') { // selelct에서 '전체' 선택 시
            filterWords = this.state.words.filter((word)=>
                word.keyword.includes(this.state.Query)
                || word.meaning.includes(this.state.Query)
                || word.word_class.includes(this.state.Query)
            );
        } else if (selected === 'word') {  // selelct에서 '단어' 선택 시
            filterWords = this.state.words.filter((word)=>
                word.keyword.includes(this.state.Query)
            );
        } else if (selected === 'mean') {  // selelct에서 '의미' 선택 시
            filterWords = this.state.words.filter((word)=>
                word.meaning.includes(this.state.Query)
            );
        } else if (selected === 'wordclass') {  // selelct에서 '품사' 선택 시
            filterWords = this.state.words.filter((word)=>
                word.word_class.includes(this.state.Query)
            );
        }

        if(loading){ // loading의 상태값이 true이면
            return(
                <div className="loaderWrapper">
                    <div className="loader">loading...</div>
                </div>
            )
        }else{
            return (
                <div className="wrapper">
                    <div className="searchArea">
                        <div className="container">
                            <div className="row">
                                <Search words={words} handleInput={this.handleInput} changeSelected={this.changeSelected}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="resultArea">
                        <div className="container">
                            <div className="row">
                                <div className="resultInner" id="result" >
                                {
                                        isException?(
                                            <NoResults exceptionType={exceptionType}/>
                                        ):(filterWords.map(word => {
                                            return(
                                                <Result
                                                key={word._id}
                                                seq={word.seq}
                                                keyword={word.keyword}
                                                link={word.link}
                                                hanja={word.hanja}
                                                word_class={word.word_class}
                                                meaning={word.meaning}
                                                >
                                                </Result>
                                            )
                                        }))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } 
    }
}

export default App;
