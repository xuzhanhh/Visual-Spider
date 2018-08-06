import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.css'
import {
  conditionConnectionDecoder,
  conditionConnectionEncoder,
  transformConnectionDecoder,
  transformConnectionEncoder,
} from "./connectionReducers";
import {
  defaultSettings,
  dottedConnectionStyle,
  selectedConnectionStyle,
} from "./settings/dag-settings";
import { onConnectionEventHandler, onEndPointClick } from "./eventHandlers";
import { setGlobal, theme } from "./styles";

import ReactDAG, { DefaultNode } from "react-dag";
import NodeType1 from "./components/NodeType1/wrapper";
import NodeType2 from "./components/NodeType2";
import NodeType3 from "./components/NodeType3";
import EndType from "./components/EndType";
import { css } from "glamor";
import dagre from "dagre";
import { data } from "./data";
import { cloneDeep } from 'lodash'
import { Button } from 'antd';
import Sider from './menu'
import PropPane from './proppane/index'
/* tslint:disable */
const uuidv4 = require("uuid/v4");
/* tslint:enable */

/* tslint:disable */
// const cloneDeep = require("lodash.clonedeep");
/* tslint: enable */

const HEIGHT_OF_HEADER = 90;
const HEIGHT_OF_Button_PANEL = 50;
const headerStyles = css({
  alignItems: "center",
  display: "flex",
  height: `${HEIGHT_OF_HEADER}px`,
  justifyContent: "center",
  margin: 0,
});

const ButtonPanelStyles = css({
  alignItems: "center",
  background: "white",
  display: "flex",
  height: `${HEIGHT_OF_Button_PANEL}px`,
  justifyContent: "center",
});

const ButtonStyles = css({
  border: `1px solid ${theme.main.colors.salmonPink}`,
  boxShadow: `${theme.main.boxShadow()}`,
  fontSize: "inherit",
  margin: "0 5px",
  padding: "5px",
});
const nodeType1Styles = css({
  backgroundColor: theme.main.colors.blueGreen,
});

const nodeType2Styles = css({
  backgroundColor: theme.main.colors.teal,
});

const nodeType3Styles = css({
  backgroundColor: theme.main.colors.yellow,
});

const dagWrapperStyles = css({
  background: "white",
  height: `calc(100vh - ${HEIGHT_OF_HEADER}px - ${HEIGHT_OF_Button_PANEL +
    1}px)`,
  width: "100vw",
});

const registerTypes = {
  connections: {
    dotted: dottedConnectionStyle,
    selected: selectedConnectionStyle,
  },
  endpoints: {},
};
const eventListeners = {
  click: onEndPointClick,
  connection: onConnectionEventHandler,
  endpointClick: onEndPointClick,
};

setGlobal();
// const typeToComponentMap = {
//   action: DefaultNode,
//   condition: DefaultNode,
//   sink: NodeType1,
//   source: DefaultNode,
//   transform: NodeType1,
//   end: DefaultNode,
// };
const typeToComponentMap = {
  action: NodeType2,
  condition: NodeType3,
  sink: NodeType1,
  source: DefaultNode,
  transform: NodeType1,
  end: EndType,
};

const getComponent = (type) =>
  typeToComponentMap[type] ? typeToComponentMap[type] : DefaultNode;

