import fetch from "node-fetch";
import fs from "fs/promises";

const RAW_FILE_URL = "https://raw.githubusercontent.com/";
const MIRRORF_FILE_URL = "https://raw.fgit.ml/";

const RAW_CN_URL = "PlexPt/awesome-chatgpt-prompts-zh/main/prompts-zh.json";
const CN_URL = MIRRORF_FILE_URL + RAW_CN_URL;
const RAW_EN_URL = "f/awesome-chatgpt-prompts/main/prompts.csv";
const EN_URL = MIRRORF_FILE_URL + RAW_EN_URL;
const FILE = "./public/prompts.json";

const timeoutPromise = (timeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Request timeout'));
    }, timeout);
  });
};

async function fetchCN() {
  console.log("[Fetch] fetching cn prompts...");
  try {
    // // const raw = await (await fetch(CN_URL)).json();
    // const response = await Promise.race([fetch(CN_URL), timeoutPromise(5000)]);
    // const raw = await response.json();

const jsonTemp = [
  {
    "act": "营销:需求三角之缺乏感",
    "prompt": "请先帮我分析XXX（自己按实际状况填写）的缺乏感”。\n"
  },
  {
    "act": "营销:需求三角之成本",
    "prompt": "请先帮我分析XXX（自己按实际状况填写）的状况下如何提升用户的能力，降低消费者的决策成本，并让消费者更好的做出选择。最后请给我一个你认为最重要的点”\n"
  },
  {
    "act": "TOC罗哥追问1：识别系统",
    "prompt": "请分析XXX（自己按实际情况填写）的系统按：Step 0. System：识别系统：识别系统的关键要素和连接关系，界定系统边界及目标；\n"
  },
  {
    "act": "TOC罗哥追问2：找出瓶颈",
    "prompt": "Step 1. Find：找到系统瓶颈。请务必遵从以色列物理学家高德拉特博士的TOC制约理论中对瓶颈及制约的定义，一般来说瓶颈或制约分为物理瓶颈和政策制约，物理瓶颈包括昂贵的设备、稀缺的资源，比如说货架的空间，餐厅的座位数，决定出餐速度的设备，酒店的房间数，不易招募或培养的人才，关键工艺程序的设备；政策制约包括公司各部门的制度、流程等人为因素限制了系统的产出；\n"
  }];

    return jsonTemp.map((v) => [v.act, v.prompt]);

  } catch (error) {
    console.error("[Fetch] failed to fetch cn prompts", error);
    return [];
  }
}

async function fetchEN() {
  console.log("[Fetch] fetching en prompts...");
  return [];
  // try {
  //   // const raw = await (await fetch(EN_URL)).text();
  //   const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
  //   const raw = await response.text();
  //   return raw
  //     .split("\n")
  //     .slice(1)
  //     .map((v) => v.split('","').map((v) => v.replace('"', "")));
  // } catch (error) {
  //   console.error("[Fetch] failed to fetch en prompts", error);
  //   return [];
  // }
}

async function main() {
  Promise.all([fetchCN(), fetchEN()])
    .then(([cn, en]) => {
      fs.writeFile(FILE, JSON.stringify({ cn, en }));
    })
    .catch((e) => {
      console.error("[Fetch] failed to fetch prompts");
      fs.writeFile(FILE, JSON.stringify({ cn: [], en: [] }));
    })
    .finally(() => {
      console.log("[Fetch] saved to " + FILE);
    });
}

main();
