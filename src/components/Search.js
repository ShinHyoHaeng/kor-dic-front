import React, { useRef, useState } from 'react'

function Search() {

    const [query, setQuery] = useState(""); // value=""와 동일
    const queryRef = useRef();

    const Search = () => {
        const searchQuery = queryRef.current.value; // 현재 검색한 단어 
        setQuery(searchQuery); 
        console.log(searchQuery);
    }

    const onKeyPressStart = (e) => { // 엔터키 이벤트
        if(e.key === 'Enter'){
            Search();
        }
    };

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
                <input type="text" placeholder="단어를 입력해주세요" name="" id="search" className="form-control" ref={queryRef} onKeyPress={onKeyPressStart} autoFocus/>
            </div>
            <div className="col-3 buttonArea">
                <input type="submit" className="form-control" name="" id="submit" value="검색" onClick={Search}/>
            </div>
        </div>   
    )
}

export default Search