const getLayout = (nodes, connections, separation = 200) => {
  console.log('getLayout', nodes, connections)
  const graph = new dagre.graphlib.Graph();
  graph.setGraph({
    marginx: 0,
    marginy: 0,
    nodesep: 90,
    rankdir: "LR",
    ranker: "longest-path",
    ranksep: separation,
  });
  graph.setDefaultEdgeLabel(() => ({}));

  nodes.forEach(node => {
    const id = node.id;
    graph.setNode(id, { label: node.config ? node.config.label : "", width: 100, height: 100 });
  });

  connections.forEach(connection => {
    graph.setEdge(connection.sourceId, connection.targetId);
  });
  console.log(graph)
  dagre.layout(graph);
  return graph;
};
const graphNodes = getLayout(data.nodes, data.connections);
data.nodes = data.nodes.map(node => {
  const location = graphNodes._nodes[node.id];
  return {
    ...node,
    config: {
      ...node.config,
      style: {
        left: `${location.x}px`,
        top: `${location.y}px`,
      },
    },
  };
});
export default class App extends React.Component {
  state = {
    connections: data.connections,
    nodes: data.nodes,
    zoom: 1,
  };
  addNode = (RectType, ActualType) => {
    const generateNodeConfig = (RectType, ActualType) => ({
      config: {
        label: `Node Type: ${ActualType}`,
        type: RectType,
        actualType: ActualType
      },
      id: uuidv4(),
    });
    this.setState({
      nodes: [...this.state.nodes, generateNodeConfig(RectType, ActualType)],
    });
  };
  setZoom = (zoomIn) => {
    if (zoomIn) {
      this.setState({ zoom: this.state.zoom + 0.2 });
    } else {
      this.setState({ zoom: this.state.zoom - 0.2 });
    }
  };
  render() {
    const { curBlock } = this.state 
    console.log(this.state.nodes, this.state.connections)
    return [
      <h1 className={`${headerStyles}`} key="title">
        Visible spider with React DAG
      </h1>,
      <div className={`${ButtonPanelStyles}`} key="Button-panel">
        {/* <Button
          // className={`${ButtonStyles} ${nodeType1Styles}`}
          onClick={this.addNode.bind(null, "transform")}
        >
          Add Node Type 1
      </Button>
        <Button
          // className={`${ButtonStyles} ${nodeType2Styles}`}
          onClick={this.addNode.bind(null, "action")}
        >
          Add Node Type 2
      </Button>
        <Button
          // className={`${ButtonStyles} ${nodeType3Styles}`}
          onClick={this.addNode.bind(null, "condition")}
        >
          Add Node Type 3
      </Button>
        <Button
          // className={`${ButtonStyles}`}
          onClick={this.addNode.bind(null, "source")}
        >
          Add Node Type 4
      </Button>
        <Button
          // className={`${ButtonStyles} ${nodeType1Styles}`}
          onClick={this.addNode.bind(null, "sink")}
        >
          Add Node Type 5
      </Button>
        <Button
          // className={`${ButtonStyles} ${nodeType1Styles}`}
          onClick={this.addNode.bind(null, "end")}
        >
          Add End Type
      </Button> */}
        <Button
          // className={`${ButtonStyles}`}
          onClick={this.setZoom.bind(this, true)}
        >
          Zoom in
      </Button>
        <Button
          // className={`${ButtonStyles}`}
          onClick={this.setZoom.bind(this, false)}
        >
          Zoom out
      </Button>
        <Button
          // className={`${ButtonStyles}`}
          type="primary"
        // onClick={this.setZoom.bind(this, false)}
        >
          执行
      </Button>
      </div>,
      <div className="content">
        <Sider onClick={this.addNode}></Sider>
        <div className="dag-area">
          <ReactDAG
            className={`${dagWrapperStyles}`}
            key="dag"
            connections={cloneDeep(this.state.connections)}
            nodes={cloneDeep(this.state.nodes)}
            jsPlumbSettings={defaultSettings}
            connectionDecoders={[
              transformConnectionDecoder,
              conditionConnectionDecoder,
            ]}
            connectionEncoders={[
              transformConnectionEncoder,
              conditionConnectionEncoder,
            ]}
            eventListeners={eventListeners}
            registerTypes={registerTypes}
            onChange={({ nodes, connections }) => {
              this.setState({ nodes, connections }); // un-necessary cycle??
            }}
            zoom={this.state.zoom}
          >
            {this.state.nodes.map((node, i) => {
              const Component = getComponent(node.config.type);
              return <Component cKey={i} key={i} id={node.id} click={this.showPropPane} />;
            })}
          </ReactDAG>
          <div className="proppane" >
              <PropPane {...curBlock}></PropPane>
          </div>
        </div>

      </div>,

    ];
  }

  showPropPane = (id, key) => {
    const { nodes } = this.state
    console.log(id, key)
    console.log(nodes[key])
    this.setState({
      curBlock : nodes[key]
    })
  }
}

// ReactDOM.render(<App />, document.getElementById("app-dag"));
