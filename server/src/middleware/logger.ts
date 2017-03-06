export default async function(ctx, next) {
  const start = new Date();
  await next();
  const ms: number = new Date().getTime() - start.getTime();
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
};
