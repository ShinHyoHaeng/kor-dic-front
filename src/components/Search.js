import { useRef, useState } from 'react/cjs/react.development';
import SearchBar from './SearchBar';
import datas from './Keyword.js';

const Search = (props) => {
    // 검색어 자동완성에 쓸 데이터
    const [data, setData] = useState(datas);
    // 입력창에 입력한 텍스트 
    const [Query, setQuery] = useState(""); // value=""와 동일
    // 검색어 자동완성 텍스트
    const [results, setResult] = useState([]);
    const queryRef = useRef();
    const [Selected, setSelected] = useState("none");
    const [exceptionType, setexceptionType] = useState('');
    const [isException, setException] = useState(false);
  
    // 필드를 업데이트 
    const updateField = (field, value, update = true) => {
        // onSearch에 입력창에 입력된 텍스트을 넘긴다.
        if (update) onSearch(value);
        // 필드가 keyword면 keyword값 변경 / results면 results값 변경
        if (field === 'keyword') { setQuery(value); }
        if (field === 'results') { setResult(value); }
    }
  
    // 입력된 텍스트로 data 배열에서 찾아 매칭되는 결과들을 저장 
    const onSearch = text => {
        var results = data.filter(item => true === matchName(item.word, text));
        setResult({ results });
    };

    // 검색해야할 문자열을 키워드와 비교하여 매칭이 되는지 체크 
    // word는 데이터베이스에 있는 단어 / keyword는 입력한 단어
    const matchName = (word, keyword) => {
        var keyLen = keyword.length;
        // 데이터베이스에 있는 단어를 입력한 텍스트의 개수만큼 자른다.
        word = word.toLowerCase().substring(0, keyLen);
        // 입력된 텍스트가 없으면 false
        if (keyword === "") return false;
        // 데이터베이스에 있는 단어 앞부분과 입력된 텍스트를 비교해서 일치하면 true 아니면 false
        return word === keyword.toString().toLowerCase();
    };
    const Options = [
        {value:"none", name:"전체"},
        {value:"word", name:"단어"},
        {value:"mean", name:"의미"},
        {value:"wordclass", name:"품사"}
    ]
    //select
    const SelectBox = (props) => {
        const handleSelect = (e) => {
            setSelected(e.target.value)
            console.log(e.target.value);
        }
        return(
            <select value={Selected} name="select" className="form-control" id="select" onChange={handleSelect}>
                {props.options.map((options) => (
                    <option key={options.value} value={options.value} defaultValue={props.defaultValue === options.value}>{options.name}</option>
                ))}
            </select>
        )
    }

    const onClick = () => {
        props.handleInput(Query)
    }

    // enter키 이벤트 추가
    const onKeyEvent = (e) => {
        if(e.key === 'Enter'){
            onClick()
        } else if (e.keyCode === 40) {
            console.log('1')
            queryRef.current.focus()
        } else if (e.keyCode === 38) {
            console.log('2')
            queryRef.current.focus()
        }
    }

    return (
        <div className="searchInner">
            <div className="col-3 selectArea">
                {/* Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                <SelectBox options={Options} defaultValue="none"></SelectBox>
            </div>
                <SearchBar keyword={Query} results={results} updateField={updateField} onKeyPress={e => onKeyEvent(e)} textInput={queryRef}></SearchBar>
                {/* <SearchBar handleChange={(e)=>onFilter(e)} onKeyPress={onKeyEvent}></SearchBar> */}
            <div className="col-3 buttonArea">
                <input 
                    type="submit" 
                    className="form-control" 
                    id="submit" 
                    value="검색"
                    onClick={()=>onClick()}
                />
            </div>
        </div>   
    );
}

export default Search;