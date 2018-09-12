import { IConnectionParams } from "react-dag";

export function onConnectionEventHandler(connObj) {
  // console.log('hello~~~~', connObj.connection)
  connObj.connection.endpoints.forEach((endpoint) => {
    const uuid = endpoint.getUuid();
    // console.log('?????when i emit', uuid)
    if (!uuid) {
      return;
    }
    if (uuid.indexOf("DottedEndPoint") !== -1) {
    console.log(uuid, connObj.connection)
    // debugger
    connObj.connection.setType("dotted");
    }
  });
}

function highlightConnection(connection) {
  // console.log(connection)
  // connection.setType("selected");
  connection.toggleType("selected");
  // console.log(connection)

}
/* tslint:disable */
export function onEndPointClick(jsPlumbObject) {
  // console.log('jsPlumbObject', jsPlumbObject)
  if (jsPlumbObject.endpoints) {
    highlightConnection(jsPlumbObject);
  }
  if (jsPlumbObject.connections) {
    jsPlumbObject.connections.forEach((conn) => highlightConnection(conn));
  }
}
