import React from "react";

const SearchBar = ({keyword, results, Selected, updateField, onKeyDown, textInput, autocomplete}) => { 
    const updateText = text => { // 자동검색어 클릭했을 경우 검색어 완성
        updateField("keyword", text, false); // 자동완성 텍스트를 검색어로 변경하고 검색하지 않는다.
        updateField("results", []); // 검색결과를 초기화 시켜준다.
    };
    
    var renderResults;
    const arr = results['results']; // 처음엔 빈 배열 / 자동완성 텍스트가 있으면 배열에 텍스트가 채워짐
    if(arr) {

        renderResults = arr.map(((item, idx) => { // arr 에 검색어에 대한 결과가 담기면, SearchView 호출 
            return (
                Selected === 'wordclass' ? 
                <SearchView
                    key={idx}
                    word={item.word_class}
                    updateText={updateText}
                    textInput={el => textInput.current[idx] = el}
                    autocomplete={autocomplete}
                />
                :
                <SearchView
                    key={idx}
                    word={item.keyword}
                    updateText={updateText}
                    textInput={el => textInput.current[idx] = el}
                    autocomplete={autocomplete}
                />
            );
        }));
    }

    // onChange를 사용하여 글자를 입력할때마다 updateField호출하고 renderResults를 그린다.
    return (
        <div className="col-6 inputArea">
            <input
                id="search"
                className="form-control"
                placeholder="검색어를 입력하세요"
                value={keyword || ''}
                onChange={e => updateField("keyword", e.target.value)}
                onKeyDown={e => onKeyDown(e, results['results'] ? results['results']:0)}
            />
            <div className={`autocomplete-items ${keyword ? 'active':''}`} >{renderResults}</div>
        </div>
    );
};

// 검색된 아이템 "word" 출력: 결과값을 클릭하면 updateText를 호출하여 input에 word를 표시
const SearchView = ({ word, updateText, textInput, autocomplete}) => {
    return (
      <div className={`autocomplete-item ${word === autocomplete ? 'active':''}`} onClick={() => updateText(word)} ref={textInput}>{word}</div>
    //   <div className='autocomplete-item' onClick={() => updateText(word)} ref={textInput} tabindex="0">{word}</div>
    );
};



export default SearchBar;