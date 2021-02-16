import './App.css';
import globalSchemas from './globalSchemas'
import clusterSchemas from './clusterSchemas'
import projectSchemas from './projectSchemas'

const filterOutTypes = schemas => {
    const filtered = schemas.data.filter((schema, i) => {
      const actions = schema.resourceActions;
      // We only include a global scoped resource
      // in the API docs for schemas if it has resourceActions.
      // Otherwise it shows schemas that you 
      // can't do anything with.
      if (!actions){
        return false;
      }
      return true;
    })
    return filtered;
}

const listEachSchema = schemas => {
  const filteredSchemas = filterOutTypes(schemas)
  return filteredSchemas.map((schema, i) => {
    return <h3 key={i}><a href={`#${schema.id}`}>{schema.id}</a></h3>
  })
}
const listEachType = schemas => {
  const filteredTypes = filterOutSchemas(schemas)
  return filteredTypes.map((schema, i) => {
    return <h3 key={i}><a href={`#${schema.id}`}>{schema.id}</a></h3>
  })
}
const filterOutSchemas = schemas => {
    const filtered = schemas.data.filter((schema, i) => {
    const actions = schema.resourceActions;
    // Assume a schema is a type if there are no actions available.
    if (!actions){
      return true;
    }
    return false;
  })
  return filtered;
}

const listCollectionMethods = methods => {
  return methods.map(method => {
    return (<li key={method}>{method}</li>)
  })
}

const listDetailedSchemas = schemas => {
  const filteredSchemas = filterOutTypes(schemas);

  return filteredSchemas.map((schema, i) => {
    const actions = schema.resourceActions;

    const resourceFields = schema.resourceFields;

    return (
      <div key={i} >
       <h3 
         id={`${schema.id}`} 
         
         className="contentH3"
      >
        {schema.id}
      </h3>
         <h4>HTTP Request</h4>
         <p>{schema.links.collection || "None"}</p>
         <h4>Collection Methods</h4>
       
           {schema.collectionMethods ? (
             <ul>
               {listCollectionMethods(schema.collectionMethods) }
             </ul>
           ): "None"}
         
         <h4>Actions</h4>
         <table className="table table-sm table-striped">
           <thead >
             <tr>
               <th scope="col">Action</th>
               <th scope="col">Input Type</th>
               <th scope="col">Output Type</th>
             </tr>
           </thead>
           <tbody>
             {generateActionList(actions)}
           </tbody>
         </table>
         
         <h4>Resource Fields</h4>
          <table className="table table-sm table-striped">
           <thead >
             <tr>
               <th scope="col">Name</th>
               <th scope="col">Default</th>
               <th scope="col">Create</th>
               <th scope="col">Nullable</th>
               <th scope="col">Update</th>
             </tr>
           </thead>
           <tbody>
             {generateResourceFieldList(resourceFields)}
           </tbody>
         </table>
      </div>
    )
  })
}

const listDetailedTypes = (schemas) => {
  const filteredTypes = filterOutSchemas(schemas)
  return filteredTypes.map((schema, i) => {

    const resourceFields = schema.resourceFields;
    return (
      <div key={i}>
        <h3 id={`${schema.id}`} className="contentH3">{schema.id}</h3>
        <h4>Resource Fields</h4>
            <table className="table table-sm table-striped">
              <thead >
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Default</th>
                  <th scope="col">Create</th>
                  <th scope="col">Nullable</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {generateResourceFieldList(resourceFields)}
              </tbody>
            </table>
      </div>
    )
  })
}

const generateActionList = actions => {
  let actionList = []

  let i = 0;
  for (let actionName in actions) {
     const action = actions[actionName]

     actionList.push((
       <tr key={i}>
         <td>{actionName}</td>
         <td>{action.input ? (<a href={`#${action.input}`}>{action.input}</a> ): "None"}</td>
         <td>{action.output ? (<a href={`#${action.output}`}>{action.output}</a> ) : "None"}</td>
       </tr>
     ))
     i++;
  }
  return actionList;
}

const generateResourceFieldList = (resourceFields) => {
  let resourceFieldList = []
  let i = 0;
  for (let resourceFieldName in resourceFields) {
    
    const resourceFieldData = resourceFields[resourceFieldName];
    const { 
      type, 
      description, 
      create, 
      nullable, 
      update, 
      required,
      default: defaultValue, 
      dynamicField,
      options
    } = resourceFieldData;

    resourceFieldList.push((
      <tr id={resourceFieldName} key={i}>
        <td 
          className="resourceField fieldName">
            {resourceFieldName}
            <div 
              className="resourceType">
                {
                  generateLinkToType(type, options)
                }
                
            </div>
            <div className="resourceDescription">{description || ""}</div>
            <div className="resourceDescription">{required ? "Required." : "" }</div>
            <div className="dynamicField">{dynamicField ? "DynamicField." : ""}</div>
        </td>
        <td className="resourceField">{JSON.stringify(defaultValue)}</td>
        <td className="resourceField">{JSON.stringify(create)}</td>
        <td className="resourceField">{JSON.stringify(nullable)}</td>
        <td className="resourceField">{JSON.stringify(update)}</td>
      </tr>
    ))
    i++;
  }
  return resourceFieldList;
}

const generateLinkToType = (type, options) => {
  if (type === "enum"){
    return "enum. Options: " + JSON.stringify(options);
  }
  if (type === "bool"){
    return "bool"
  }
  if (type === "string"){
    return "string"
  }
  if (type.indexOf("map") !== 0){
    return type
  }
  if (type.indexOf("array") !== 0){
    return type
  }
  console.log('returned a link')
  return (<a href={`#${type}`}>
    {type}
  </a>)
}

function App() {
  return (
    <div >
      <div className="menu">
          <h1>Schemas</h1>

             <h2>Global Scoped Schemas</h2>
               {listEachSchema(globalSchemas)}

             <h2>Cluster Scoped Schemas</h2>
               {listEachSchema(clusterSchemas)}
             
             <h2>Project Scoped Schemas</h2>
               {listEachSchema(projectSchemas)}

          <h1>Types</h1>

            <h2>Global Scoped Types</h2>
              {listEachType(globalSchemas)}

            <h2>Cluster Scoped Types</h2>
              {listEachType(clusterSchemas)}
            
            <h2>Project Scoped Types</h2>
              {listEachType(projectSchemas)}
      </div>
      <div className="content">

        <h1 className="contentH1">Schemas</h1>

          <h2 className="contentH2">Global Scoped Schemas</h2>
          <hr/>
            {listDetailedSchemas(globalSchemas)}

          <h2 className="contentH2">Cluster Scoped Schemas</h2>
          <hr/>
            {listDetailedSchemas(clusterSchemas)}
           
          <h2 className="contentH2">Project Scoped Schemas</h2>
          <hr/>
            {listDetailedSchemas(projectSchemas)}

        <h1 className="contentH1">Types</h1>

          <h2 className="contentH2">Global Scoped Types</h2>
          <hr/>
            {listDetailedTypes(globalSchemas)}
          
          <h2 className="contentH2">Cluster Scoped Types</h2>
            {listDetailedTypes(clusterSchemas)}
          
          <h2 className="contentH3">Project Scoped Types</h2>
            {listDetailedTypes(projectSchemas)}

      </div>
    </div>
  );
}

export default App;
