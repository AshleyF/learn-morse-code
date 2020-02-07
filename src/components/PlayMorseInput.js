import React, { useContext, useState, useEffect } from "react"
import morseCode from '../data/morse-code.json'
import useMorsePlayer from "../hooks/useMorsePlayer";
import { WPMContext } from "../contexts/wpmContext.js";

export default (function PlayMorseInput() {

    const { playMorseWord } = useMorsePlayer()
    const [inputValue, setInputValue] = useState('')
    const [morseTranslation, setMorseTranslation] = useState('')

    function handleChange(e) {
        e.preventDefault()

        setInputValue(e.target.value)
    }

    useEffect(() => {
        let arr = Array.from(inputValue.trim().toLowerCase())
        let morse = arr.map(item => {
            if (item === ' ') {
                return '/'
            } else {
                let r = convertWordToMorse(item)
                return (r === 'undefined' ? '?' : r + ' ')
            }
        })
        let a = morse.map(i => i.trim()).join(' ').replace(/ \/ /g,'/').replace(/ \?/g,'?')
        console.log(a);
        setMorseTranslation(a)

    }, [inputValue])

    function handlePlay() {
        playMorseWord(morseTranslation)
    }

    function convertWordToMorse(word) {
        let morse = ''
        for (let i in word) {
            morse += morseCode[word[i].toLowerCase()]
            // morse += ' '
        }
        return morse
    }


    return (
            <div id="playMorseInput">
                <div id="title">
                    <h1>Translate To Morse</h1>
                </div>
                <div id="input">
                    <input type="text" id='morseInput' value={inputValue} onChange={handleChange} placeholder="Type here." maxLength="25"/> Listen <i className="ri-volume-up-fill" onClick={handlePlay}></i>
                </div>
                <div id="morseTranslation">
                    <span id="morseTrans">
                        {morseTranslation === '' ? 'Morse translation will appear here.' : morseTranslation.replace(/\?/g,'[?]').replace(/\] /g,']')}
                    </span>
                </div>
            </div>
    )
})