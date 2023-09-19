import { pool } from '../db.js'

export const getFormasPagos = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM FormasPago')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getFormasPago = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM FormasPago WHERE ID = ?', [
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

export const createFormasPagos =  async (req,res) => {
   try {
    const {name, salary} = req.body
    const [rows] = await pool.query(
        'INSERT INTO FormaPago (NombreFormaPago) VALUES (?,)',
        [NombreFormaPago]
        );
    res.send({ 
        id: rows.insertId,
        NombreFormaPago,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteFormasPago = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROMFormaPago WHERE ID = ?',
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

export const updateFormasPago = async (req,res) => {
   try {
    const {id} = req.params
    const {NombreFormaPago} = req.body

    const [result] = await pool.query(
        'UPDATE FormaPago SET FormaPago =  IFNULL(?, Nombre), NombreFormaPago = IFNULL(?, NombreFormaPago) WHERE id = ?',
        [NombreFormaPago]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM FormasPago WHERE id = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

