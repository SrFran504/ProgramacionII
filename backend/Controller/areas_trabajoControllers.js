const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select *from areas_trabajo',(err,areas_trabajo) =>{
            if(err){
                res.json(err);
            }
            res.json(areas_trabajo);
        });

    });

};

controller.edit = (req, res) => {

    const {idarea}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select *from areas_trabajo where idarea=?', [idarea], (err,areas_trabajo) => {
            res.json(areas_trabajo[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,areas_trabajo)=> {
       conn.query('insert into areas_trabajo set?', [data], (err,areas_trabajo) => {
        res.json(areas_trabajo);
       });
   })
};

controller.update = (req,res) =>{

    const {idarea}= req.params;
    const nuevo_areas_trabajo = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update areas_trabajo set ? where idarea =?', [nuevo_areas_trabajo, idarea], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {idarea}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from areas_trabajo where idarea =?', [idarea], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};


module.exports =controller;