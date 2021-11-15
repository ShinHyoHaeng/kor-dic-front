import SearchBar from "./SearchBar";

const Autocomplete = ({keyword, results, updateField}) => {
    const updateText = text => {
        updateField("keyword", text, false);
        updateField("results", []);
    }

    var renderResults;
    const arr = results['results'];
    if(arr) {
        // arr 에 검색어에 대한 결과가 담기면, SearchView 호출 
        renderResults = arr.map((item => {
            return (
                <SearchView
                    updateText={updateText}
                    word={item.word}
                />
            );
        }));
    }
    // onChange를 사용하여 글자를 입력할때마다 updateField호출하고 renderResults를 그린다.
    return (
        <div className="auto">
            <SearchBar type="text" placeholder="단어를 입력해주세요" id="search" className="form-control" value={keyword || ''} onChange={(e)=> updateField("keyword", e.target.value)}/>
            <div className="search-results">{renderResults}</div>
        </div>
    );
};

// 검색된 아이템 "naem" "code" 출력
// 결과값을 클릭하면 updateText를 호출하여 input에 name을 표시
const SearchView = ({ word, index, updateText }) => {
    //console.log('search view:', name);

    return (
        <div
        onClick={() => updateText(word)}
        className={`search-preview ${index === 0 ? "start" : ""}`}
        >
        <div className="first">
            <p className="word">{word}</p>
        </div>
        </div>
    );
};



export default Autocomplete;