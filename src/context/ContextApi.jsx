// import { createContext, useReducer } from "react";
// import propTypes from "prop-types";
// const ProviderContext = createContext();

// const initailState = {
//   isActive: false,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "active/button":
//       return {
//         ...state,
//         isActive: false,
//       };

//     default:
//       throw new Error("unknown action type ");
//   }
// }

// function Provider({ children }) {
 
// }

// const ContextApi = ({children}) => {
//     const [{ isActive }, dispatch] = useReducer(reducer, initailState);
//     console.log(isActive);
//     return (
//       <ProviderContext.Provider
//         value={{
//           isActive,
//           dispatch,
//         }}
//       >
//         {children}
//       </ProviderContext.Provider>
//     );
  
// }

// export default ContextApi

// Provider.propTypes = {
//   children: propTypes.string.isRequired,
// };

