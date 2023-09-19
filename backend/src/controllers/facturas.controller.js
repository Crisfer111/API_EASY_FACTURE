import { pool } from '../db.js'

export const getFacturas = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM Facturas')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getFactura = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM Facturas WHERE ID = ?', [
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

export const createFacturas =  async (req,res) => {
   try {
    const {NumeroFactura, FechaEmision, FechaVencimiento, Estado, Descripcion} = req.body
    const [rows] = await pool.query(
        'INSERT INTO Facturas (NumeroFactura, FechaEmision, FechaVencimiento, Estado, Descripcion) VALUES (?, ?, ?, ?, ?)',
        [NumeroFactura, FechaEmision, FechaVencimiento, Estado, Descripcion]
        );
    res.send({ 
        id: rows.insertId,
        NumeroFactura,
        FechaEmision,
        FechaVencimiento,
        Estado,
        Descripcion,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteFactura = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM Facturas WHERE ID = ?',
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

export const updateFactura = async (req,res) => {
   try {
    const {id} = req.params
    const {NumeroFactura, FechaEmision, FechaVencimiento, Estado, Descripcion} = req.body

    const [result] = await pool.query(
        'UPDATE Facturas SET Facturas =  IFNULL(?, NumeroFactura), FechaEmision = IFNULL(?, FechaEmision) WHERE ID = ?',
        [NumeroFactura, FechaEmision, FechaVencimiento, Estado, Descripcion]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM Facturas WHERE ID = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

