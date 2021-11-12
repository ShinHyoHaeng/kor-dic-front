import './App.css'
import React, {Component} from 'react';
import Result from './components/Result'
import Search from './components/Search';



class App extends Component{
  
  // 생성자 함수
  constructor(props){
      console.log('constructor')
      super(props)
      this.state = {
          loading:true,
          words:[]
      }
  }

  // 이벤트 핸들러 함수
  changeName = () => {
      this.setState({name:"name changed"})
  }

  // 컴포넌트가 생성되었을 때
  componentDidMount(){
      const BASE_URL = 'https://dic-search-kor.herokuapp.com/api/words/';
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

  render(){
      const {loading, words} = this.state
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
                            <Search/>
                        </div>
                    </div>
                </div>

                <div className="resultArea">
                    <div className="container">
                        <div className="row">
                            <div className="resultInner" id="result" >
                                {words.map(word => {
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
                                })}
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
