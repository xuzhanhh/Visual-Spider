import * as React from "react";

import {DefaultNode} from "react-dag";
import { css } from "glamor";
import { getSettings } from "../../settings/dag-settings";
// import { theme } from "../../styles";

export const endPointStyles = css({
  "&.right": {
    left: "190px",
  },
  borderRadius: "100%",
  height: "25px",
  left: "-12px",
  position: "absolute",
  top: "25px",
  width: "25px",
  zIndex: 200001,
});
export const nodeWrapperStyles = css({
  alignItems: "center",
  display: "flex",
  height: "100%",
  justifyContent: "center",
  position: "relative",
  width: "100%",
});
export const nodeStyles = css({
  background: "white",
  border: `2px solid red`,
  cursor: "pointer",
  display: "inline-block",
  height: "100px",
  position: "absolute",
  width: "200px",
  zIndex: 20000,
});

export default class ErrorType extends DefaultNode{
  private rightEndpointRef: HTMLElement | null;

  public componentDidMount() {
    const { transformSource } = getSettings() as any;
    const initConfig = {
      endPointParams: [
        {
          element: this.rightEndpointRef,
          params: {
            ...transformSource,
            isSource: true,
            uuid: `${this.props.id}-transform`,
          },
          referenceParams: {},
        },
      ],
      makeTargetParams: {
        allowLoopback: false,
        anchor: "ContinuousLeft",
        dropOptions: { hoverClass: "drag-hover" },
        isTarget: true,
      },
      nodeId: this.props.id,
    };
    if (this.props.initNode) {
      this.props.initNode(initConfig);
    }
  }
  public render() {
    // const config = this.props.config;
    const { config, click, cKey, id } = this.props

    // const  click  = this.props.click;
    let style = {};
    if (config) {
      style = config.style;
    }
    return (
      <div
        id={this.props.id}
        className={`${nodeStyles}`}
        style={style}
        onClick = {()=>click(id, cKey)}
        // onClick={click(this.props.id)}
      >
        <div className={`${nodeWrapperStyles}`}>
          {config && config.label ? config.label : this.props.id}
          <div
            id={`${this.props.id}-right`}
            ref={ref => (this.rightEndpointRef = ref)}
            className={`${endPointStyles} right`}
          />
        </div>
      </div>
    );
  }
}