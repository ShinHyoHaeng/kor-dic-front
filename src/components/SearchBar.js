const SearchBar = (props) => { 
    const updateText = text => { // 자동검색어 클릭했을 경우 검색어 완성
        props.updateField("keyword", text, false); // 자동완성 텍스트를 검색어로 변경하고 검색하지 않는다.
        props.updateField("results", []); // 검색결과를 초기화 시켜준다.
    };
    
    var renderResults;
    const arr = props.results['results']; // 처음엔 빈 배열 / 자동완성 텍스트가 있으면 배열에 텍스트가 채워짐
    if(arr) {
        renderResults = arr.map((item => { // arr 에 검색어에 대한 결과가 담기면, SearchView 호출 
            return (
                <SearchView
                    word={item.word}
                    updateText={updateText}
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
                value={props.keyword || ''}
                onChange={e => props.updateField("keyword", e.target.value)}
                onKeyPress={e => props.onKeyPress(e)}
            />
            <div className={`autocomplete-items ${props.keyword ? 'active':''}`} ref={props.textInput}>{renderResults}</div>
        </div>
    );
};

// 검색된 아이템 "word" 출력: 결과값을 클릭하면 updateText를 호출하여 input에 word를 표시
const SearchView = ({ word, updateText }) => {
    return (
      <div onClick={() => updateText(word)}>{word}</div>
    );
};



export default SearchBar;