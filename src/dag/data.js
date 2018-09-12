export let data = {
  connections:
    [{
      "sourceId": "start",
      "targetId": "2"
    }, {
      "sourceId": "2",
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
          "top": "145px"
        }
      },
      "id": "start"
    },
    {
      "config": {
        "actualType": "openPage",
        "data": {
          "url": "http://www.baidu.com"
        },
        "label": "Open Page",
        "type": "transform",
        "style": {
          "left": "200px",
          "top": "145px"
        }
      },
      "id": "2"
    },
    {
      "config": {
        "actualType": "end",
        "label": "spider finish",
        "type": "end",
        "style": {
          "left": "1250px",
          "top": "145px"
        }
      },
      "id": "end"
    }]
};
