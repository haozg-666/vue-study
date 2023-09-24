import createApp from "@/main";

// 用于首屏渲染
// context由renderer传入
export default context => {
  return new Promise((resolve, reject) => {
    // 获取路由器和app实例
    const {app, router} = createApp();
    // 获取首屏地址
    router.push(context.url);
    router.onReady(() => {
      resolve(app);
    }, reject);
  })
};
