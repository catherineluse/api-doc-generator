import './App.css';
import globalSchemas from './globalSchemas'
import clusterSchemas from './clusterSchemas'
import projectSchemas from './projectSchemas'

const listEachSchema = schemas => {
  return schemas.data.map((schema, i) => {
    const actions = schema.resourceActions;
    
    // We only include a global scoped resource
    // in the API docs if it has resourceActions.
    // Otherwise it shows schemas that you 
    // can't do anything with.
    if (!actions){
       return;
    }
    return <h3 key={i}><a href={`#${schema.id}`}>{schema.id}</a></h3>
  })
}

const listEachType = schemas => {
  return schemas.data.map((schema, i) => {
    const actions = schema.resourceActions;

    // I assume a schema is a type
    // only if no actions are available.
    if (actions){
      return;
    }
    return (
      <h3 key={i}><a href={`#${schema.id}`}>{schema.id}</a></h3>
    )
  })
}

const listDetailedSchemas = schemas => {
  return schemas.data.map((schema, i) => {
    const actions = schema.resourceActions;

    if (actions === undefined){
      return;
    }

    const resourceFields = schema.resourceFields;

    return (
      <>
       <h3 id={`${schema.id}`} className="contentH3">{schema.id}</h3>
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
               <th scope="col">Create</th>
               <th scope="col">Nullable</th>
               <th scope="col">Update</th>
               <th scope="col">Default</th>
             </tr>
           </thead>
           <tbody>
             {generateResourceFieldList(resourceFields)}
           </tbody>
         </table>
      </>
    )
  })
}

const listDetailedTypes = schemas => {
  return schemas.data.map((schema, i) => {
    const actions = schema.resourceActions;

    if (actions){
      return;
    }

    const resourceFields = schema.resourceFields;
    return (
      <>
      <h3 id={`${schema.id}`} className="contentH3">{schema.id}</h3>
      <h4>Resource Fields</h4>
          <table className="table table-sm table-striped">
            <thead >
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Create</th>
                <th scope="col">Nullable</th>
                <th scope="col">Update</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              {generateResourceFieldList(resourceFields)}
            </tbody>
          </table>
      </>
    )
  })
}

const generateActionList = actions => {
  let actionList = []

  for (let actionName in actions) {
     const action = actions[actionName]

     actionList.push((
       <tr>
         <td>{actionName}</td>
         <td>{action.input ? action.input : "None"}</td>
         <td>{action.output ? action.output : "None"}</td>
       </tr>
     ))
  }
  return actionList;
}

const generateResourceFieldList = resourceFields => {
  let resourceFieldList = []

  for (let resourceFieldName in resourceFields) {
    const resourceFieldData = resourceFields[resourceFieldName];
    const { type, create, nullable, update, default: defaultValue } = resourceFieldData;

    resourceFieldList.push((
      <tr>
        <td 
          className="resourceField fieldName">
            {resourceFieldName}
            <br/>
            <div className="resourceType">{generateLinkToType(type)}</div>
        </td>
        <td className="resourceField">{JSON.stringify(create)}</td>
        <td className="resourceField">{JSON.stringify(nullable)}</td>
        <td className="resourceField">{JSON.stringify(update)}</td>
        <td className="resourceField">{JSON.stringify(defaultValue)}</td>
      </tr>
    ))
  }
  return resourceFieldList;
}

const generateLinkToType = type => {
  let typeName = type;
  typeName.split("string").join("")
  typeName.split("boolean").join("")
  typeName.split("enum").join("")
  return (
    <a href={`#${type}`}>{typeName}</a>
  )
}

function App() {
  return (
    <div >
      <div className="menu">
          <h1 className="title">Rancher API Reference</h1>
          <h1>Basics</h1>
            <h2>Use the API in the Browser</h2>
            <h2>Get API Keys</h2>
            <h2>Make Requests</h2>
            <h2>Levels of Scope</h2>

          <h1>Tutorials</h1>

            <h2>Set up a Rancher Server</h2>
            <h2>Change Settings</h2>
            <h2>Create a Custom Cluster</h2>
            <h2>Set up a Registered Cluster</h2>
            <h2>RBAC</h2>
            <h2>Authentication</h2>
            <h2>Node Templates</h2>
            <h2>Cloud Credentials</h2>

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
