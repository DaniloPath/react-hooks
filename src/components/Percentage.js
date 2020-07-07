import React from 'react'
import CountUp from 'react-countup'

export default function Percentage({value}) {
    return (
    <div>
        <CountUp
        start={value}
        end={value-0.001}
        duration={0.6}
        separator="."
        decimals={2}
        decimal=","        
        suffix="%"
        >
            {({ countUpRef}) => (
                <div>
                    <span ref={countUpRef} />                    
                </div>
            )}
        </CountUp>
    </div>
    )
}