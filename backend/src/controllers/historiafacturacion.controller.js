import { pool } from '../db.js'

export const getHistoriaFacturaciones = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM HistoriaFacturacion')
        res.json(rows)
    } catch (error) {
      
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getHistoriaFacturacion = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM HistoriaFacturacion WHERE ID = ?', [
        req.params.id,
    ]);
  
    if (rows.length <= 0) 
      return res.status(404).json({
        mesage: 'Empleado no encontrado',
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal",
    });
   }
};

export const createHistoriaFacturaciones =  async (req,res) => {
   try {
    const {NumeroFactura, FechaEmision, ClienteID, ProductoID, Cantidad, PrecioUnitario, Total, Estado, FechaEntrega} = req.body
    const [rows] = await pool.query(
        'INSERT INTO HistoriaFacturacion (NumeroFactura, FechaEmision, ClienteID, ProductoID, Cantidad, PrecioUnitario, Total, Estado, FechaEntrega) VALUES (?, ?)',
        [NumeroFactura, FechaEmision, ClienteID, ProductoID, Cantidad, PrecioUnitario, Total, Estado, FechaEntrega]
        );
    res.send({ 
        id: rows.insertId,
        NumeroFactura,
        FechaEmision,
        ClienteID,
        ProductoID,
        Cantidad, 
        PrecioUnitario,
        Total,
        Estado,
        FechaEntrega
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteHistoriaFacturacion = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM HistoriaFacturacion WHERE id = ?',
      [req.params.id
    ]);
    
    if(result.affectedRows <= 0)
      return res.status(404).json({
        message: 'Empleado no encontrado'
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
        message:"Algo anda mal",
    });
  }
}

export const updateHistoriaFacturacion = async (req,res) => {
   try {
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query(
        'UPDATE HistoriaFacturacion SET name =  IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
        [name, salary, id]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM HistoriaFacturacion WHERE id = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

