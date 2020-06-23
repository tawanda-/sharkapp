var POSITION_OFFSET = 0.05; // 5 cm
var ModelItems = [
  {
    name: "Great White Shark",
    position: [-1, 0, -4],
    scale: [0.4, 0.4, 0.4],
    rotation: [0, 45, 0],
    source: require("./res/greatwhiteshark/greatwhiteshark.obj"),
    resources: [
      require("./res/greatwhiteshark/greatwhiteshark.mtl"),
      require("./res/greatwhiteshark/Sharktexture002.png"),
      require("./res/greatwhiteshark/Sharkmouthtexture002.png"),
      require("./res/greatwhiteshark/shark0021200pxfoto10.png"),
    ],
    type: "OBJ",
    text:
      "Great whites are the world's largest predatory fish, according to Discovery. They grow to be about 4.6 to 6.1 meters or more and can weigh more than 2,268 kilograms. Though massive, the great white is not the biggest shark.",
  },
  {
    name: "Hammerhead Shark",
    positio: [-1, 0, -5],
    scale: [0.25, 0.25, 0.25],
    rotation: [-45, 45, 0],
    source: require("./res/hammerheadshark/hammerheadshark.obj"),
    resources: [
      require("./res/hammerheadshark/hammerheadshark.mtl"),
      require("./res/hammerheadshark/hammerheadsharkdiffuse.jpg"),
    ],
    type: "OBJ",
    text:
      "Hammerheads are gray-brown to olive-green on top with off-white undersides, and they have heavily serrated, triangular teeth. Their extra-tall, pointed dorsal fins are easily identifiable. Most hammerhead species are fairly small and are considered harmless to humans.",
  },
  {
    position: [-1, 0, -3],
    scale: [0.5, 0.5, 0.5],
    rotation: [-45, 45, 0],
    source: require("./res/shark_stone/shark_01.obj"),
    resources: [
      require("./res/shark_stone/shark_01.mtl"),
      require("./res/shark_stone/Benedeti.jpg"),
      require("./res/shark_stone/Limesto3.jpg"),
      require("./res/shark_stone/Medrust3.jpg"),
    ],
    typ: "OBJ",
    text: "There are more than 400 living species of sharks, taxonomically grouped into 14–30 families, according to different authorities.",
  },
];

module.exports = {
  getModelArray: function () {
    return ModelItems;
  },
};
