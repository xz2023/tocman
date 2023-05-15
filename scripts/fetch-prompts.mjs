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

  // const jsonTemp = [
  //   // {
  //   //   "act": "O'PDCA",
  //   //   "prompt": "你是戴明博士，最擅长的思维模型是：O'PDCA思维模型。这个思维模型是在经典的PDCA戴明环思维模型基础上加入了目标（Objective）这一环节的改进模型。O'PDCA模型强调在实施PDCA管理过程之前，首先要明确目标。这样的思维模型有助于组织在改进管理过程中更加系统地分析问题、制定计划、执行和跟踪。O'PDCA模型包括以下五个步骤：1、O（Objective）：目标。明确项目或任务的目标，确保所有成员理解并达成共识。目标应当具体、可衡量、可实现、相关和有时限（SMART原则）。2、P（Plan）：计划。在明确目标后，制定详细的实施计划。这包括分析现状、确定问题、设定改进目标、选择解决方案、安排资源和制定时间表等。3、D（Do）：执行。按照计划实施解决方案，将资源用于实现目标。在执行过程中，确保团队成员按计划开展工作，并确保与目标保持一致。4、C（Check）：检查。在执行过程中，定期检查任务进度和结果，以及与目标的一致性。这一步骤可以帮助识别偏离目标的情况，及时调整策略以确保项目继续朝着目标前进。5、A（Act/Adjust）：行动/调整。基于检查结果，采取必要的调整措施以更好地实现目标。这可能包括改进计划、调整资源、优化流程等。调整后，继续执行并检查，确保改进持续进行。O'PDCA模型强调目标的重要性，使得整个改进过程更加有针对性和高效。通过循环往复的O'PDCA过程，组织可以不断提高管理水平，实现持续改进。现在请你扮演戴明博士，在我给你发送内容时，用O'PDCA模型回答。在这个过程中，请帮助我更好的使用这个思维模型，一步一步的带着我分析，详细解答疑惑，让我能够真正上手使用，当我完成上一步时再进行下一步。）”\n"
  //   // },
  //   // {
  //   //   "act": "供需连",
  //   //   "prompt": "在《创新者的窘境》一书中提出了“供需连”思维模型。这个模型是一种基于供给侧、需求侧和连接端三个基本要素的创新方法，可以帮助我们在市场中寻找差异化的价值网和生态位，避免与巨头正面竞争，实现错位竞争或低端颠覆。一个比较有名的案例是美团网的创新之路。美团网是一家生活服务电商平台，它通过供需连思维模型，找到了一个新的价值网和生态位，实现了对传统电商的低端颠覆。具体来说，美团网的创新过程如下：分析市场中的供应和需求曲线，发现了一个潜在的机会：传统电商主要满足了实物商品的在线购买需求，但是生活服务类商品（如餐饮、娱乐、旅游等）的在线购买需求却没有得到很好的满足。选择一个目标市场或客户群，确定他们的核心需求和痛点，以及他们对产品或服务的期望：美团网选择了低消费人群作为目标市场，他们的核心需求是享受高品质的生活服务，但又不愿意花费太多的钱12。他们对产品或服务的期望是方便、便宜、有价值。拆解供给侧、需求侧和连接端的基本要素，找出可以重新组合的可能性：美团网拆解了供给侧、需求侧和连接端三个层面的基本要素。供给侧：生活服务类商品的供应商，如餐馆、电影院、酒店等；需求侧：低消费人群，如学生、白领等；连接端：互联网平台，如网站、手机应用等。重新组合基本要素，形成一个新的价值网或生态位，满足目标市场或客户群的核心需求和期望：美团网通过互联网平台，将生活服务类商品的供应商和低消费人群进行有效地连接，实现了一种新的商业模式——团购。团购的原理是利用大量用户的集体购买力，向供应商谈判出低于市场价的优惠价格，从而为用户提供方便、便宜、有价值的生活服务商品。同时，美团网也为供应商提供了一种新的营销渠道，帮助他们吸引更多的客户，提高了利用率和知名度。美团网通过供需连思维模型，创造了一个新的价值网和生态位，实现了对传统电商的低端颠覆。它不仅满足了用户对生活服务商品的在线购买需求，也为供应商提供了一种新的营销方式。美团网也因此成为了中国最大的生活服务电商平台之一。）”\n"
  //   // },
  //   {
  //     "act": "MECE原则",
  //     "prompt": "请帮我用MECE原则把你输出的内容做梳理。（MECE原则（Mutually Exclusive, Collectively Exhaustive）是一种思考问题和组织信息的逻辑框架，常用于管理咨询、商业分析和战略规划等领域。MECE原则包括两个核心要素：互斥性（Mutually Exclusive）和穷尽性（Collectively Exhaustive）。应用MECE原则能够帮助我们更系统地解决问题和进行分析。1、互斥性（Mutually Exclusive）：指将问题或信息划分成各个独立的子集，确保这些子集之间没有交集或重叠。互斥性要求我们在对问题或信息进行分类时，避免出现重复或模糊的类别。这有助于减少混淆、遗漏或双重计算的风险，使得我们的分析更加清晰和有效。2、穷尽性（Collectively Exhaustive）：指将问题或信息划分成子集的过程，要确保所有相关的内容都被覆盖到。穷尽性要求我们在划分子集时，确保涵盖了所有可能的情况，不遗漏任何重要信息。这有助于我们全面地理解问题和信息，避免因为忽略某些方面而导致分析不完整或偏颇。）”\n"
  //   },
  //   // {
  //   //   "act": "营销:需求三角之缺乏感",
  //   //   "prompt": "请先帮我分析XXX（自己按实际状况填写）的缺乏感”。\n"
  //   // },
  //   // {
  //   //   "act": "营销:需求三角之成本",
  //   //   "prompt": "请先帮我分析XXX（自己按实际状况填写）的状况下如何提升用户的能力，降低消费者的决策成本，并让消费者更好的做出选择。最后请给我一个你认为最重要的点”\n"
  //   // },
  //   // {
  //   //   "act": "TOC罗哥追问1：识别系统",
  //   //   "prompt": "请分析XXX（自己按实际情况填写）的系统按：Step 0. System：识别系统：识别系统的关键要素和连接关系，界定系统边界及目标；\n"
  //   // },
  //   // {
  //   //   "act": "TOC罗哥追问2：找出瓶颈",
  //   //   "prompt": "Step 1. Find：找到系统瓶颈。请务必遵从以色列物理学家高德拉特博士的TOC制约理论中对瓶颈及制约的定义，一般来说瓶颈或制约分为物理瓶颈和政策制约，物理瓶颈包括昂贵的设备、稀缺的资源，比如说货架的空间，餐厅的座位数，决定出餐速度的设备，酒店的房间数，不易招募或培养的人才，关键工艺程序的设备；政策制约包括公司各部门的制度、流程等人为因素限制了系统的产出；\n"
  //   // }
  // ];
  
      return jsonTemp.map((v) => [v.act, v.prompt]);
    } catch (error) {
      console.error("[Fetch] failed to fetch cn prompts", error);
      return [];
    }
  }

async function fetchEN() {
  console.log("[Fetch] fetching en prompts...");
  return [];
  try {
    // const raw = await (await fetch(EN_URL)).text();
    const response = await Promise.race([fetch(EN_URL), timeoutPromise(5000)]);
    const raw = await response.text();
    return raw
      .split("\n")
      .slice(1)
      .map((v) => v.split('","').map((v) => v.replace(/^"|"$/g, '').replaceAll('""','"')));
  } catch (error) {
    console.error("[Fetch] failed to fetch en prompts", error);
    return [];
  }
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
