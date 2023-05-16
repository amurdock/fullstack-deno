import { Application, Router } from 'oak/mod.ts'

const app = new Application()
const router = new Router()

router.get("/", (ctx) => {
  ctx.response.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
