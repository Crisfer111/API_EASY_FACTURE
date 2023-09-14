import express from 'express'
import configuracionRoutes from './routes/configuracion.routes.js'
import clientesRoutes from './routes/clientes.routes.js'
import facturasRoutes from './routes/facturas.routes.js'
import formaspagoRoutes from './routes/formaspago.routes.js'
import historiasfacturacionRoutes from './routes/historiafacturacion.routes.js'
import productosRoutes from './routes/productos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'

const app = express()

app.use(express.json())

app.use('/api',configuracionRoutes)
app.use('/api',clientesRoutes)
app.use('/api',facturasRoutes)
app.use('/api',formaspagoRoutes)
app.use('/api',historiasfacturacionRoutes)
app.use('/api',productosRoutes)
app.use('/api',usuariosRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint No Encontrado'
    })
})

export default app