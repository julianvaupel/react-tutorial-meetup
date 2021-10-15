### Learnings from this Project

* for SPA the App.js file is mostly used for just routing
  * the react router is imported like this: import { Route, Switch } from "react-router-dom";
  * Switch is the method that switches between the individual pages we want to build
  * Route is the route to an individual page. Route has an attribute path="" which defines the url path after the basic domain
  * within the route method the actual page is then called
  * to open a route/page the link-method from react router is used and imported like this: import { Link } from "react-router-dom";
  * the link component has a to-attribute which links this link to the specific route which shall be called

* in react you can forward variables/values with the props method into other components

* list-items in react need to have a unique key-value: key="" or key={sth.id}

* CSS for a component can be stored within an equally named file but with the componentName.module.css and then imported into the component by import { variableName } from "./componentName.module.css" and used with className={} for the components

* to wrap content in custom components the content within a custom react component can be handed over with the props.children method
  * this needs to be handed over via props and then called within the div-tag with {props.children}

* buttons in a form element are interpreted as submit buttons
  * the form component can handle several built-in events. onSubmit{function} is a way to interrupt the standard html behaviour to send a https request for a form submission

* { useRef } from react as a possibility to store data from forms or any inputs
  * store reference from input component in a const and then initialize using const Name = useRef();
  * use ref={constName} with constName being the name of the variable to store the input as a reference
  * store value then in a new store variable and refer to the inserted value with var = refVariable.current.value;