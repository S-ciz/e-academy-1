import MCQ from "../../controllers/Editor/Question/Mcq";
import { handleChangeText } from "./actionHandlers";

//inital state
export const intitialState = {
  question: new MCQ("Mathematics", 10, 3, "Algebra"), //default question type that the editor will assume the user wants to create
  undoStack: [], // stores the operations the user has recently carried out.
  redoStack: [] //stores actions popped out from the undoStack
};

export function EditorQuestionReducer(state, action) { 
    switch (action.type) {
        //this runs whenever the user wants to change the type of question they are working on
        case "change-question-type": {
            return {
                ...state,
                question: action.data // data == the new question
            }
        }
        case "un-do": {
            
        }
        case "redo": {
            
        }
            
        case "change-text": { 
           return handleChangeText(state,action.data);
        }
    }

} 