import {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export default forwardRef((props, ref) => {
  const [identifyCode, setIdentifyCode] = useState("");
  const canvasRef = useRef();

  useImperativeHandle(ref, () => ({
    refreshCapcha: (newVal) => {
      refresh();
    },
    getCapchaCode: () => {
      return identifyCode;
    },
  }));
  const [config] = useState({
    contentWidth: 100,
    contentHeight: 35,
    backgroundColorMin: 180,
    backgroundColorMax: 240,
    fontSizeMin: 25,
    fontSizeMax: 30,
    colorMin: 50,
    colorMax: 160,
    lineColorMin: 40,
    lineColorMax: 180,
    dotColorMin: 0,
    dotColorMax: 255,
    textStyle: {
      fontSize: "14px",
      color: "gray",
      marginLeft: "6px",
      cursor: "pointer",
      padding: "5px",
      userSelect: "none",
    },
  });

  useEffect(() => {
    refresh();
  }, []);

  useEffect(() => {
    identifyCode && drawPic();
  });

  const drawPic = () => {
    let canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = randomColor(
      config.backgroundColorMin,
      config.backgroundColorMax
    );
    ctx.strokeStyle = randomColor(
      config.backgroundColorMin,
      config.backgroundColorMax
    );
    ctx.fillRect(0, 0, config.contentWidth, config.contentHeight);
    ctx.strokeRect(0, 0, config.contentWidth, config.contentHeight);
    for (let i = 0; i < identifyCode.length; i++) {
      drawText(ctx, identifyCode[i], i);
    }
    drawLine(ctx);
    drawDot(ctx);
  };
  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const randomColor = (min, max) => {
    let r = randomNum(min, max);
    let g = randomNum(min, max);
    let b = randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  const drawText = (ctx, txt, i) => {
    ctx.fillStyle = randomColor(config.colorMin, config.colorMax);
    ctx.font = randomNum(config.fontSizeMin, config.fontSizeMax) + "px SimHei";
    ctx.textBaseline = "alphabetic";
    let x = (i + 1) * (config.contentWidth / (identifyCode.length + 1));
    let y = randomNum(config.fontSizeMax, config.contentHeight - 12);
    let deg = randomNum(-45, 45);
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  };
  const drawLine = (ctx) => {
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = randomColor(config.lineColorMin, config.lineColorMax);
      ctx.beginPath();
      ctx.moveTo(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight)
      );
      ctx.lineTo(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight)
      );
      ctx.stroke();
    }
  };
  const drawDot = (ctx) => {
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(
        randomNum(0, config.contentWidth),
        randomNum(0, config.contentHeight),
        1,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  };

  const refresh = () => {
    const words = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    let code = "";
    for (let i = 0; i < 4; i++) {
      code += words[Math.floor(Math.random() * 52)];
    }
    props.setCode ? setIdentifyCode(props.setCode()) : setIdentifyCode(code);
  };

  return (
    <div style={{ margin: "3px 0px 12px 4px" }}>
      <canvas
        ref={canvasRef}
        width={config.contentWidth}
        height={config.contentHeight}
      />
    </div>
  );
});
