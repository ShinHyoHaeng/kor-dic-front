import { Error } from '@material-ui/icons'
import React, { useState } from 'react'

function NoResults({exceptionType}) {
    if(exceptionType === 'num'){
        return(
            <div className="exceptionArea">
                <Error className="icon"/>
                <p>검색어에 <span>숫자</span>가 들어있습니다.</p>
                <p>다시 검색해주세요.</p>
            </div>
        )
    }
    else if(exceptionType==='eng'){
        return(
            <div className="exceptionArea">
                <Error className="icon"/>
                <p>검색어에 <span>영어</span>가 들어있습니다.</p>
                <p>다시 검색해주세요.</p>
            </div>
        )
    }
    else {
        return(
            <div className='exceptionArea'>
                <Error className="icon"/>
                <p>검색어에 <span>특수문자</span>가 들어있습니다.</p>
                <p>다시 검색해주세요.</p>
            </div>
        )
    }
}

export default NoResults