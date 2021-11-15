const SearchBar = (props) => {
    // 자동검색어 클릭했을 경우 검색어 완성
    const updateText = text => {
        // 자동완성 텍스트를 검색어로 변경하고 검색하지 않는다.
        props.updateField("keyword", text, false);
        // 검색결과를 초기화 시켜준다.
        props.updateField("results", []);
    };
    
    var renderResults;
    // 처음엔 빈 배열 / 자동완성 텍스트가 있으면 배열에 텍스트가 채워짐
    const arr = props.results['results'];
    console.log(arr);
    if(arr) {
    // arr 에 검색어에 대한 결과가 담기면, SearchView 호출 
        renderResults = arr.map((item => {
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
                placeholder="Search"
                value={props.keyword || ''}
                onChange={e => props.updateField("keyword", e.target.value)}
                onKeyPress={e => props.onKeyPress(e)}
            />
            <div className="autocomplete-items" ref={props.textInput}>{renderResults}</div>
        </div>
    );
};

// 검색된 아이템 "word" 출력
// 결과값을 클릭하면 updateText를 호출하여 input에 word를 표시
const SearchView = ({ word, updateText }) => {
    return (
      <div
        onClick={() => updateText(word)}
      >
          {word}
      </div>
    );
};



export default SearchBar;