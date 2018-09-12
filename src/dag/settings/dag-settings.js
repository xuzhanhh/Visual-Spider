// const cloneDeep = require("lodash.clonedeep");
import { cloneDeep } from 'lodash'


const defaultConnectionStyle = {
  hoverPaintStyle: {
    dashstyle: "solid",
    lineWidth: 4,
    stroke: "green",
    strokeWidth: 8,
  },
  paintStyle: {
    lineWidth: 2,
    outlineColor: "transparent",
    outlineWidth: 4,
    stroke: "yellow",
    strokeWidth: 8,
  },
};

export const defaultSettings = Object.assign(
  {
    //endpoint 的设置
    ConnectionOverlays: [
      [
        "Arrow",
        {
          foldback: 0.8,
          id: "arrow",
          length: 14,
          location: 1,
        },
      ],
    ],
    //连线的设置
    Connector: [
      "Flowchart",
      {
        alwaysRespectStubs: true,
        cornerRadius: 100,
        midpoint: 0.2,
        stub: [10, 15],
      },
    ],
    Endpoint: "Dot",
    EndpointStyle: { radius: 10 },
  },
  /* tslint:disable */
  defaultConnectionStyle
  /* tslint:enable */
);

// export const connectorStyle = {
//   lineWidth: 2,
//   radius: 5,
//   stroke: "green",
//   strokeWidth: 2,
// };

export const commonSettings = {
  endpoint: "Dot",
  maxConnections: -1, // -1 means unlimited connections
  paintStyle: {
    connectorStyle: defaultConnectionStyle.paintStyle,
    fill: "#456",
    lineWidth: 3,
    radius: 5,
    stroke: "#456",
  },
};
export const sourceSettings = {
  ...commonSettings,
  isSource: true,
};
export const sinkSettings = {
  ...commonSettings,
  isTarget: true,
};
export const conditionRightEndpoint = {
  overlays: [
    ["Label", { id: "yesLabel", label: "Yes", location: [0.5, -0.55] }],
  ],
  ...sourceSettings,
};

export const conditionBottomEndpoint = {
  anchor: "Bottom",
  overlays: [
    [
      "Label",
      {
        id: "noLabel",
        label: "No",
        location: [0.5, -0.85],
      },
    ],
  ],
  ...sourceSettings,
};

export const dottedConnectionStyle = {
  paintStyle: {
    dashstyle: "4 4",
    lineWidth: 10,
    // outlineColor: "red",
    // outlineWidth: 4,
    // strokeStyle: "#0099ff",
    stroke:'#0b639e',
    strokeWidth: 1,
  },
  hoverPaintStyle:{
    dashstyle:"2 2",
    // stroke:'black'
    strokeWidth: 4,

  },
  cssClass:"dotted-normal"
};

export const selectedConnectionStyle = {
  paintStyle: {
    dashstyle: "solid",
    lineWidth: 4,
    outlineColor: "transparent",
    outlineWidth: 4,
    stroke: "#58b7f6",
    strokeWidth: 3,

  },
};

export function getSettings(isDisabled = false) {
  let settings = {};
  if (isDisabled) {
    settings = {
      commonSettings,
      conditionBottomEndpoint,
      conditionRightEndpoint,
      default: defaultSettings,
      sink: sinkSettings,
      source: sourceSettings,
      transformSink: {},
      transformSource: {},
    };
  } else {
    settings = {
      commonSettings,
      conditionBottomEndpoint,
      conditionRightEndpoint,
      default: defaultSettings,
      sink: sinkSettings,
      source: sourceSettings,
      transformSink: {},
      transformSource: {},
    };
  }

  settings.transformSource = cloneDeep(settings.source);
  settings.transformSink = cloneDeep(settings.sink);

  return settings;
}
