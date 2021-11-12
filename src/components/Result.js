import React from 'react'

function Result({seq, keyword, link, hanja, word_class, meaning}) {
    return (
        <div className="item move-up">
            <div className="word">{keyword}<sup>{seq}</sup><p className="hanja">{hanja}</p> <a href={link}>더 보기  &raquo;</a></div>
            <p className="description"><span>{word_class}</span> {meaning}</p>
        </div>
    )
}

export default Result
