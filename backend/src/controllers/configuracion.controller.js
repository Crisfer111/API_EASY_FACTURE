import { pool } from '../db.js'

export const getConfiguraciones = async (req,res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM Configuracion')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message:'Algo va mal'
        })
    }
}
export const getConfiguracion = async (req, res) => {
   try {
    const [rows] = await pool.query('SELECT * FROM Configuracion WHERE ID = ?', [
        req.params.id,
    ]);
  
    if (rows.length <= 0) 
      return res.status(404).json({
        mesage: 'No se encuentra la configuracion',
      });
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal",
    });
   }
};

export const createConfiguraciones =  async (req,res) => {
   try {
    const {name, salary} = req.body
    const [rows] = await pool.query(
        'INSERT INTO Configuracion (NombreEmpresa, DireccionEmpresa, ContactoEmpresa, InformacionImpuestos) VALUES (?, ?, ?, ?)',
        [NombreEmpresa, DireccionEmpresa, ContactoEmpresa, InformacionImpuestos]
        );
    res.send({ 
        id: rows.insertId,
        NombreEmpresa,
        DireccionEmpresa,
        ContactoEmpresa,
        InformacionImpuestos,
    });
  } catch (error) {
    return res.status(500).json({
        message:"Algo va mal"
    });
  }
};

export const deleteConfiguracion = async (req,res) => {
   try {
    const result = await pool.query('DELETE FROM Configuracion WHERE ID = ?',
      [req.params.id
    ]);
    
    if(result.affectedRows <= 0)
      return res.status(404).json({
        message: 'No se encuentra la configuracion'
    });

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
        message:"Algo anda mal",
    });
  }
}

export const updateConfiguracion = async (req,res) => {
   try {
    const {id} = req.params
    const {ContactoEmpresa, InformacionImpuestos} = req.body

    const [result] = await pool.query(
        'UPDATE Configuracion SET Configuracion =  IFNULL(?, ContactoEmpresa), DireccionEmpresa = IFNULL(?, DireccionEmpresa) WHERE ID = ?',
        [NombreEmpresa, DireccionEmpresa, ContactoEmpresa, InformacionImpuestos]
        );

    if(result.affectedRows === 0)
    return res.status(404).json({
        message: 'No se encuentra la configuracion',
    });

    const [rows] = await pool.query('SELECT * FROM Configuracion WHERE ID = ?', [
        id
    ]);
    
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
        message: "Algo va mal",
    });
  }
};

