import React, { Component } from 'react'
export class Search extends Component {


    render() {
        return (
            <div className="searchInner">
                <div className="col-3 selectArea">
                    <select name="select" className="form-control" id="select">
                        <option value="none" selected>전체</option>
                        <option id="word" value="word">단어</option>
                        <option id="mean" value="mean">의미</option>
                        <option id="wordclass" value="wordclass">품사</option>
                    </select>
                </div>
                <div className="col-6 inputArea">
                    <input type="text" placeholder="단어를 입력해주세요" name="" id="search" value="" className="form-control" />
                </div>
                <div className="col-3 buttonArea">
                    <input type="submit" className="form-control" name="" id="submit" value="검색" />
                </div>
            </div>   
        )
    }
}

export default Search
