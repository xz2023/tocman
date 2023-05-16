export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://jjjz1423p0.feishu.cn/docx/W9zrdv8mwobzTZxpTRccOlJ6nZc`; //地球图标跳小鹅通星球的地址
export const ISSUE_URL = `https://jjjz1423p0.feishu.cn/docx/W9zrdv8mwobzTZxpTRccOlJ6nZc`; //bug反馈跳客服二维码的地址
export const ZILIAOKU_URL = `https://jjjz1423p0.feishu.cn/docx/W9zrdv8mwobzTZxpTRccOlJ6nZc`; //资料库图标跳资料库内容的地址
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;
