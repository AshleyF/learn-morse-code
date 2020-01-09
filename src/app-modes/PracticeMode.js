import React, {useEffect} from 'react';
import '../css/App.css';
import useTelegraph from '../hooks/useTelegraph';
import MorseBufferDisplay from '../components/MorseBufferDisplay'
import MorseDisplay from '../components/MorseDisplay'

function PracticeMode() {

    const {morseCharBuffer, morseWords, clearHistory} = useTelegraph()
    
    console.log('PracticeMode.js rendered')
    
    return (
        <>
            <MorseBufferDisplay buffer={morseCharBuffer} /><br/>
            <MorseDisplay morseWords={morseWords} /><br/>
            <button onClick={clearHistory}>Clear Morse History</button><br/>
        </>
    );

}

export default React.memo(PracticeMode);