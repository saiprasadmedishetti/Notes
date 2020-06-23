import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../action-types";
// import { Notes } from "./../notes";

export interface INote {
  id: number;
  title: string;
  description: string;
  time: any;
}

export interface IAppState {
  notes: INote[];
}
export const INITIAL_STATE: IAppState = {
  notes: [
    {
      id: 1592737567412,
      title: "This is the first one",
      description: "First note description goes here",
      time: "Tue Jun 23 2020 11:50:15 GMT+0530 (India Standard Time)",
    },
    {
      id: 1592737567413,
      title: "This is the second one",
      description: "Second note description goes here",
      time: "Tue Jun 23 2020 11:30:15 GMT+0530 (India Standard Time)",
    },
    {
      id: 1592737567414,
      title: "This is the third one",
      description: "Third note description goes here",
      time: "Tue Jun 23 2020 11:15:15 GMT+0530 (India Standard Time)",
    },
  ],
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD_NOTE: {
      console.log(state);
      return {
        notes: [{ id: Date.now(), ...action.payload }, ...state.notes],
      };
    }
    // case SELECTED_NOTE: {
    //   console.log(state);
    //   return {
    //     notes: [{ id: Date.now(), ...action.payload }, ...state.notes],
    //   };
    // }
    case UPDATE_NOTE: {
      console.log(state);

      return {
        notes: [...state.notes].map((note) => {
          if (note.id === action.payload.id) {
            note.title = action.payload.title;
            note.description = action.payload.description;
            console.log("updatd", note);
          }
          return note;
        }),
      };
    }
    case DELETE_NOTE: {
      console.log(state);

      return {
        notes: [...state.notes].filter((note) => note.id !== action.payload.id),
      };
    }
  }

  return {
    notes: [...new Set(state.notes)],
  };
}
