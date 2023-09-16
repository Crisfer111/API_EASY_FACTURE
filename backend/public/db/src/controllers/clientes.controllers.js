import { pool } from '../db.js'

export const getClientes = async (req,res) => {
    try{
        throw new Error('Mi error')
        const [rows] = await pool.query('SELECT * FROM Clientes')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getCliente = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM Clientes WHERE ID = ?', [
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

export const createClientes =  async (req,res) => {
   try {
    const {Nombre, Direccion, CorreoElectronico, Telefono} = req.body
    const [rows] = await pool.query(
        'INSERT INTO Clientes (Nombre, Direccion, CorreoElectronico, Telefono) VALUES (?, ?, ?, ?)',
        [Nombre, Direccion, CorreoElectronico, Telefono]
        );
    res.send({ 
        id: rows.insertId,
        Nombre,
        Direccion,
        CorreoElectronico,
        Telefono,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteCliente = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM Clientes WHERE ID = ?',
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

export const updateCliente = async (req,res) => {
   try {
    const {id} = req.params
    const {Nombre, Direccion, CorreoElectronico, Telefono} = req.body

    const [result] = await pool.query(
        'UPDATE Clientes SET Clientes =  IFNULL(?, Telefono), CorreoElectronico = IFNULL(?, CorreoElectronico) WHERE ID = ?',
        [Nombre, Direccion, CorreoElectronico, Telefono]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM Clientes WHERE ID = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

