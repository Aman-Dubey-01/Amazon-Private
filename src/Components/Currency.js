import React from 'react'
import CurrencyFormat from 'react-currency-format'

const Currency = (props) => {
    return (
        <CurrencyFormat
            value={props.value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₹'}
            decimalScale={2}>
        </CurrencyFormat>
    )
}

export default Currency