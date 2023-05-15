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
    "act": "基础",
    "prompt": "可以详细展开来说说吗？\n"
  },
  {
    "act": "基础",
    "prompt": "可以举几个例子具体说明吗？\n"
  },
  {
    "act": "基础",
    "prompt": "可以再多列出一些要点吗？\n"
  },
  {
    "act": "进阶",
    "prompt": "可以用MECE原则来梳理呈现这些要点吗? \n"
  },
  {
    "act": "进阶",
    "prompt": "可以帮我拎清这些要点之间的因果关系吗？\n"
  },
  {
    "act": "进阶",
    "prompt": "可以帮我从英语资料，包括谷歌论文里找相关资料来分析论述吗？\n"
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
