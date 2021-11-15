import './App.css'
import React, {Component, useState, useRef} from 'react';
import Result from './components/Result'
import Search from './components/Search'
import NoResults from './components/noResult';

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
          exceptionType:''
      }
  }

  // 이벤트 핸들러 함수
  changeName = () => {
      this.setState({name:"name changed"})
  }

  // 컴포넌트가 생성되었을 때
  componentDidMount(){
      const BASE_URL = 'https://dictionary-search-haeng.herokuapp.com/api/words';
      console.log("mount")
      console.log("-----------------")
      // 서버에서 데이터 가져오기
      fetch(BASE_URL)
      .then(res => res.json())
      .then(result => {
          console.log(result)
          const {words} = result
          this.setState({loading: false, words})
      })
  }

  // 컴포넌트가 업데이트 되었을 때
  componentDidUpdate(){
      console.log("update")
  }

  // 컴포넌트가 제거되었을 때
  componentWillUnmount(){
      console.log("unmount")
  }

    // input에 입력하자마자 검색
    // handleInput = (e) => {
    //     this.setState({Query: e.target.value});
    // }

    // input에 입력한 값을 버튼 클릭시 동작하도록 하는 이벤트
    handleInput = (Query) => {
        if(/[a-z]/i.test(Query))
        this.setState({Query:'',isException:true,exceptionType:'eng'})
        else if(/\d/.test(Query))
        this.setState({Query:'',isException:true,exceptionType:'num'})
        else if(/[`!@#$%^&*()_+\-=\[\]{};':"\\|.<>\/?~]/.test(Query))
        this.setState({Query:'',isException:true,exceptionType:'str'})
        else
        this.setState({Query: Query,isException:false});
    }

  render(){

    const Query = this.state;
    const filterWords = this.state.words.filter((word)=>
        word.keyword.includes(this.state.Query)
        || word.meaning.includes(this.state.Query)
        || word.word_class.includes(this.state.Query)
    );
    

      const {loading, words, exceptionType, isException} = this.state
      if(loading){ // loading의 상태값이 true이면
          return(
              <div>
                  <h1>loading...</h1>
              </div>
          )
      }else{
          return (
            <div className="wrapper">
                <div className="searchArea">
                    <div className="container">
                        <div className="row">
                            <Search handleInput={this.handleInput}/>
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
