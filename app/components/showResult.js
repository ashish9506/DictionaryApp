import React from 'react'
export const ShowResult = (props) => {
  
    return (
        <div className="container mt-5">
            <div>
                <h3 className="headingDictionary">Word</h3>
                <span>{props.data.word}</span>
            </div>
            <div className="mt-5">
                <h3 className="headingDictionary">Definition</h3>
                <span>{props.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]}</span>
            </div>
            <div className="mt-5">
                <h3 className="headingDictionary">Short Definition</h3>
                <span>{props.data.results[0].lexicalEntries[0].entries[0].senses[0].shortDefinitions[0]}</span>
            </div>
            <div className="mt-5">
                <h3 className="headingDictionary">Phrases</h3>
                {'phrases' in props.data.results[0].lexicalEntries[0] ? props.data.results[0].lexicalEntries[0].phrases.map((phrase,i)=><span key={i} className="d-block">{`${i+1}. `}{phrase.text}</span>) : "Phrases not found" }
          
            </div>
            <div className="mt-5">
                <h3 className="headingDictionary">How to Spell</h3>
                {console.log(props.data.results[0].lexicalEntries[0].entries[0].pronunciations[1].audioFile)}
                <audio controls className="audioSpell">
                    <source src={props.data.results[0].lexicalEntries[0].entries[0].pronunciations[1].audioFile} />
  
                </audio>
            </div>
        </div>
    )
}
export default ShowResult
