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
    const [rows] = await pool.query('SELECT * FROM Clientes WHERE id = ?', [
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
    const {name, salary} = req.body
    const [rows] = await pool.query(
        'INSERT INTO Clientes (name, salary) VALUES (?, ?)',
        [name, salary]
        );
    res.send({ 
        id: rows.insertId,
        name,
        salary,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteCliente = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM Clientes WHERE id = ?',
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

export const updateClientes = async (req,res) => {
   try {
    const {id} = req.params
    const {name, salary} = req.body

    const [result] = await pool.query(
        'UPDATE Clientes SET name =  IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',
        [name, salary, id]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'Empleado no encontrado',
    });

    const [rows] = await pool.query('SELECT * FROM Clientes WHERE id = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

