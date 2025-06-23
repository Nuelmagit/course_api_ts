import express from "express"
import {ExampleService} from "./domain_services/example.service"
const app = express()
const port = 3000

// Mejoras:
// Evitar copiar y pegar codigo repetido / duplicar codigo
// Aplicar principio de una sola responsabilidad
// - Definicion de rutas
// - Setup de librerias
// - Manejo de errores
// - Definicio nde hanlders de rutas
// Eliminar hard dependencies
const exampleService = new ExampleService()

app.get('/example', async (req: any, res: any) => {
    try {
        const response = await exampleService.paginate(
            req.query.page,
            req.query.pageSize
        )
        res.status(200)
        res.json(response)
    } catch (error) {
        res.status(500)
        res.send("Internal server error")
    }
})

app.get('/example/:id', async (req: any, res: any) => {
    try {
        const response = await exampleService.getById(
            req.params.id
        )
        res.status(200)
        res.json(response)
    } catch (error) {
        res.status(500)
        res.send("Internal server error")
    }
})

app.delete('/example/:id', async (req: any, res: any) => {
    try {
        const response = await exampleService.delete(
            req.params.id
        )
        res.status(200)
        res.json(response)
    } catch (error) {
        res.status(500)
        res.send("Internal server error")
    }
})

app.put('/example/:id', async (req: any, res: any) => {
    try {
        const response = await exampleService.update(
            req.params.id
        )
        res.status(200)
        res.json(response)
    } catch (error) {
        res.status(500)
        res.send("Internal server error")
    }
})

app.post('/example', async (req: any, res: any) => {
    try {
        const response = await exampleService.create(
            req.body
        )
        res.status(200)
        res.json(response)
    } catch (error) {
        res.status(500)
        res.send("Internal server error")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
