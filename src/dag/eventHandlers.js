import { IConnectionParams } from "react-dag";

export function onConnectionEventHandler(connObj, node2Connection) {
  console.log('hello~~~~', connObj)
  node2Connection(connObj.sourceId.split('-')[0], connObj.targetId.split('-')[0], connObj.connection.connector.canvas.children[0] )
  console.log('hell!!!!!!', connObj.connection.getId())
  connObj.connection.endpoints.forEach((endpoint) => {
    const uuid = endpoint.getUuid();
    if (!uuid) {
      return;
    }
    // connObj.connection.connector.canvas.children[0].innerHTML = ' <animate attributeName="stroke-dasharray" attributeType="XML" calcMode="linear" keyTimes="0; .5; 1" values="2 2; 6 6; 7 7;" begin="0s" dur="1s" repeatCount="indefinite" fill="freeze"></animate>'

    if (uuid.indexOf("DottedEndPoint") !== -1) {
      // console.log(uuid, connObj.connection)
      // debugger
      connObj.connection.setType("dotted");

      // connObj.connection.connector.canvas.children[0].innerHTML = ' <animate attributeName="stroke-dasharray" attributeType="XML" calcMode="linear" keyTimes="0; .5; 1" values="2 2; 6 6; 7 7;" begin="0s" dur="1s" repeatCount="indefinite" fill="freeze"></animate>'
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
  console.log('jsPlumbObject', jsPlumbObject)

  if (jsPlumbObject.endpoints) {
    highlightConnection(jsPlumbObject);
  }
  if (jsPlumbObject.connections) {
    jsPlumbObject.connections.forEach((conn) => highlightConnection(conn));
  }
}
