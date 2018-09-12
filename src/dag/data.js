export let data = {
  connections:
    [
      {
        "sourceId": "start",
        "targetId": "d097805d0f510045c80833e00d337d9fd926"
      },
      {
        "sourceId": "d097805d0f510045c80833e00d337d9fd926",
        "targetId": "end"
      }]
  ,
  nodes:
    [{
      "config": {
        "actualType": "start",
        "label": "Start Here",
        "type": "start",
        "style": {
          "left": "50px",
          "top": "50px"
        }
      },
      "id": "start"
    },
    {
      "config": {
        "actualType": "end",
        "label": "spider finish",
        "type": "end",
        "style": {
          "left": "350px",
          "top": "50px"
        }
      },
      "id": "end"
    },
    {
      "config": {
        "label": "openPage",
        "type": "transform",
        "actualType": "openPage",
        "data": {
          "url": {
            "key": "url",
            "type": "input",
            "desc": "请输入url",
            "data": "http://www.baidu.com"
          }
        }
      },
      "id": "d097805d0f510045c80833e00d337d9fd926"
    }]
};
