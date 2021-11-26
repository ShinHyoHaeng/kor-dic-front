import { useRef, useState } from 'react';
import SearchBar from './SearchBar';

const Search = ({words, handleInput, changeSelected}) => {
    // 입력창에 입력한 텍스트 
    const [Query, setQuery] = useState(""); // value=""와 동일
    const [results, setResult] = useState([]); // 검색어 자동완성 텍스트
    const [Selected, setSelected] = useState("none");
    const [idx, setIdx] = useState(0);
    const queryRef = useRef([]);
  
    // 필드를 업데이트 
    const updateField = (field, value, update = true) => {
        if (update) onSearch(value); // onSearch에 입력창에 입력된 텍스트을 넘긴다.
        if (field === 'keyword') { setQuery(value); } // 필드가 keyword면 keyword값 변경 / results면 results값 변경
        if (field === 'results') { setResult(value); }
    }
    
    // 입력된 텍스트로 data 배열에서 찾아 매칭되는 결과들을 저장 
    const onSearch = text => {
        if (Selected === 'none' || Selected === 'word') {
            const datas = words.filter((word, idx, arr) => {
                return arr.findIndex((item) => item.keyword === word.keyword) === idx
            });
            var results = datas.filter(item => {
                return true === matchName(item.keyword, text)
            });
            setResult({ results });
        } else if (Selected === 'wordclass') {
            const datas = words.filter((word, idx, arr) => {
                return arr.findIndex((item) => item.word_class === word.word_class) === idx
            });
            var results = datas.filter(item => {
                return true === matchName(item.word_class, text)
            });
            setResult({ results });
        }
    };

    // 검색해야할 문자열을 키워드와 비교하여 매칭이 되는지 체크 
    const matchName = (word, keyword) => {  // word는 데이터베이스에 있는 단어 / keyword는 입력한 단어
        var keyLen = keyword.length;
        word = word.toLowerCase().substring(0, keyLen); // 데이터베이스에 있는 단어를 입력한 텍스트의 개수만큼 자른다.
        if (keyword === "") return false; // 입력된 텍스트가 없으면 false
        return word === keyword.toString().toLowerCase(); // 데이터베이스에 있는 단어 앞부분과 입력된 텍스트를 비교해서 일치하면 true 아니면 false
    };

    // select option
    const Options = [
        {value:"none", name:"전체"},
        {value:"word", name:"단어"},
        {value:"mean", name:"의미"},
        {value:"wordclass", name:"품사"}
    ]

    //select 구현 및 이벤트 
    const SelectBox = ({options, defaultValue}) => {
        const handleSelect = (e) => {
            setSelected(e.target.value)
        }
        return(
            <select value={Selected} name="select" className="form-control" id="select" onChange={handleSelect}>
                {options.map((options) => (
                    <option key={options.value} value={options.value} defaultValue={defaultValue === options.value}>{options.name}</option>
                ))}
            </select>
        )
    }

    // 버튼 클릭 이벤트
    const onClick = () => {
        handleInput(Query)
        changeSelected(Selected)
    }

    // 인덱스 조절
    const decreaseIndex = () => {
		const nextIndex = idx - 1
		setIdx(nextIndex < 0 ? 0 : nextIndex)
	}
	const increaseIndex = (autocomplete) => {
		const nextIndex = idx + 1
		setIdx(nextIndex > autocomplete - 1 ? autocomplete - 1 : nextIndex)
	}

    // 키보드 이벤트
    const onKeyEvent = (e, num) => {
        if (num.length === 0) setIdx(0)
        if (e.key === 'Enter'){
            if (num.length > 0) {
                queryRef.current[idx].click()
                setIdx(0)
            } else {
                onClick()
                setIdx(0)
            }
        } else if (e.keyCode === 38) {
            if (num.length > 0) {
                decreaseIndex()
                queryRef.current[idx].focus()
            }
        } else if (e.keyCode === 40) {
            if (num.length > 0) {
                increaseIndex(num.length)
                queryRef.current[idx].focus()
            }
        } 
    }

    console.log(queryRef.current)
    return (
        <div className="searchInner">
            <div className="col-3 selectArea">
                <SelectBox options={Options} defaultValue="none"/>
            </div>
                <SearchBar 
                    keyword={Query} 
                    results={results} 
                    Selected={Selected}
                    updateField={updateField} 
                    onKeyDown={onKeyEvent} 
                    textInput={queryRef}
                    autocomplete={queryRef && queryRef.current[idx] ? queryRef.current[idx].innerHTML:''}/>
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