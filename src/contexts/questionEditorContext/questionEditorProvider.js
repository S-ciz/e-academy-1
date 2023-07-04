import React, { useReducer } from "react"
import { questionEditorContext } from "./questionEditorcontext";
import { EditorQuestionReducer, intitialState } from "./questionEditorReducer";


const QuestionEditorProvider = ({ children }) => { 
    
    const [editorState, dispatch] = useReducer(EditorQuestionReducer, intitialState); 
      
    return <questionEditorContext.Provider value={{
        question: editorState.question,
        dispatch
    }}>
        {children}
    </questionEditorContext.Provider> 
}



export default QuestionEditorProvider;