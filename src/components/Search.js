import React, { useRef, useState } from 'react'

function Search({handleInput}) {

    const [Query, setQuery] = useState(""); // value=""와 동일
    const queryRef = useRef();
    const [Selected, setSelected] = useState("none");


    //select
    const Options = [
        {value:"none", name:"전체"},
        {value:"word", name:"단어"},
        {value:"mean", name:"의미"},
        {value:"wordclass", name:"품사"}
    ]
    const SelectBox = (props) => {
        const handleSelect = (e) => { 
            setSelected(e.target.value);
            console.log(e.target.value);
        }
        return(
            <select name="select" className="form-control" id="select" onChange={handleSelect}>
                {props.options.map((option) => (
                    <option key={option.value} value={option.value} defaultValue={props.defaultValue === option.value}>{option.name}</option>
                ))}
            </select>
        )
    }

    const onFiliter = (e) => {
        handleInput(e)
    }

    return (
        <div className="searchInner">
            <div className="col-3 selectArea">
                {/* Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>. */}
                <SelectBox options={Options} defaultValue="none"></SelectBox>
            </div>
            <div className="col-6 inputArea">
                <input type="text" placeholder="단어를 입력해주세요" id="search" className="form-control" onChange={(e)=>onFiliter(e)} autoFocus/>
            </div>
            <div className="col-3 buttonArea">
                <input type="submit" className="form-control" id="submit" value="검색"/>
            </div>
        </div>   
    )
}

export default Search
