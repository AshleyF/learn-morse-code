import React from "react"
import AlphaNumeric from './AlphaNumeric'
import DitDah from './DitDah'

function MorseCard(props) {
    console.log('MorseCard rendered');
    let morseComponent
    let alphaNumericsComponent

    if (props.morse.includes(' ')) {
        let letters = props.morse.split(' ').join('  ').split(' ')
        morseComponent = letters.map((letter, index) => <DitDah key={index} morseLetter={letter}/>)
        
        alphaNumericsComponent = letters.map((letter, index) => <AlphaNumeric key={index} morseLetter={letter}/>)
    }
    else {
        let letter = props.morse
        
        morseComponent = <DitDah morseLetter={letter} />
        alphaNumericsComponent = <AlphaNumeric morseLetter={letter} />
    }

    return (
        <div className='morseCard'>
            <div className='ditDahs-container'>
                <div className='ditDahs'>
                    {morseComponent}
                </div>
            </div>
            <div className='alphanumeric-container'>
                <div className='alphanumeric'>
                    {alphaNumericsComponent}
                </div>
            </div>
        </div>
    )
}

export default React.memo(MorseCard)