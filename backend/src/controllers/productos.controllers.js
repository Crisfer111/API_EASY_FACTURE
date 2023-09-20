import { pool } from '../db.js'

export const getProductos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM Productos')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getProducto = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [
        req.params.id,
    ]);
  
    if (rows.length <= 0) 
      return res.status(404).json({
        mesage: 'Producto no encontrado',
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal",
    });
   }
};

export const createProductos =  async (req,res) => {
   try {
    const {Descripcion, PrecioUnitario, CodigoProducto, Categoria} = req.body
    const [rows] = await pool.query(
        'INSERT INTO Productos (Descripcion, PrecioUnitario, CodigoProducto, Categoria) VALUES (?, ?, ?, ?)',
        [Descripcion, PrecioUnitario, CodigoProducto, Categoria]
        );
    res.send({ 
        id: rows.insertId,
        Descripcion,
        PrecioUnitario,
        CodigoProducto,
        Categoria,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteProducto = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM Productos WHERE ID = ?',
      [req.params.id
    ]);
    
    if(result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Producto no encontrado'
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
        message:"Algo anda mal",
    });
  }
}

export const updateProducto = async (req,res) => {
   try {
    const {id} = req.params
    const {Descripcion, PrecioUnitario, CodigoProducto, Categoria} = req.body

    const [result] = await pool.query(
        'UPDATE Productos SET Prodcutos =  IFNULL(?, PrecioUnitario), CodigoProducto = IFNULL(?, CodigoProducto) WHERE ID = ?',
        [Descripcion, PrecioUnitario, CodigoProducto, Categoria]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Producto no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM Productos WHERE ID = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

