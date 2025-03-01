import url from "../static/images/灯泡.png";
const exampleURL = "https://i.loli.net/2020/03/18/g21ro4tTCAQ3nXO.jpg";

const defaultValues = {
  text: "hello world",
  image: exampleURL,
  canvas: `function(canvas, ctx, width, height){
    const size = 100,
      x = (width - size) / 2,
      y = (height - size) / 2;
    ctx.fillStyle = "black";
    ctx.fillRect(x, y, size, size);
  }`,
};
function createIdea(id, type) {
  return {
    id,
    type,
    value: defaultValues[type],
  };
}
// 创建组件
function createText(id, value = defaultValues.text, attrs) {
  return {
    id,
    value,
    type: "text",
    attrs: {
      fontSize: "$4",
      color: "$5",
      fontWeight: "normal",
      textAlign: "left",
      verticalAlign: "top",
      padding: 0,
      isTitle: false,
      ...attrs,
    },
  };
}

function createImage(id, value = defaultValues.image, attrs) {
  return {
    type: "image",
    id,
    value,
    attrs: {
      displayMode: "normal",
      padding: 10,
      textAlign: "center",
      verticalAlign: "center",
      ...attrs,
    },
  };
}

function createPanel(id, value, attrs, children = []) {
  return {
    type: "panel",
    id,
    value,
    attrs: {
      span: [],
      flex: value,
      padding: 10,
      ...attrs,
    },
    children,
  };
}

function createCanvas(id, value = defaultValues.canvas, attrs) {
  return {
    type: "canvas",
    id,
    value,
    attrs: {
      padding: 10,
      ...attrs,
    },
  };
}

function createSlide(
  id,
  value,
  lang,
  locales,
  content = locales.NEW_POINT_INFO[lang]
) {
  return createPanel(
    id,
    "column",
    { span: [1, 2], backgroundColor: "$1", padding: "$6" },
    [
      createText("text" + id, value, {
        isTitle: true,
        fontSize: "$3",
        fontWeight: "bold",
        verticalAlign: "center",
      }),
      createPanel("panel" + id, "column", { span: [1] }, [
        createText("text2" + id, content, {
          isTitle: false,
        }),
      ]),
    ]
  );
}

function createFile(lang, locales) {
  const name = locales.NEW_FILE_NAME[lang];
  return {
    filename: "new",
    selectedId: 1,
    selectedComponentId: 1,
    structure: {
      id: 1,
      name,
    },
    components: [
      createPanel(
        1,
        "column",
        { span: [2.5, 1], backgroundColor: "$1", padding: "$6" },
        [
          createText(2, name, {
            fontSize: 180,
            isTitle: true,
            textAlign: "center",
            verticalAlign: "center",
            fontWeight: "bold",
          }),
          createText(3, locales.NEW_FILE_CREATOR[lang], {
            textAlign: "center",
            verticalAlign: "top",
          }),
        ]
      ),
    ],
    selectedArributeId: 1,
    attributeVars: [
      {
        id: 1,
        type: "color",
        value: "#ffffff",
        name: locales.NEW_FILE_BG_COLOR[lang],
        canDelete: false,
      },
      { id: 2, type: "number", value: 160, name: locales.NEW_FILE_H1[lang] },
      { id: 3, type: "number", value: 120, name: locales.NEW_FILE_H2[lang] },
      {
        id: 4,
        type: "number",
        value: 35,
        name: locales.NEW_FILE_CONTENT[lang],
      },
      {
        id: 5,
        type: "color",
        value: "#000000",
        name: locales.NEW_FILE_FONT_COLOR[lang],
      },
      {
        id: 6,
        type: "number",
        value: 60,
        name: locales.NEW_FILE_PADDING[lang],
      },
    ],
    ideas: [
      createText(6, locales.NEW_FILE_THOUGHT[lang]),
      createImage(7, exampleURL),
    ],
  };
}

export {
  createCanvas,
  createImage,
  createPanel,
  createSlide,
  createText,
  createFile,
  createIdea,
};
