export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor", //draft for contactId = 0
    1: "Hello, Alice", //draft for contactId = 1
    2: "Hello, Bob", //draft for contactId = 2
  },
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    // when the input is edited
    case "edited_message": {
      return {
        // keep other state like selection
        ...state,
        messages: {
          // keep messages for other contacts
          ...state.messages,
          // but change the selected contact's message
          [state.selectedId]: action.message,
        },
      };
    }
    case "send": {
      return {
        ...state,
        message: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
